import React, { Component } from "react";
import GoogleMap from './googleMap/GoogleMap';
import uuid from 'uuid';
import { common } from './../../actions';

//zoom:int
//center:Object = {lat: 41.876, lng: -87.624}

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.id = uuid();
    }
    componentDidMount() {
        var props = {
            zoom:this.props.zoom,
            listeners:{
                    onZoom:this.onZoom.bind(this)
                },
            pathsFactory:this.createRouteMap.bind(this),
            areasFactory:this.createRegion.bind(this),
            styles:this.props.mapStyles, 
            markersFactory:this.createSwitch.bind(this)
        };
        this.map = new (GoogleMap(google.maps.Map))(document.getElementById(this.id + '-map-wrapper'), props);
        this.props.mapLoaded(this.map);
    }
    createSwitch(map, data) {
        return this.props.createSwitch(map, data, this.switchClick.bind(this));
    }
    createRouteMap(map, data) {
        return this.props.createRoute(map, data);
    }
    createRegion(map, data) {
        return this.props.createRegion(map, data, this.regionClick.bind(this));
    }
    onZoom(map, zoom) {
        if(this.map && this.map.markers) {
            for (var marker in this.map.markers) {
                this.map.markers[marker].setType(zoom < 10 ? 1 : 0);
            };
        }
    }
    regionClick(region) {
        this.props.regionClick(region.activated ? [region.data] : null);
    }
    switchClick(swtch, switchData, map) {
        this.props.switchClick(swtch.selected ? [swtch.data] : null, switchData, this.map);
    }
    componentWillReceiveProps(nextProps){

        this.unselectRegions(this.map.areas, this.props.activeRegions);

        if (this.props.activeSwitches) {
            this.props.activeSwitches.forEach( swtch => {
                this.map.markers[swtch.name].active(false);
                this.map.markers[swtch.name].checkState();
            });
        }
        if (this.props.selectedSwitches) {
            this.props.selectedSwitches.forEach( swtch => {
                this.map.markers[swtch.name].select(false);
                this.map.markers[swtch.name].checkState();
            });
        }

        if (this.props.selectedRoutes) {
            this.unselectRoutes(this.map.paths, this.props.selectedRoutes);
        }

        if (this.props.activeRoutes) {
            this.unselectRoutes(this.map.paths, this.props.activeRoutes);
        }
    }
    selectRoutes(regions, routes) {
        regions.forEach(data => {
            let region = this.map.areas[data.name].component;
            routes.forEach(routeData => {
                var pathName = routeData.name;
                var path = this.map.paths[pathName];
                path.forEach( placemarks => {
                    for (var j = 0; j < placemarks.length; j++) {
                        var route = placemarks[j];
                        var inRegion = this.regionContainsPath(region, route);
                        route.active(inRegion);
                    }
                });
            });
        });
    }
    regionContainsPath(region, route){
        let routePoints = route.component.getPath().getArray();

        for (var i = 0; i < routePoints.length; i++){
            let point = routePoints[i];
            if(!google.maps.geometry.poly.containsLocation(point, region)){
                return false;
            }
        }

        return true;
    }
    unselectRegions(areas, activeRegions){
        if (activeRegions && activeRegions.length > 0){
            activeRegions.forEach(data => {
                let region = areas[data.name];
                region.active(false);
                region.checkState();
            });
        }
    }
    unselectRoutes(routes, selectedRoutes) {
        selectedRoutes.forEach(data => {
            var path  = routes[data.name];
            path.forEach(placemarks => {
                for (var j = 0; j < placemarks.length; j++) {
                    var route = placemarks[j];
                    route.active(false);
                }
            });
        });
    }
    render() {
        if(this.map) {
            let {switches, regions, selectedRoutes, activeSwitches, selectedSwitches, activeRegions, activeRoutes}  = this.props;
            
            this.map.updateMarkersData(switches);

            if (selectedRoutes) {
                this.selectRoutes(activeRegions || regions, selectedRoutes);
            }
            else if (activeRoutes) {
                this.selectRoutes(activeRegions || regions, activeRoutes);
            }

            if (activeRegions && activeRegions.length > 0) {
                activeRegions.forEach(data => {
                    let region = this.map.areas[data.name];
                    region.active(true);
                    region.checkState();
                });
            }

            if (selectedSwitches && selectedSwitches.length > 0) {
                let firstSelectedSwitch = selectedSwitches[0];
                this.map.markers[firstSelectedSwitch.name].centerMap();
                this.map.markers[firstSelectedSwitch.name].select(true);
                this.map.markers[firstSelectedSwitch.name].checkState();
                this.map.setZoom(12);
            } else {
                if(activeSwitches && activeSwitches.length > 0) {
                    activeSwitches.forEach(data => {
                        this.map.markers[data.name].active(true);
                    });
                }
                if (this.map.areas) {
                    let bounds = new google.maps.LatLngBounds();
                    if (activeRegions && activeRegions.length > 0){
                        activeRegions.forEach(data => bounds.union(this.map.areas[data.name].bounds));
                    } else {
                        Object.values(this.map.areas).forEach(area => bounds.union(area.bounds));
                    }

                    this.map.fitBounds(bounds);
                }
            }
        }
        return (
            <div className="map-wrapper" id={this.id + "-map-wrapper"}></div>
        );
    }
}

export default MapComponent;