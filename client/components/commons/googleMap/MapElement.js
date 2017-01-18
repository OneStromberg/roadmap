class MapElement {
    constructor(component, map, data){
        this.component = component;
        this.data = data;
        this.map = map;
        this.subscribe();
    }
    subscribe(){
        this.component.addListener('click', function(){
            this.onClick(this, this.data, this.map);
        }.bind(this));
        
        this.component.addListener('mouseover', function(){
            this.onMouseOver(this, this.data, this.map);
        }.bind(this));
        
        this.component.addListener('mouseout', function(){
            this.onMouseOut(this, this.data, this.map);
        }.bind(this));
    }
    center(el, map){
        map.centerAreas(map.areas);
    }
    active(value){
        this.activated = value;
    }
    hover(value){
        this.hovered = value;
    }
    setMap(map){
        this.component.setMap(map);
    }
    
    setValues(...args){
        this.component.setValues(...args);
    }
    setOpacity(value){
        this.component.setOpacity(value);
    }
    onClick(callback){
    }
    onMouseOver(callback){
    }
    onMouseOut(callback){
    }
};

export default MapElement;