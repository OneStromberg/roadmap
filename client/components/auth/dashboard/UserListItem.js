import React from 'react';
import Checkbox from '../../commons/Checkbox';
import { Image } from 'react-bootstrap';
//import Image from '../../commons/Image';

class UserListItem extends React.Component {
    constructor(props){
        super(props);
        console.log('props', props);
    }
    onSelect(e){
        if (this.props.onSelect){
            this.props.onSelect(this.props.id, e.target.checked);
        }
    }
    render() {
        return (
            <div className="user-item">
                <div className="user-checkbox" >
                    <Checkbox onChange={this.onSelect.bind(this)} id={"user-" + this.props.id} ></Checkbox>
                </div>
                <div className="user-avatar">
                    <Image src={this.props.avatarURL} rounded alt="avatar"/>
                </div>
                <div className="user-basic">
                    <p className="user-name">
                        {(this.props.firstname || this.props.lastname) ? 
                            this.props.firstname || "" + ' ' + this.props.lastname || "" 
                            : 
                            "empty"}
                    </p>
                    <p className="user-email">
                        {this.props.email || "empty"}
                    </p>
                </div>
                <div className="user-position">
                    <p>{this.props.firstname || "empty"}</p>
                </div>
                <div className="user-phone">
                    <p>{this.props.phone || "empty"}</p>
                </div>
                <div className="user-date">
                    <p>{this.props.creatingDate || "empty"}</p>
                </div>
                <div className="user-drop">
                    <p><Image src="assets/img/dot.svg" alt="dot" /></p>
                </div>
                
            </div>
        )
    }
}

export default UserListItem;