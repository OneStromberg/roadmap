
if (process.env.BUILD_APP_TARGET === 'CLIENT') {
    require("amcharts3-export");
    require("amcharts3/amcharts/pie.js");
}
import React from 'react';
import AmCharts from 'amcharts3-react';

const config = {
    "path": "node_modules/amcharts3/amcharts",
    "type": "pie",
    "theme": "light",
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,
    "marginRight": 100,
    "labelsEnabled": false,
    "fontFamily": "Proxima Nova",
    "fixedPosition": true,
    "showBalloon": function () {
        return false;
    },
    "startDuration": 0,
    "startAlpha": 0,
    "pullOutDuration": 0,
    "pullOutRadius": 0,
    "graphs": [
        {
            "balloonText": "",
            "valueField": "value",
            "balloonFunction": function (info) {
                return '';
            }
        }
    ],
    "dataProvider": null,
    "colors": [
        "#0fd1ce", "#ffb870", "#fb9582"
    ],
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10,
        "enabled": false
    },
    "balloon": {
        "adjustBorderColor": true,
        "color": "#fff",
        "cornerRadius": 5,
        "fillColor": "#f00"
    },
    "labelRadius": -130,
    "radius": "40%",
    "innerRadius": "80%",
    "listeners": [
        {
            "event": "rendered",
            "method": function (event) {
                // chart initialized let's build a custom legend
                var chart = event.chart;
                // get legend object
                var legend = document.querySelector(".info-wrap");
                // revome legend
                while (legend.firstChild) {
                    legend.removeChild(legend.firstChild);
                }
                // create legend title
                var legendTitle = document.createElement("div");
                legendTitle.className = "legend-title";
                // cycle through the data
                for (var i = 0; i < chart.dataProvider.length; i++) {
                    // data point
                    var dp = chart.dataProvider[i];
                    // create a legend ite m holder
                    var item = document.createElement("div");
                    // create marker
                    var marker = document.createElement("div");
                    marker.className = "marker";
                    marker.style.backgroundColor = chart.colors[i];
                    item.appendChild(marker);
                    // create title
                    var title = document.createElement("div");
                    title.className = "info-title";
                    title.innerHTML = dp.status;
                    item.appendChild(title);
                    // create absolute value
                    var value = document.createElement("div");
                    value.className = "value";
                    value.innerHTML = '(' + dp.value + ')';
                    item.appendChild(value);
                    legend.appendChild(item);
                }
            }
        }
    ]
};

class AmPieChart extends React.Component {
    constructor(props) {
        super(props);
    }
    getDataProvder(data){
        var result = [];
        let countGood = 0;
        let countBad = 0;
        let countNormal = 0;
        data.forEach((data,i) =>{
            if (data.healthStatus > 70){
                countGood += 1;
            } else if (data.healthStatus <= 70){
                countBad += 1;
            } else {
                 countNormal += 1;
            }
            result = [{
                "status": 'good',
                "value": countGood
            },{
                "status": "normal",
                "value": countNormal
            },{
                "status": "bad",
                "value": countBad
            }];
            // Add 50% slice. Method taken from amChart documentation
        });
        return result;
    }
    render() {
        return (
            <div className="chart">
                <Chart dataProvider={this.getDataProvder} data={this.props.data}/>
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

export default AmPieChart;