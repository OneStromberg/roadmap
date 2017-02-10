import React from 'react';
import {Component, View} from 'components';
import ColorPaletteCard from './ColorPaletteCard';

const paletteColor1 = "#42b670";
const paletteColor2 = "#38a864";
const paletteColor3 = "#4fc87f";
const paletteColor4 = "#fcd11d";
const paletteColor5 = "#efb13d";
const paletteColor6 = "#ffc681";
const paletteColor7 = "#f99754";
const paletteColor8 = "#40acf4";
const paletteColor9 = "#619cff";
const paletteColor10 = "#268bea";
const paletteColor11 = "#5286dc";
const paletteColor12 = "#e43682";
const paletteColor13 = "#f43787";
const paletteColor14 = "#868aa3";
const paletteColor15 = "#a7adc5";
const paletteColor16 = "#19223a";
const paletteColor17 = "#1e2840";
const paletteColor18 = "#2c344c";
const paletteColor19 = "#333f5b";
const paletteColor20 = "#272f46";
const paletteColor21 = "#49526c";
const paletteColor22 = "#414b66";
const paletteColor23 = "#56617d";
const paletteColor24 = "#b5bad1";
const paletteGradient1 = ["#2d364f", "#212a42"];
const paletteGradient2 = ["#2e374f", "#1e253b"];
const paletteGradient3 = ["#2f3952", "#2a334b"];

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
    [paletteColor15],
    [paletteColor16],
    [paletteColor17],
    [paletteColor18],
    [paletteColor19],
    [paletteColor20],
    [paletteColor21],
    [paletteColor22],
    [paletteColor23],
    [paletteColor24],
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