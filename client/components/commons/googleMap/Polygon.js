import MapElement from './../googleMap/MapElement';

class Polygon extends MapElement {
    constructor(map, data, style){
        var {coordinates} = data;
        super(new google.maps.Polygon(Object.assign({},style,{
            path: coordinates,
            geodesic:true
        })),map, data);
        this.setMap(map);
        this.style = style;
        this.activated = false;
        this.hovered = false;    
        this.bounds = this.getBounds();
    };
    centerMap(){
        this.map.fitBounds(this.bounds);
    }
    setOptions(style){
        this.style = style;
        this.component.setOptions(style);
    }
    containsLocation(point){
        return google.maps.geometry.poly.containsLocation(point, this.component);
    }

    getBounds() {

        if (this.bounds){
            return this.bounds;
        }

        var bounds = new google.maps.LatLngBounds();
        var paths = this.component.getPaths();
        var path;        
        for (var i = 0; i < paths.getLength(); i++) {
            path = paths.getAt(i);
            for (var ii = 0; ii < path.getLength(); ii++) {
                bounds.extend(path.getAt(ii));
            }
        }

        return bounds;
    }
}

export default Polygon;