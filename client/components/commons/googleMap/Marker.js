import MapElement from './../googleMap/MapElement';

class Marker extends MapElement {
     constructor(map, data){
        var {coordinates} = data;
        super(new google.maps.Marker({
            position: coordinates[0],
            map: map
        }),map, data);
        this.activated = false;
        this.hovered = false;    
        this.selected = false;
    }
    active(value){
        super.active(value);        
        this.setOpacity(value ? 1 : 0.4);
    }
    setIcon(...args){
        this.component.setIcon(...args);
    }
    centerMap(){
        this.map.setCenter(this.component.getPosition());
    }
    select(value){
        this.selected = value;
    }
}
export default Marker;