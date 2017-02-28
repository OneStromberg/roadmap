import React from 'react';
import {Component, Container, View, Header, Text, Image, Title, Card} from 'components';
import Popup from './Popup';
import Button from './Button';

class PopupContainerWarning extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>09</Text>
                    <Text> Popup Warning</Text>
                </Header>
                <Card className="popup-container">
					<Popup className="popup-warning">
						<View>
							<Title>{this.props.title}</Title>
							<Text>{this.props.text1}</Text>
							<Image src="./../assets/multibit/img/keepkey.png" alt="KeepKey Device" />
							<Button back>Cancel</Button>
						</View>
					</Popup>	
                </Card>
            </Container>
        )
    }
}

export default PopupContainerWarning;;