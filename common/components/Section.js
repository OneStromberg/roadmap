import React from 'react';
import Component from './Component';

class Section extends Component {
    render(){
        return (
            <section className={"uk-section " + this.getClassName(this.props)}>
                {this.props.children}
            </section>
        )
    }
}

export default Section;