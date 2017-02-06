import React from 'react';
import {Button, Card, Component, Header, Input, Password, View, Image} from 'components';
import RoundButton from './../../../common/components/RoundButton';
import Round from './../../../../common/components/Round';

class CardProfile extends Component {
    render(){
        return(
            <Card className="wrapper">
                <View className="avatar-wrapper">
                    <View>
                        <Round round />
                        <RoundButton />
                    </View>
                    <View>
                        <Header>Name</Header>
                        <Input className="input-profile" placeholder="Jason Clark" />
                        <Header>E-mail Address</Header>
                        <Input className="input-profile" placeholder="jason@dashboard.io" />
                    </View>
                </View>
                <Input placeholder="Location"/>
                <View>
                    <Header>Current password</Header>
                    <Password />
                    <Header>Set new password</Header>
                    <Password />
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