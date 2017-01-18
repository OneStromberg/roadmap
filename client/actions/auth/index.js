import { ActionType, StatusType, NotificationType } from './../../constants';
import { browserHistory } from 'react-router';
import * as notification from './../commons/notification';

import ApiClient from '../../utils/ApiClient/ApiClient.js';
import * as ApiClientActions from '../../utils/ApiClient/constants/actions';
import Logger from './../../utils/Logger/Logger';

export function authenticate(request) {
    return (dispatch) => {
        dispatch(changeStatus(StatusType.LOADING));
        ApiClient.doApiCall(ApiClientActions.LOGIN, request)
            .then((response) => {
                var authUser = response;
                console.log('authUser', authUser)
                ApiClient.doApiCall(ApiClientActions.GET_USER, {uid:authUser.uid})
                    .then((response) => {

                        var isAdmin = response.hasOwnProperty('admin') && response['admin'] === true;
                        if (isAdmin) {
                            browserHistory.push("/dashboard");
                        } else {
                            browserHistory.push("/personal-card");
                        }
                        dispatch(loginSubmit(Object.assign({},authUser,response), StatusType.SUCCESS));
                        dispatch(changeStatus(StatusType.NORMAL));
                    })
                    .catch((error) => {
                        dispatch(loginSubmit(error, StatusType.FAILED));
                        dispatch(notification.show(error.message,5));
                    });

            })
            .catch((error) => {
                dispatch(loginSubmit(error, StatusType.FAILED));
                dispatch(notification.show(error.message, 5, changeStatus(StatusType.NORMAL)));
            });
    };
}

export function loginSubmit(data, status) {
    return {
        type: ActionType.authApp.LOGIN,
        data: data,
        status: status
    };
}

export function removeUserList(request) {
    return (dispatch) => {
        return ApiClient.doApiCall(ApiClientActions.REMOVE_USERS, request)
        .then((response) => {
            dispatch({
                type: ActionType.authApp.REMOVE_USERS,
                data: response
            });
        });
    }
}

export function setQuery(data) {

    return (dispatch) => {

        var { mode, oobCode } = data;
        if (mode){
            if (mode === 'verifyEmail') {
                if (oobCode) {
                    dispatch(verifyEmailAction({actionCode:oobCode}));
                }
            }
            else if (mode === 'resetPassword') {
                if (oobCode) {
                    browserHistory.push('/restore-password');
                }
            }
        }

        return dispatch({
            type: ActionType.authApp.SET_QUERY,
            query: data
        });
    }
}

export function updateUserField(request) {
    return (dispatch) => {
        ApiClient.doApiCall(ApiClientActions.UPDATE_USER_FIELDS,request)
        .then(response => dispatch(updateAvatar(response)))
        .catch(error => dispatch(notification.show(error.message,5)));
    }
}

export function uploadAvatar(request) {
    return (dispatch) => {
        ApiClient.doApiCall(ApiClientActions.UPLOAD_AVATAR, request)
                .then((response) => {
                    ApiClient.doApiCall(ApiClientActions.UPDATE_USER_FIELDS, {avatarURL:response})
                        .catch(error => dispatch(notification.show(error.message, 5)));
                    dispatch(updateAvatar(response))
                })
                .catch((error) => dispatch(loginSubmit(error.error, StatusType.FAILED)));
    }
}

export function updateAvatar(url) {
    return {
        type: ActionType.authApp.UPDATE_AVATAR,
        url: url
    };
}

//API User Management profile send-invite

// req {
//     email: data.email,
//     roleId: data.title,
//     regionId: data.region
// }

// resp data {
//     "success": "Boolean",
//     "errors": "String[] (success == false)"
//     }

export function sendInvite(request) {
    Logger.log('call sendInvite with:', request);
    return (dispatch) => {

        dispatch(changeStatus(StatusType.LOADING));
        var req = Object.assign({}, request, {password:'Curator2017'});
        ApiClient.doApiCall(ApiClientActions.SEND_INVITE, req)
            .then((response) => {
                dispatch(changeStatus(StatusType.SUCCESS));
                browserHistory.push("/dashboard");
            })
            .catch(error => {
                dispatch(notification.show(error.message, 5, changeStatus(StatusType.NORMAL)));
                dispatch(changeStatus(StatusType.FAILED));
            })
    }
}

export function verifyEmailAction(request) {
    Logger.log('call verifyEmailAction with:', request);
    return (dispatch) => {

        dispatch(changeStatus(StatusType.LOADING));
        ApiClient.doApiCall(ApiClientActions.VERIFY_PASSWORD_RESET_CODE, request)
            .then((response) => {
                console.log('response', response);
                browserHistory.push("/restore-password?email=" + response);
                dispatch(changeStatus(StatusType.NORMAL));
            })
            .catch((error) => {
                console.log('error', error);
                dispatch(notification.show(error.message, 5, changeStatus(StatusType.NORMAL)))
                dispatch(changeStatus(StatusType.FAILED));
            });
    }
}

export function restorePassword(request) {
    Logger.log('call restorePassword with:', request);
    return (dispatch) => {
            dispatch(changeStatus(StatusType.LOADING));
            ApiClient.doApiCall(ApiClientActions.CONFIRM_PASSWORD_RESET, request)
                .then((response) => {
                    dispatch(changeStatus(StatusType.NORMAL));
                })
                .catch((error) => {
                    console.log('error', error);
                    dispatch(notification.show(error.message, 5))
                    dispatch(changeStatus(StatusType.FAILED));
                });
    }
}

export function requestInvite(data,status) {
    return {
        type: ActionType.authApp.REQUEST_INVITE,
        data: data,
        status:status
    };
}

//API User Management set-password

// req {
        // "passwordResetToken": "String",
        // "password": "String"
// }
// resp {
    // "success": "Boolean",
    // "errors": "String[] (success == false)",
    // "authToken": "String (success == true)"
// }

export function setPassword(request) {
    Logger.log('call setPassword with:', request);
    return (dispatch) => {
        dispatch(changeStatus(StatusType.LOADING));
        ApiClient.doApiCall(ApiClientActions.UPDATE_PASSWORD, request)
            .then((response) => {
                browserHistory.push("/personal-card");
                dispatch(changeStatus(StatusType.NORMAL));
            })
            .catch((error) => {
                console.log('error', error);
                dispatch(notification.show(error.message, 5,changeStatus(StatusType.NORMAL)))
                dispatch(changeStatus(StatusType.FAILED));
            });
    }
}

export function completeRegistration(data,status) {
    return {
        type: ActionType.authApp.COMPLETE_REGISTRATION,
        data: data,
        status: status
    };
}

export function changePassword(request) {
    Logger.log('call changePassword with:', request);
    return (dispatch) => {
        dispatch(changeStatus(StatusType.LOADING));
        ApiClient.doApiCall(ApiClientActions.UPDATE_PASSWORD, request)
            .then((response) => {
                browserHistory.push("/personal-card");
                dispatch(changeStatus(StatusType.NORMAL));
            })
            .catch((error) => {
                console.log('error', error);
                dispatch(notification.show(error.message, 5,changeStatus(StatusType.NORMAL)))
                dispatch(changeStatus(StatusType.FAILED));
            });
    }
}

export function getUserList(request) {
    return function (dispatch) {
        dispatch(changeStatus(StatusType.LOADING));
        ApiClient.doApiCall(ApiClientActions.GET_USER_LIST, request)
        .then((response) => {
            dispatch({
                type: ActionType.authApp.GET_USER_LIST,
                data: response
            });
        })
        .catch((error) => {
            dispatch(notification.show(error.message, 5))
            dispatch(changeStatus(StatusType.FAILED));
        });
    }
}

export function forgotPasswordAction(data) {
    return {
        type: ActionType.authApp.FORGOT_PASSWORD,
        data: data
    };
}



export function changeStatus(status) {
    return {
        type: ActionType.authApp.STATUS_CHANGE,
        status: status
    };
}

export function successMessage() {
    return {
        type: ActionType.authApp.SUCCESS_MESSAGE,
        dialog: authApp.SUCCESS
    };
}

export function saveFieldValue(fieldName, text) {
    return {
        type: ActionType.authApp.FIELD_VALUE_CHANGE,
        name: fieldName,
        text: text
    };
}
