import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { browserHistory } from 'react-router';
import { auth } from './../../../actions';
import UserListItem from './UserListItem';
import Checkbox from '../../commons/Checkbox';
import Image from '../../commons/Image';
import Button from '../../commons/Button';


class Dashboard extends React.Component {
    componentWillMount(){
        this.props.getUserList();
        this.selectedItems = [];
    }
    getUserItem(userList){
        var result = []
        for(var i = 0; i < userList.length; i++ ){
            result.push(<UserListItem onSelect={this.onUserItemSelect.bind(this)} key={i} id={i} {...userList[i]} />)
        }
        return result;
    }
    onUserItemSelect(i, selected){
        var index = this.selectedItems.indexOf(i);
        if (index === -1 && selected) {
            this.selectedItems.push(i);
        } else {
            this.selectedItems.splice(index, 1);
        }
    }
    onRemoveUsersClick(list){
        var userList =[];

        this.selectedItems.forEach( userId => {
            userList.push(this.props.userList[userId])
        });

        if (userList.length > 0) {
            this.props.removeUserList({userList:userList});
        }
    }
    onAddNewUser(){
        browserHistory.push('/request-invite');
    }
    render() {
        return (
            <div className="user-list">
                <UserListHeader onAddNewUser={this.onAddNewUser.bind(this)}
                    onRemoveUsersClick={this.onRemoveUsersClick.bind(this)}/>
                <div>
                    {this.props.userList ? this.getUserItem(this.props.userList) : null}
                </div>
            </div>
        );
    };
};

const UserListHeader = (props) => (
    <div className="user-head">
        <div className="user-checkbox" >
            <Button className="btn-8">
                <Checkbox id={"user-id"} ></Checkbox>
                <span className="caret"></span>
            </Button>
        </div>
        <div className="user-avatar" >
            <Button className="btn-8" onClick={props.onRemoveUsersClick}>
                <Image src="assets/img/basket.svg" alt="basket" />
            </Button>
        </div>
        <div className="user-basic">
            <p className="user-email">
                basic info
            </p>
        </div>
        <div className="user-position">
            <p>POSITION</p>
        </div>
        <div className="user-phone">
            <p>PHONE</p>
        </div>
        <div className="user-date">
            <p>creation date</p>
        </div>
        <div className="user-drop">
            <Button className="btn-9" onClick={props.onAddNewUser}>
                +
            </Button>
        </div>
        
    </div>
)

const stateMap = (state, props, ownProps) => {
    return {
        user: state.user,
        userList: state.application.data.userList,
        status: state.application.status
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(auth, dispatch);    
};

export default connect(stateMap, mapDispatchToProps)(Dashboard);