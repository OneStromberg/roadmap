import React from 'react';
import Component from './../../../../common/components/Component';
import Button from './../../../../common/components/Button';
import TabBar from './../../../../common/components/TabBar';

class CardTab extends Component {
    render(){
        return(
            <TabBar>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
                <Button>Button 4</Button>
                <Button>Button 5</Button>
            </TabBar>
        )
    }
}

export default CardTab;