import React from 'react';
import {Card, Component, Input, Label, View, Text, Title} from 'components';
import FormsSelect from './FormsSelect';
import Slct from 'react-select';
import 'react-select/dist/react-select.css';

class DropdownsContainer extends Component {
    render(){
        return(
            <Card className="forms-card">
                <View>
                    <Label className="forms-label"> Select Empty <FormsSelect /> </Label>
                    <Label className="forms-label"> Select Typing <FormsSelect /> </Label>
					<Slct />
                </View>
       	 	</Card>
        )
    }
}

export default DropdownsContainer;

