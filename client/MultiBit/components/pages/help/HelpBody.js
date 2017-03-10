import React from 'react';
import { Component, Section } from 'components';

import CurrencyInfo from './../../partials/CurrencyInfo';
import CurrencyBar from './../../partials/currencyBar';

class HelpBody extends Component {
    render() {
        return (
            <Section className="app-window-section">
                <CurrencyBar />
                <CurrencyInfo />
            </Section>
        );
    }
}

export default HelpBody;