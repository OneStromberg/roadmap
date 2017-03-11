import React from 'react';
import Page from './../../../../common/components/Page';
import Topbar from './../../partials/Topbar';
import InputPassword from './../../partials/InputPassword';
import Button from './../../partials/Button';
import AppWindowControls from './../../partials/AppWindowControls';

const keyWords = ['sludge', 'crypto', 'nothing', 'vanish', 'town', 'town', 'town', 'town', 'town', 'town', 'town', 'town'];

import { Component, View, Title, Text, List, ListItem, Input, Label, Footer } from 'components';

class CreateAccKeywordsFilled extends Component {
    render() {
        return (
            <Page className="create-acc-keywords-filled">
                <AppWindowControls>
                    <Button back>Back</Button>
                    <Title>Create new wallet</Title>
                    <Button keepkey />
                </AppWindowControls>
                <View>
                    <Title>Enter Keywords</Title>
					<Text>Look at the device for number positions</Text>
                    <View className='keywords-bar'>
                        {keyWords.map((keyword, i) => {
                            return <View key={i}>
                                        <Label>{i + 1}.</Label>
                                        <Input value={keyword} placeholder={keyword} disabled />
                                    </View>
                        })}
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

            