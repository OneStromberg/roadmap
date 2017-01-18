
if (process.env.BUILD_APP_TARGET === 'CLIENT') {
    require("amcharts3/amcharts/pie.js");
    require("amcharts3-export");
}
import React from 'react';
import moment from 'moment';
import AmCharts from 'amcharts3-react';

const config = {
    "path": "amcharts3/amcharts",
    "pathToImages": "assets/img/",
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "MMM DD",
    "fixedPosition": true,
    "color":'rgba(21, 33, 61,.4)',
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0,
        "fixedPosition": true
    },
    "graphs": [{
        "id": "g1",
        "lineColor":"#4ad2e4",
        "fillColors": '#4ad2e4',
        "balloon":{
          "adjustBorderColor":false,
          "color":"#000",
          "lineThickness": 0,
          "fontSize": 10,
          "borderAlpha": 0,
          "fillAlpha": 0,
          "offsetX": 10,
          "offsetY": 15,
          "fixedPosition": true
        },
        "bullet": "none",
        "lineThickness": 2,
        "title": "red line",
        "valueField": "value",
        "balloonText": "<span class='line-baloon'>[[value]] mm</span>"
    }],
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": false,
        "valueLineBalloonEnabled": false,
        "cursorAlpha":1,
        "cursorColor":"#02c0d9",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":false,
        "fullWidth":true
    },
    "categoryField": "date",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45,
        "labelColorField": "#14203c",
        "labelOffset": 10,
        "gridAlpha": 0.05,
        "gridCount": 5,
        "color":'rgba(21, 33, 61,.4)',
        "gridColor": "rgb(21, 33, 61)",
        "axisColor":"rgb(21, 33, 61)'",
        "axisAlpha": 0.05,
    },
    "valueAxes": [{
        "stackType": "regular",
        "gridAlpha": 0.05,
        "gridCount": 5,
        "color":'rgba(21, 33, 61,.4)',
        "gridColor": "rgb(21, 33, 61)",
        "axisColor":"rgb(21, 33, 61)'",
        "axisAlpha": 0.05,
        "ignoreAxisWidth": true
    }],
    "export": {
        "enabled": false
    },
    "dataProvider": null
};

class AmLineWshChart extends React.Component {
    constructor(props) {
        super(props);
    }
    getDataProvider(data){
        var result = [];
        var tmp = {};
        data ? data.forEach((data,i) =>{
            tmp = {
                "date": data.zeit.format('MMM DD'),
                "value": data.whslMax
            };
            result.push(tmp);
        }) : null;
        return result;
    }
    render() {
        return (
             <div className="chart">
                <Chart dataProvider={this.getDataProvider} data={this.props.data}/>
                <div className="info-wrap"></div>
            </div>
        );
    }
}

class Chart extends React.Component {
    render() {
        var _dataProvider = this.props.dataProvider(this.props.data);
        config.dataProvider = _dataProvider;
        return config.dataProvider ? React.createElement(AmCharts, config) : null;
    }
}

export default AmLineWshChart;