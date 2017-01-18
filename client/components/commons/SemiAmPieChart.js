if (process.env.BUILD_APP_TARGET === 'CLIENT') {
    require("amcharts3-export");
    require("amcharts3/amcharts/pie.js");
}
import React from 'react';
import AmCharts from 'amcharts3-react';
import moment from 'moment';



const config = {
    "type": "pie",
    "theme": "light",
    "startAngle": 0,
    "labelsEnabled": true,
    "labelRadius": -35,
    "labelText": "[[percents]]%",
    "labelFunction": function(slice) {
        var double = slice.percents *2;
        return double.toFixed(2) +'%';
    },
    "color": "#000000",
    "fontFamily": "Proxima Nova",
    "valueField": "value",
    "marginLeft": 100,
    "colors": [
        "#0fd1ce", "#ffb870", "#fb9582", "transparent"
    ],
    "legend": {
        "enabled": false
    },
    "graphs": [
        {
        "valueField": "value"
        }
    ],
    "dataProvider": null,
    "radius": "95%",
    "innerRadius": "55%",
    "pullOutRadius": 0,
    "pieY": "95%",
    "startDuration": 0,
    "showBalloon": function () {
        return false;
    },
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
                // get total count switches
                var switchCount = 0;
                for (var i = 0; i < chart.dataProvider.length - 1; i++){
                    switchCount += chart.dataProvider[i].value;
                }
                legendTitle.innerHTML = switchCount + " switches:";
                legend.appendChild(legendTitle);
                // cycle through the data
                for (var i = 0; i < chart.dataProvider.length - 1; i++) {
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

class SemiAmPieChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getDataProvder(data){
        var result = [];
        var countGood = 0;
        var countBad = 0;
        var countNormal = 0;
        // create data for last 7 days
        for (var i=6; i >= 0; i--){
            let date = moment().subtract(i,'day');   
            for (var j=0; j < data.length; j++){
                let measurments = data[j].measurments;
                if (measurments && measurments.length > 0) {
                    for (var k=0; k < measurments.length; k++){
                        let mesureDateOnDays = Math.round(measurments[k].zeit.unix() / (60 * 60 * 24));
                        let dateOnDays = Math.round(date.unix() / (60 * 60 * 24));
                        if (mesureDateOnDays === dateOnDays){
                            if (measurments[k].healthStatus > 70){
                                countGood += 1;
                            } else if (measurments[k].healthStatus < 30){
                                countBad += 1;
                            } else {
                                countNormal += 1;
                            }
                        }
                    }
                }
            }
        }
        result.push(
            {
                "status": 'good',
                "value": countGood
            },{
                "status": "normal",
                "value": countNormal
            },{
                "status": "bad",
                "value": countBad
            }
        );
        // Add 50% slice. Method taken from amChart documentation
        var sum = 0;
        for ( var x in result ) {
            sum += result[x].value;
        }
        result.push({
            "status": "Total",
            "value": sum,
            "alpha": 0
        });
        return result;
    }
    render(){
        return (<div className="chart semi-pie-chart">
                   <Chart dataProvider={this.getDataProvder} data={this.props.data}/>
                   <div className="info-wrap"></div>
                </div>);
    }
}

class Chart extends React.Component {
    render() {
        var _dataProvider = this.props.dataProvider(this.props.data);
        config.dataProvider = _dataProvider;
        return config.dataProvider ? React.createElement(AmCharts, config) : null;
    }
}

export default SemiAmPieChart;