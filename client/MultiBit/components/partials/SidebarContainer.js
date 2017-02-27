import React from 'react';
import {Component, Container, View, Header, Text, Title, Card} from 'components';
import Sidebar from './Sidebar';

class PopupContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>07</Text>
                    <Text> Sidebar</Text>
                </Header>
                <Card className="sidebar-container">
					<Sidebar src="./../../assets/multibit/img/profile-photo.png" alt="Roberta Profile" title="Roberta Profile" costs="$ 200.77" />	
                </Card>
            </Container>
        )
    }
}

export default PopupContainer;;