import React from 'react';
import {AppHeader, View, Text, Label, Image, Component, Container} from 'components';

class MultibitAppHeader extends Component {
	render()
	{
		return (
			<AppHeader>
				<Container>
					<View>
						<Text>
							text
						</Text>
						<Label>
							text
						</Label>
					</View>
					<View>
						<Image />
					</View>
				</Container>
			</AppHeader>
		)
	}
}

export default MultibitAppHeader;