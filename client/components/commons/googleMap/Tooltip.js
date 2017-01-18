class Tooltip {
    constructor(props) {
        // extends google.maps.OverlayView super(props);        // Now initialize all
        // properties.
        this.marker_ = props.marker;
        this.content_ = props.content;
        this.position = props.position;
        this.map_ = props.map;
        this.cssClass_ = props.cssClass || null;

        this.div_ = null;
        this.setMap(this.map_);
    }

    onAdd() {

        var div = document.createElement('DIV');
        div.style.position = "absolute";

        if (this.cssClass_) 
            div.className += " " + this.cssClass_;
        
        div.innerHTML = this.content_;

        this.div_ = div;

        var panes = this.getPanes();
        panes.floatPane.appendChild(this.div_);
    }

    draw() {
        var overlayProjection = this.getProjection();
        var ne = overlayProjection.fromLatLngToDivPixel(this.position);
        var div = this.div_;
        div.style.left = ne.x + 'px';
        div.style.top = ne.y + 'px';
    }

    onRemove() {
        this.div_.parentNode.removeChild(this.div_);
    }

    hide() {
        if (this.div_) {
            this.div_.style.visibility = "hidden";
        }
    }

    show() {
        if (this.div_) {
            this.div_.style.visibility = "visible";
        }
    }
}
export default Tooltip;