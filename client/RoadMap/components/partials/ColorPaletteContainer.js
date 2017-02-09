import React from 'react';
import {Component, View} from 'components';
import ColorPaletteCard from './ColorPaletteCard';

const paletteColor1 = "#839dfe";
const paletteColor2 = "#b1c2ff";
const paletteColor3 = "#738cea";
const paletteColor4 = "#4fbfad";
const paletteColor5 = "#54d3dc";
const paletteColor6 = "#fd6363";
const paletteColor7 = "#ffb0cb";
const paletteColor8 = "#354052";
const paletteColor9 = "#7f8fa4";
const paletteColor10 = "#c2c5cb";
const paletteColor11 = "#c1c1c1";
const paletteColor12 = "#eff3f6";
const paletteColor13 = "#f4f8f9";
const paletteColor14 = "#ffffff";
const paletteGradient1 = ["#839dfe", "#75c1f1"];
const paletteGradient2 = ["#4fbead", "#54d3dc"];
const paletteGradient3 = ["#fd6363", "#ffb0cb"];

let paletteColors = [
    [paletteColor1], 
    [paletteColor2], 
    [paletteColor3], 
    [paletteColor4],
    [paletteColor5],
    [paletteColor6],
    [paletteColor7],
    [paletteColor8],
    [paletteColor9],
    [paletteColor10],
    [paletteColor11],
    [paletteColor12],
    [paletteColor13],
    [paletteColor14],
    [paletteGradient1],
    [paletteGradient2],
    [paletteGradient3]
];

class ColorPaletteContainer extends Component {
    render(){
        return(
            <View className={this.getClassName(this.props) + "color-palette-container"}>
                {paletteColors.map((color, i) => <ColorPaletteCard key={i} colors={color} /> )} 
            </View>
        )
    }
}

export default ColorPaletteContainer;