import React from 'react';
import {Component, View, Header, Text, Container, Card} from 'components';
import GradientPaletteCard from './GradientPaletteCard';
import ColorPaletteCard from './ColorPaletteCard';

class ColorPaletteContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>01</Text>
                    <Text> Color Schemes</Text>
                </Header>
                <View className={this.getClassName(this.props) + "color-palette-container"}>
                    {this.props.paletteColors.map((pallet, i) => pallet.length > 1 ? <GradientPaletteCard key={i} background={pallet}/> : <ColorPaletteCard key={i} background={pallet} /> )} 
                </View>
            </Container>
        )
    }
}

export default ColorPaletteContainer;