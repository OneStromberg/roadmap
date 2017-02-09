import React from 'react';
import {AppHeader, View, Text, Label, Image, Component, AppHeaderLogo, Container} from 'components';

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
					<AppHeaderLogo src='./../../../MultiBit/assets/img/zajno-logo.png' alt='Zajno Logo' />
				</Container>
			</AppHeader>
		)
	}
}

export default MultibitAppHeader;