import React from 'react';
import {Component, Label, Title, View} from 'components';
import TypographyCard from './TypographyCard';

class TypographyContainer extends Component {
    render(){
        return(
            <View className="typography-container">
                <TypographyCard>
                    <View className="typography-card-item">
                        <Label className="text-header">Text Header</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 18, Color#354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label className="text-primary">Text primary</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 14, Color#354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label className="text-input-error">Text input error</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 14, #FD6363</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label className="text-input-success">Text input success</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 14, #4FBEAD</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label className="text-secondary">Text secondary</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 12, Color#354052</Label>
                    </View>
                </TypographyCard>
                <TypographyCard>
                    <View className="typography-card-item">
                        <Label>Header label</Label>
                        <Label className="typography-card-item-label">Open Sans Semibold, Size 24, Color #839DFE</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Header label secondary</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 24, Color #354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Form header label</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 18, Color #354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Label</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 14, Color #354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Button label</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 14, Color #FFFFFF</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Notification label</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 12, Color #354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Date label</Label>
                        <Label className="typography-card-item-label">Open Sans Light, Size 12, Color #354052</Label>
                    </View>
                    <View className="typography-card-item">
                        <Label>Calendar label</Label>
                        <Label className="typography-card-item-label">Open Sans Regular, Size 10, Color #354052</Label>
                    </View>
                </TypographyCard>
            </View>
        )
    }
}

export default TypographyContainer; 
