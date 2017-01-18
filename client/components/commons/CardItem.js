import React from 'react';
import { Col } from 'react-bootstrap';

const CardItem = (props) => {
    return(<Col lg={3} md={6} xs={12} className={props.className ? props.className : null }>
                <div className="card-item">
                    <p className="card-id">ID 75368</p>
                    <p className="card-name">132.068mm</p>
                    <p className="card-data">12.34.21.45</p>
                    <p className="card-data">33.12.22.66</p>
                    <p className="card-time">3hr 33m</p>
                </div>
            </Col>);
};

export default CardItem;