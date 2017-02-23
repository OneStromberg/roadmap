import React from 'react';
import {Card, CardHeader, Component, Label, Link, Image, Title, Text, View} from 'components';

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
                                <Label>Gamebox</Label>
                            </CardHeader>}>
                            <View className="elements-card-footer">
                                <Label>5</Label>
                                <Label>step</Label>
                            </View>
                            <View className="elements-card-footer">
                                <Label >2</Label>
                                <Label>done</Label>
                            </View>
                        </Card>
                    </View>
                    <View className="elements-card">
                        <Card header={
                            <CardHeader className="card-header gradient">
                                <Label>Drive</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label>Google</Label>
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
                            <CardHeader className="card-header">
                                <Label>Test</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label>Coca-Cola</Label>
                            </CardHeader>}>
                            <View>
                                <Label>No active</Label>
                                <Image />
                            </View>
                        </Card>
                    </View>
                    <View className="elements-card">
                        <Card header={
                            <CardHeader className="card-header">
                                <Label>Test</Label> 
                                <Image src="assets/roadmap/shape.png"/> 
                                <Label>Coca-Cola</Label>
                            </CardHeader>}>
                            <View>
                                <Label>Pending</Label>
                                <Label>...</Label>
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
                            <Link>Update Profile</Link>
                            <Link>Help</Link>
                            <Link>Log Out</Link>
                        </Card>
                    </View>
                    <View className="elements-card-small">
                        <Card>
                            <Link>On hold</Link>
                            <Link>Archived</Link>   
                        </Card>
                    </View>
                </View>
            </View>
        )
    }
}

export default ElementsContainer; 