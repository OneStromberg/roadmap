import React from 'react';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import Label from './../../commons/Label'
import FormGroup from './../../commons/FormGroup';
import Button from './../../commons/Button';

class Filter extends React.Component {
    render() {
        return (
            <div className="left-side-bar">
                <header> <span className="filter-title">Filter</span> <span><b>100</b>/1873 <button>Reset</button></span>  </header>
                <div className="search-field"><input type="text" placeholder="Text Filter"/></div>
                <ul className="filter-list">
                    <li className="filter-item">
                        <div className="wrap-img"><img src="assets/img/icon/marker.png" alt="marker"/></div>
                        <div className="wrap-text">
                            <p className="filter-title">Region</p>
                            <p className="filter-name">Nordrhein-Westfalen</p>
                        </div>
                        <img src="assets/img/icon/arrow.svg" className="arrow" alt="arrow"/>
                    </li>
                    <li className="filter-item">
                        <div className="wrap-img"><img src="assets/img/icon/marker.png" alt="marker"/></div>
                        <div className="wrap-text">
                            <p className="filter-title">Routes</p>
                            <p className="filter-name">2456, 5467, 567</p>
                        </div>
                        <img src="assets/img/icon/arrow.svg" className="arrow" alt="arrow"/>
                    </li>
                    <li className="filter-item">
                        <div className="wrap-img"><img src="assets/img/icon/marker.png" alt="marker"/></div>
                        <div className="wrap-text">
                            <p className="filter-title">Condition</p>
                            <p className="filter-name">Band, Critical</p>
                        </div>
                        <img src="assets/img/icon/arrow.svg" className="arrow" alt="arrow"/>
                    </li>
                    <li className="filter-item">
                        <div className="wrap-img"><img src="assets/img/icon/calendar.svg" alt="calendar"/></div>
                        <div className="wrap-text">
                            <p className="filter-title">Last Updated</p>
                            <p className="filter-name">7 hours Ago</p>
                        </div>
                        <img src="assets/img/icon/arrow.svg" className="arrow" alt="arrow"/>
                    </li>
                    <li className="filter-item">
                        <div className="wrap-img"><img src="assets/img/icon/plus.svg" alt="plus"/></div>
                        <div className="wrap-text">
                            <a href="javascript:void(0)" className="add-new-filter">ADD NEW FILTER</a>
                        </div>
                        <img src="assets/img/icon/arrow.svg" className="arrow" alt="arrow"/>
                    </li>
                </ul>
                <div className="wrap-button">
                    <p>Processed 1458 switches</p>
                    <button className="update-filter">Update</button>
                </div>
            </div>
        );
    }
}

export default FormSection;