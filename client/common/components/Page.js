import React from 'react';
import { Component } from 'components';

class Page extends Component {
    render(){
        return (
            <section className={this.getClassName(this.props) + "section"}>
                {this.props.children}
            </section>
        )
    }
}

export default Page;