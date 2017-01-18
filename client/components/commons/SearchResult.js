import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
class SearchResult extends React.Component {
    _getClassName(){
        return "search-result " + 
        (this.props.className ? this.props.className : "");
    }
    render() {
        return (
            <div className={this._getClassName()}>
                <Scrollbars 
                    autoHeight
                    autoHeight
                    autoHeightMin={0}
                    universal
                    renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                    renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    renderView={props => <div {...props} className=""/>}>
                        <ul>
                            <SearchList list={this.props.list} switchClick={this.props.switchClick}
                                                         routeClick={this.props.routeClick}
                                                         regionClick={this.props.regionClick}/>

                        </ul>
                    </Scrollbars> 
            </div>
        );
    }
}

const SearchList = (props) =>{
    return(
        <div>
            { 
                props.list ? props.list.map((item, i) => 
                        <SearchItem key={i} item={item}  switchClick={props.switchClick}
                                                         routeClick={props.routeClick}
                                                         regionClick={props.regionClick}/>
                )
                : null
            }
        </div>
    );
};

class SearchItem extends React.Component {
    onClick(){
        if(this.props.item.title === 'switches'){
            this.props.switchClick([this.props.item]);
        }
        if(this.props.item.title === 'routes'){
            this.props.routeClick([this.props.item]);
        }
        if(this.props.item.title === 'region'){
            this.props.regionClick([this.props.item]);
        }
    }
    render(){
        return(
            <li onClick={() => {this.onClick()}}>
                <p className="search-title">{this.props.item.title}</p>
                <p className="search-name">{this.props.item.name}</p>
            </li>
        );
    }
}

export default SearchResult;
