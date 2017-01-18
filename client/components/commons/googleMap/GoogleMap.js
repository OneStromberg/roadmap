function GoogleMap(SuperClass) {
    return class extends SuperClass
    {
        constructor(domEl, args){
            var { markersFactory, areasFactory, pathsFactory, zoom, styles } = args;
            var opts = {zoom, 
                center:{ 
                    lng: 9.983312, 
                    lat: 51.983559 
                },
                disableDefaultUI: true,
                disableDoubleClickZoom:true, 
                styles
            };
            super(domEl, opts);
            this.areasFactory = areasFactory;
            this.markersFactory = markersFactory;
            this.pathsFactory = pathsFactory;
            this.subscribe(args.listeners);
        }
        init(markers, areas, paths){
            if (markers) {
                this.createMarkers(markers);
            }
            if (areas) {
                this.createAreas(areas);
            }
            if (paths) {
                this.createPaths(paths);
            }
            //this.addKmlLayer();
        }
        createMarkers(markers){
            var markerMap = null;
            if (markers) {
                markerMap = {};

                markers.forEach(data => {
                    if (data == null){
                        return null;
                    }
                    var marker = this.markersFactory(this, data);
                    markerMap[data.name] = marker;
                });
            }
            
            this.markers = markerMap;
        }
        updateMarkersData(markerData){
            var markerMap = null;
            if (markerData) {
                
                markerMap = {};

                markerData.forEach(data => {
                    if (data){
                        this.markers[data.name].data = data;
                    }
                });
            }
        }
        createAreas(areas){
            var areasMap = null;
            if (areas) {
                areasMap = {};

                areas.forEach(data => {
                    if (data == null){
                        return null;
                    }
                    var area = this.areasFactory(this, data);
                    areasMap[data.name] = area;
                });
            }
            this.areas = areasMap;
        }
        createPaths(paths){
            var pathsMap = null;
            if (paths) {
                pathsMap = {};
                paths.forEach(data => {
                    if (data == null){
                        return null;
                    }
                    var path = [];
                    for (var i = 0; i < data.placemarks.length; i++){
                        path.push(this.pathsFactory(this, data.placemarks[i]));
                    }

                    if (pathsMap[data.name]){
                        pathsMap[data.name].push(path);
                    } else {
                        pathsMap[data.name] = [path];
                    }
                });
            }
            this.paths = pathsMap;
        }
        subscribe(listeners){
            if (listeners.onZoom) {
                this.onZoom = listeners.onZoom;
                this.addListener('zoom_changed', function(){
                        this.onZoom(this, this.getZoom());
                    }.bind(this));
            }
        }
        addKmlLayer() {
            if (this.kmlSourceUrl) {
                this.kmlLayer = new google.maps.KmlLayer({
                    url: this.kmlSourceUrl,
                    suppressInfoWindows: true,
                    map: this
                });
            }
        }
    };
}

export default GoogleMap;