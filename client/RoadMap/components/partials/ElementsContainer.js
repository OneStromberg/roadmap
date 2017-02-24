import React from 'react';
import {ButtonLink, Card, CardHeader, Component, Label, Image, Title, Text, View} from 'components';

class ElementsContainer extends Component {
    render(){
        return(
            <View className="elements-container">
                <View className="elements-container-inner-top">
                    <View className="elements-card">
                        <Card header={
                            <CardHeader className="card-header">
                                <Label>Ecoplay</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label className="elements-card-secondary-label">Gamebox</Label>
                            </CardHeader>}>
                            <View className="elements-card-footer">
                                <Label>5</Label>
                                <Label>step</Label>
                            </View>
                            <View className="elements-card-footer">
                                <Label>2</Label>
                                <Label>done</Label>
                            </View>
                        </Card>
                    </View>
                    <View className="elements-card">
                        <Card header={
                            <CardHeader className="card-header gradient">
                                <Label>Drive</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label className="elements-card-secondary-label">Google</Label>
                            </CardHeader>}>
                            <View className="elements-card-footer">
                                <Label>5</Label>
                                <Label>step</Label>
                            </View>
                            <View className="elements-card-footer">
                                <Label>2</Label>
                                <Label>done</Label>
                            </View>
                        </Card>
                    </View>
                    <View className="elements-card no-active">
                        <Card header={
                            <CardHeader className="card-header">
                                <Label>Test</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label className="elements-card-secondary-label">Coca-Cola</Label>
                            </CardHeader>}>
                            <View>
                                <Label className="elements-card-secondary-label">No active</Label>
                                <Image src="assets/roadmap/arrow-icon.png"/>
                            </View>
                        </Card>
                    </View>
                    <View className="elements-card pending">
                        <Card header={
                            <CardHeader className="card-header">
                                <Label>Test</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label className="elements-card-secondary-label">Coca-Cola</Label>
                            </CardHeader>}>
                            <View>
                                <Label className="elements-card-secondary-label">Pending...</Label>
                            </View>
                        </Card>
                    </View>
                </View>
                <View className="elements-container-inner-bottom">    
                    <View className="elements-card-large">
                        <Card>
                            <Label>About project</Label>
                            <Text>Consideration should be given to the existing applicable literature, problems and successes associated with existing solutions, costs, and marketplace needs.</Text>
                        </Card>
                    </View>
                    <View className="elements-card-medium">
                        <Card>
                            <ButtonLink>Update Profile</ButtonLink>
                            <ButtonLink>Help</ButtonLink>
                            <ButtonLink>Log Out</ButtonLink>
                        </Card>
                    </View>
                    <View className="elements-card-small">
                        <Card>
                            <ButtonLink>On hold</ButtonLink>
                            <ButtonLink>Archived</ButtonLink>   
                        </Card>
                    </View>
                </View>
            </View>
        )
    }
}

export default ElementsContainer; 