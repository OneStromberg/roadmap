import React from 'react';
import { Card, Component, Header, Link, View } from 'components';

class CardLink extends Component {
    render(){
        return(
            <Card>
                <Header>Link</Header>
                <Link href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link>
                <Link className="uk-link-muted" href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link>
                <Link className="uk-link-reset" href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link> 
            </Card>
        )
    }
}

export default CardLink;