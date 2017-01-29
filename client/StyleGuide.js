import React from 'react';
import View from 'components/View';
import Button from 'components/Button';
import Image from 'components/Image';
import Input from 'components/Input';
import Label from 'components/Label';
import Link from 'components/Link';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Text from 'components/Text';
import Component from 'components/Component';

class ComponentsApp extends React.Component{
     constructor(props){
        super(props);
        this.state = {toggle: false};
    }

    someClickHandler(){
        this.setState({toggle: !this.state.toggle});
    }

    render(){
        return(
            <View>
        
                <View>
                    <Button> Button </Button>
                    <Text> Button </Text>
                </View>
                <View>
                    <Image />
                    <Text> Image </Text>
                </View>
                <View>
                    <Input />   
                    <Text> Input </Text>
                </View>
                <View>
                    <Label> Test label </Label>
                    <Text> Label </Text>
                </View>
                <View>
                    <Link /> 
                    <Text> Link </Text>
                </View>
                <View>
                    <List>
                        <ListItem>List Item 1</ListItem>
                        <ListItem>List Item 2</ListItem>
                        <ListItem>List Item 3</ListItem>
                        <ListItem>List Item 4</ListItem>
                        <ListItem>List Item 5</ListItem>
                        <ListItem>List Item 6</ListItem>
                    </List>    
                </View>
                <View>
                    <Text />
                    <Text> Text </Text>
                </View>
            </View>)
    };
};

export default ComponentsApp;