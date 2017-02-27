import React from 'react';
import {Component, Container, View, Header, Text, Title, Card} from 'components';
import Popup from './Popup';
import Button from './Button';

class PopupContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>08</Text>
                    <Text> Popup</Text>
                </Header>
                <Card className="popup-container">
					<Popup>
						<View>
							<Title>{this.props.title}</Title>
							<Button secondary>{this.props.text1}</Button>
							<Button secondary>{this.props.text2}</Button>
						</View>
					</Popup>	
                </Card>
            </Container>
        )
    }
}

export default PopupContainer;;