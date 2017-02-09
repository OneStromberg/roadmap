import React from 'react';
import {Component, View} from 'components';
import ColourPaletteCard from './ColourPaletteCard';

const paletteColour1 = "#839dfe";
const paletteColour2 = "#b1c2ff";
const paletteColour3 = "#738cea";
const paletteColour4 = "#4fbfad";
const paletteColour5 = "#54d3dc";
const paletteColour6 = "#fd6363";
const paletteColour7 = "#ffb0cb";
const paletteColour8 = "#354052";
const paletteColour9 = "#7f8fa4";
const paletteColour10 = "#c2c5cb";
const paletteColour11 = "#c1c1c1";
const paletteColour12 = "#eff3f6";
const paletteColour13 = "#f4f8f9";
const paletteColour14 = "#ffffff";


let paletteColours = [
    [paletteColour1], 
    [paletteColour2], 
    [paletteColour3], 
    [paletteColour4],
    [paletteColour5],
    [paletteColour6],
    [paletteColour7],
    [paletteColour8],
    [paletteColour9],
    [paletteColour10],
    [paletteColour11],
    [paletteColour12],
    [paletteColour13],
    [paletteColour14]
];

class ColourPaletteContainer extends Component {
    render(){
        return(
            <View className={this.getClassName(this.props) + "color-palette-container"}>
                {paletteColours.map((colour, i) => <ColourPaletteCard key={i} colors={colour} /> )} 
            </View>
        )
    }
}

export default ColourPaletteContainer;