import React from 'react';
import {Button, Card, Component, Header, Input, Password, View} from 'components';
import RoundButton from './../../../common/components/RoundButton';

class CardProfile extends Component {
    render(){
        return(
            <Card>
                <View>
                    <RoundButton />
                </View>
                <View>
                    <Header>Name</Header>
                    <Input />
                </View>
                <View>
                    <Header>E-mail Address</Header>
                    <Input />
                </View>
                <View>
                    <Input />
                </View>
                <View>
                    <Header>Current password</Header>
                    <Password />
                </View>
                <View>
                    <Header>Set new password</Header>
                    <Password />
                </View>
                <View>
                    <Header>Confirm password</Header>
                    <Password />
                </View>
                <View>
                    <Button>Update</Button>
                </View>
            </Card>
        )
    }
}

export default CardProfile;