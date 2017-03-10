import React from 'react';

import { Component, View } from 'components';

import Page from './../../../common/components/Page';
import SideBar from './../partials/sideBar';

class AppWindow extends Component {
    render() {
        return (
            <Page className="app-window-container">
                <SideBar src="./assets/img/multibit-lg@2x.png"/>
                {this.props.children}
            </Page>
        );
    }
}

export default AppWindow;