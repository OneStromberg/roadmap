import React from 'react';
import {Button, Card, Component, Header, Input, Password, View, Image} from 'components';
import RoundButton from './../../../common/components/RoundButton';
import Round from './../../../../common/components/Round';

class CardProfile extends Component {
    render(){
        return(
            <Card className="profile-wrapper">
                <View className="avatar-wrapper">
                    <View>
                        <Round round />
                        <RoundButton />
                    </View>
                    <View>
                        <Header>Name</Header>
                        <Input />
                        <Header>E-mail Address</Header>
                        <Input />
                    </View>
                </View>
                <Input />
                <View>
                    <Header>Current password</Header>
                    <Password />
                    <Header>Set new password</Header>
                    <Password />
                    <Header>Confirm password</Header>
                    <Password />
                    <Button>Update</Button>
                </View>
            </Card>
        )
    }
}

export default CardProfile;