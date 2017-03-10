import React from 'react';
import { Component, View } from 'components';

import ContactsHeader from './ContactsHeader';
import ContactsBody from './ContactsBody';

class Contacts extends Component {
    render() {
        return (
            <View>
                <ContactsHeader />
                <ContactsBody />
            </View>       
        );
    }
}

export default Contacts;