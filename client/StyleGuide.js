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
                    <Button className=" uk-button-primary"> Button </Button>
                    <Button className=" uk-button-default"> Button </Button>
                    <Button className=" uk-button-secondary"> Button </Button>
                    <Button className=" uk-button-danger"> Button </Button>
                    <Button className=" uk-button-text"> Button </Button>
                    <Button className=" uk-button-link"> Button </Button>
                </View>
                <View>
                    <Input />   
                </View>
                <View>
                    <Label> Label </Label>
                    <Label className="uk-label-success"> Success </Label>
                    <Label className="uk-label-warning"> Warning </Label>
                    <Label className="uk-label-danger"> Danger</Label>
                </View>
                <View>
                    <Link href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link> 
                </View>
                <View>
                    <Label>List</Label>
                    <List>
                        <ListItem>List Item 1</ListItem>
                        <ListItem>List Item 2</ListItem>
                        <ListItem>List Item 3</ListItem>
                    </List>    
                </View>
                <View>
                    <Text>Text</Text>
                </View>
                <View>
                    <Image />
                    <Text> Image </Text>
                </View>
            </View>)
    };
};

export default ComponentsApp;