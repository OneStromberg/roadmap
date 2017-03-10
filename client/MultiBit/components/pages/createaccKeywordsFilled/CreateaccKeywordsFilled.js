import React from 'react';
import Page from './../../../../common/components/Page';
import Topbar from './../../partials/Topbar';
import InputPassword from './../../partials/InputPassword';
import Button from './../../partials/Button';

const keyWords = ['sludge', 'crypto', 'nothing', 'vanish', 'town', 'town', 'town', 'town', 'town', 'town', 'town', 'town'];

import { Component, View, Title, Text, List, ListItem, Input, Label, Footer } from 'components';

class CreateAccKeywordsFilled extends Component {
    render() {
        return (
            <Page className="create-acc-keywords-filled">
                <Topbar className="create-acc-keywords-filled-topbar">
                    <View className="topbar-round-buttons-container">
                        <Button className="topbar-round-buttons close" />
                        <Button className="topbar-round-buttons minify" />
                        <Button className="topbar-round-buttons expand" />
                    </View>
					<Button back>Back</Button>
                    <Title>Create new wallet</Title>
                    <Button keepkey />
                </Topbar>
                <View>
                    <Title>Enter Keywords</Title>
					<Text>Look at the device for number positions</Text>
                    <View className='keywords-bar'>
                        <List>
						{props.keyWords.map((keyword, i) => {
						return <ListItem>
							<Label>{i + 1}.</Label>
							<Input value={keyword} placeholder={keyword} disabled />
						</ListItem>
						})}
					</List>
                    </View>
                </View>
				<Footer>
					<Button default>Next</Button>    
                	<Button help>?</Button>
				</Footer>
            </Page>
        );
    }
}

export default CreateAccKeywordsFilled;

            