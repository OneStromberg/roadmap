import * as ApiClientActions from '../../utils/ApiClient/constants/actions';

class RequestBuilder
{
    static buildCallAction(actionType, req){
        switch (actionType) {
            case ApiClientActions.LOGIN: 
                let {email, password} = req;
                return new Promise((resolve, reject) => {
                    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
                        var uid = response.uid;

                        firebase.database().ref('/users/' + uid).update({lastActivity:(new Date()).getTime()});

                        resolve(response)
                    }).catch( e => {
                        reject(e);
                    });
                });
            case ApiClientActions.REMOVE_USERS:
                var {userList} = req;
                return new Promise((resolve) => {
                    userList.forEach(user => {
                        firebase.database().ref('/users/' + user.uid).update({removed:true})
                    })
                    resolve(userList);
                });
            case ApiClientActions.UPLOAD_AVATAR:
                var {uid, file, metadata} = req;
                return new Promise((resolve) => {
                    var storageRef = firebase.storage().ref();
                    storageRef.child('avatars/' + uid).put(file, metadata).then( function(snapshot) {
                        var url = snapshot.metadata.downloadURLs[0];
                        resolve(url);
                    });
                });
            case ApiClientActions.UPDATE_USER_FIELDS:
                var {uid} = req;
                return new Promise((resolve) => {
                    firebase.database().ref('/users/' + uid).update(req);
                });
            case ApiClientActions.SEND_INVITE:
                var {email, password} = req;
                return new Promise((resolve, reject) => {
                    firebase.auth().createUserWithEmailAndPassword(email, password).then( user => {
                        console.log(user);
                        firebase.database().ref('users/' + user.uid).set({
                            email: user.email,
                        });
                        user.sendEmailVerification();
                        resolve(user);
                    }).catch( e => {
                        reject(e);
                    })
                });
            case ApiClientActions.GET_USER:
                var {uid} = req;
                return new Promise((resolve) => {
                    firebase.database().ref('/users/' + uid).once('value')
                        .then(response => {
                            resolve(response.val())
                        });
                });
            case ApiClientActions.UPDATE_PASSWORD:
                var {password} = req;
                return new Promise((resolve, reject) => {
                    firebase.auth().currentUser.updatePassword(password)
                        .then(response => resolve(response))
                        .catch(error => reject(error));
                });
            case ApiClientActions.VERIFY_PASSWORD_RESET_CODE:
                var {actionCode} = req;
                return new Promise((resolve) => {
                    firebase.auth().verifyPasswordResetCode(actionCode).then(email => resolve(email));
                });
            case ApiClientActions.CONFIRM_PASSWORD_RESET:
                var {actionCode, newPass} = req;
                return new Promise((resolve) => {
                    firebase.auth().confirmPasswordReset(actionCode, newPass).then(() => resolve());
                });
            case ApiClientActions.SEND_PASSWORD_RESET_EMAIL:
                var {email} = req;
                return new Promise((resolve, reject) => {
                    firebase.auth().sendPasswordResetEmail(email)
                    .then(() => resolve())
                    .catch(error => reject(error));
                });
            case ApiClientActions.GET_USER_LIST:
                return new Promise((resolve) => {
                    firebase.database().ref('/users/').once('value').then(response => { 
                        var result = [];
                        if (response) {
                            var userMap = response.val();
                            for (var uid in userMap) {
                                if (!userMap[uid].removed) {
                                    result.push(Object.assign({}, userMap[uid], {uid:uid}));
                                }
                            }
                        }
                        resolve(result);
                    });
                });
        }
    }
}

export default RequestBuilder;