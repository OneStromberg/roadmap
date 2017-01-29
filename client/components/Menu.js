import React from 'react';
import View from './View';
import List from './List';
import ListItem from './ListItem';
import Bounder from './Bounder';
import Flag from './Flag';
import Link from './Link';

class Menu extends React.Component {
    render(){
        return (
            <View className="menu">
                <List className="menu_left">
                    <ListItem><Link href="#">Meu YouBike</Link></ListItem>
                    <ListItem><Link href="#">Vender</Link></ListItem>
                    <ListItem><Link href="#">Forum</Link></ListItem>
                    <ListItem><Link href="#">Contato</Link></ListItem>
                    <ListItem><Link href="#">Ajuda</Link></ListItem>
                </List>
                <Bounder />
                <Flag />
                <List className="menu_right">
                    <ListItem><Link href="#">Minhas Ofertas</Link></ListItem>
                    <ListItem><Link href="#">Ola! Entrar ou Cadastre-se</Link></ListItem>
                </List>
            </View>
        )
    }
}

export default Menu;