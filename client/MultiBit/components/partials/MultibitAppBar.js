import React from 'react';
import {AppBar, View, Text, Label, Image, Component, Container} from 'components';
import AppBarLogo from './../../../common/components/AppBarLogo';

class MultibitAppBar extends Component {
	render()
	{
		return (
			<AppBar>
				<Container className="appbar-container">
					<View className="appbar-view">
						<Text className="appbar-title">
							Multibit
						</Text>
						<Label className="appbar-subtitle">
							UI Styleguide
						</Label>
					</View>
					<AppBarLogo src="./assets/multibit/img/zajno-logo.png" alt="Zajno Logo" />
				</Container>
			</AppBar>
		)
	}
}

export default MultibitAppBar;