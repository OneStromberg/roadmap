import React from 'react';
import {Component, Container, View, Header, Text, Card} from 'components';
import Select from './Select'
import Dropdown from './Dropdown'

var profile = [{
    name: "Roberta profile"
}, {
    name: "Bitcoin Address"
}, {
    name: "Litecoin Address"
}];

var asset = [{
    name: "Dogcoin Address"
}, {
    name: "Bitcoin Address"
}, {
    name: "Litecoin Address"
}];

class DropdownsContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>05</Text>
                    <Text> Dropdowns</Text>
                </Header>
                <Card className="dropdowns-container">
					<Select className="dropdown-primary" list={profile} selected={0} />
                    <Dropdown title="Add field" className="dropdown-simple" list={asset} selected={0} />
                    <Dropdown title="Set Assets" className="dropdown-secondary" list={asset} selected={0} />
                </Card>
            </Container>
        )
    }
}

export default DropdownsContainer;

