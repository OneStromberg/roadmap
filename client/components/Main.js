import React from 'react';
import View from './View';
import Title from './Title';
import FacebookButton from './FacebookButton';
import Border from './Border';
import Image from './Image';
import InputForm from './InputForm';
import Footer from './Footer';

class Main extends React.Component {
    render() {
        return (
        <View className="main">
            <Title />
            <FacebookButton />                
            <Border className="border">
                <Image src="./assets/img/line.png" />
            </Border> 
            <InputForm />
            <Footer>
                By clicking the button above, you agreed to the Terms of Service Xiew our Privacy Policy
            </Footer>
        </View>
        )
    }
}

export default Main;