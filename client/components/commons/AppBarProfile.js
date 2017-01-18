import React from 'react';

import {Nav} from 'react-bootstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Image from './Image';
import Badge from './Badge';
import Button from './Button';

class AppBarProfile extends React.Component {
    render(){
        return(
            <Nav pullRight>
                <Image src="assets/img/user.png" alt="user-avatar" className="user-avatar"/>
                <Button></Button>
            </Nav>
        )
    }
}

export default AppBarProfile;