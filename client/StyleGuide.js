import React from 'react';
import View from 'components/View';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Image from 'components/Image';
import Input from 'components/Input';
import Label from 'components/Label';
import Link from 'components/Link';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Text from 'components/Text';
import Component from 'components/Component';
import Header from 'components/Header';

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
                    <Header>Image</Header>
                    <Image />
                </View>
                <View>
                    <Header>Header</Header>
                    <Header />
                </View>
                <View>
                    <Header>Button</Header>
                    <Button> Button </Button>
                    <Button className=" uk-button-primary"> Button </Button>
                    <Button className=" uk-button-default"> Button </Button>
                    <Button className=" uk-button-secondary"> Button </Button>
                    <Button className=" uk-button-danger"> Button </Button>
                    <Button className=" uk-button-text"> Button </Button>
                    <Button className=" uk-button-link"> Button </Button>
                </View>
                <View>
                    <Header>Input</Header>
                    <Input />  
                </View>
                <View>
                    <Header>Label</Header>
                    <Label> Label </Label>
                    <Label className="uk-label-success"> Success </Label>
                    <Label className="uk-label-warning"> Warning </Label>
                    <Label className="uk-label-danger"> Danger</Label>
                </View>
                <View>
                    <Header>Link</Header>
                    <Link href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link>
                    <Link className="uk-link-muted" href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link>
                    <Link className="uk-link-reset" href="https://facebook.github.io/react-native/docs/getting-started.html">Link</Link> 
                </View>
                <View>
                    <Label> List Header</Label>
                    <List>
                        <ListItem>List Item 1</ListItem>
                        <ListItem>List Item 2</ListItem>
                        <ListItem>List Item 3</ListItem>
                        <ListItem>List Item 4</ListItem>
                    </List>    
                </View>
                <View>
                    <Header>Text</Header>
                    <Text className="uk-text-lead">Text</Text>
                    <Text className="uk-text-meta">Text</Text>
                    <Text className="uk-text-primary">Text</Text>
                    <Text className="uk-text-success">Text</Text>
                    <Text className="uk-text-warning">Text</Text>
                    <Text className="uk-text-danger">Text</Text>
                </View>
                <View>
                    <Header>Footer</Header>
                    <Footer />
                </View>
            </View>)
    };
};

export default ComponentsApp;