import React from 'react';
import {AppBar, View, Text, Label, Image, Component, Container, Title, Subtitle} from 'components';
import AppBarLogo from './../../../common/components/AppBarLogo';

class MultibitAppBar extends Component {
	render()
	{
		return (
			<AppBar className="styleguide-header">
				<Container className="appbar-container">
					<View className="appbar-view">
						<Title className="appbar-title">
							Multibit
						</Title>
						<Subtitle className="appbar-subtitle">
							UI Styleguide
						</Subtitle>
					</View>
					<AppBarLogo src="./assets/multibit/img/zajno-logo.png" alt="Zajno Logo" />
				</Container>
			</AppBar>
		)
	}
}

export default MultibitAppBar;