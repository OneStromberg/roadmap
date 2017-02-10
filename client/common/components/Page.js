import React from 'react';
import { Component } from 'components';

class Page extends Component {
    render(){
        return (
            <section className={"section" + this.getClassName(this.props)}>
                {this.props.children}
            </section>
        )
    }
}

export default Page;