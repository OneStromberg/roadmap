import MapElement from './../googleMap/MapElement';

class Polyline extends MapElement {
    constructor(map, data){
        var {path, style} = data;
        super(new google.maps.Polyline(Object.assign({},style,{
            map:map,
            path: path,
            geodesic:true
        })), map, data);
    }
    setOpacity(value) {
        this.component.setOptions({strokeOpacity:value});
    }
}

export default Polyline;