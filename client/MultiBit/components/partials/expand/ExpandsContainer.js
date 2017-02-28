import React from 'react';
import {Component, Container, View, Header, Text, Title, Card, Label, Image, List, ListItem, Button, Link} from 'components';
import Expand from './Expand';

class ExpandsContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>06</Text>
                    <Text> Expands</Text>
                </Header>
                <Card className="expands-container">
					<List className="expands">
						<Expand title="How is it different from another App?" href="https://dribbble.com/shots/3192720-multi-profile-bitcoin-macos" text="The Ministry of Truth contained, it was said, three thousand rooms above ground level, and corresponding ramifications below. Scattered about London there were just three other buildings of similar appearance and size. So completely did they dwarf the surrounding architecture that from the roof of Victory Mansions you could see all four of them simultaneously." />
						<Expand title="To protect the data that is not covered" href="https://dribbble.com/shots/3192720-multi-profile-bitcoin-macos" text="The Ministry of Truth contained, it was said, three thousand rooms above ground level, and corresponding ramifications below. Scattered about London there were just three other buildings of similar appearance and size. So completely did they dwarf the surrounding architecture that from the roof of Victory Mansions you could see all four of them simultaneously." />
						<Expand title="To protect the data that is not covered" href="https://dribbble.com/shots/3192720-multi-profile-bitcoin-macos" text="The Ministry of Truth contained, it was said, three thousand rooms above ground level, and corresponding ramifications below. Scattered about London there were just three other buildings of similar appearance and size. So completely did they dwarf the surrounding architecture that from the roof of Victory Mansions you could see all four of them simultaneously." />
					</List>	
                </Card>
            </Container>
        )
    }
}

export default ExpandsContainer;