import React from 'react';
import {Button, Card, Component, Header, Input, Password, View, Image, Text, CardHeader, Round, TabBar} from 'components';

class CardProfile extends Component {
    render(){
        return(
            <Card className="card-profile" header={
                <CardHeader>
                    <TabBar center activeItem={1}>
                        {"Tab 1"}
                        {"Tab 2"}
                    </TabBar>
                </CardHeader>    
            }>
                <View className="profile-wrapper">
                    <View className="avatar-wrapper">
                        <View>
                            <Round round />
                            <Button>Avatar Update</Button>
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
                        <Button className="button-update">Update</Button>
                    </View>
                </View>           
            </Card>
        )
    }
}

export default CardProfile;