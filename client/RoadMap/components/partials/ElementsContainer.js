import React from 'react';
import {Card, CardHeader, Component, Label, Image, Title, Text, View} from 'components';

class ElementsContainer extends Component {
    render(){
        return(
            <View className="elements-container">
                <View className="elements-card">
                    <Card header={
                        <CardHeader>
                            <Label>Ecoplay</Label> 
                            <Image /> 
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
                        <CardHeader>
                            <Label>Drive</Label> 
                            <Image /> 
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
                        <CardHeader>
                            <Label>Test</Label> 
                            <Image /> 
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
                        <CardHeader>
                            <Label>Test</Label> 
                            <Image /> 
                            <Label>Coca-Cola</Label>
                        </CardHeader>}>
                        <View>
                            <Label>Pending</Label>
                            <Label>...</Label>
                        </View>
                    </Card>
                </View>
                <View className="elements-card-large">
                    <Card>
                        <Label>About project</Label>
                        <Text>Consideration should be given to the existing applicable literature, problems and successes associated with existing solutions, costs, and marketplace needs.</Text>
                    </Card>
                </View>
                <View className="elements-card-medium">
                    <Card>
                        
                    </Card>
                </View>
                <View className="elements-card-small">
                    <Card>
                        
                    </Card>
                </View>
            </View>
        )
    }
}

export default ElementsContainer; 