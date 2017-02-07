import React from 'react';
import Component from './../../../../common/components/Component';
import Button from './../../../../common/components/Button';
import Card from './../../../../common/components/Card';
import TabBar from './../../../../common/components/TabBar';
import Text from './../../../../common/components/Text';

class CardTab extends Component {
    render(){
        return(
            <Card>
                <TabBar center>
                    <Text>Tab 1</Text>
                    <Text>Tab 2</Text>
                    <Text>Tab 3</Text>
                    <Text>Tab 4</Text>
                </TabBar>
            </Card>
        )
    }
}

export default CardTab;