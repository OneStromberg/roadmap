import React from 'react';
import {AppBar, View, Text, Label, Image, Component, Container} from 'components';
import AppBarLogo from './../../../common/components/AppBarLogo';

class MultibitAppBar extends Component {
	render()
	{
		return (
			<AppBar className="styleguide-header">
				<Container>
					<View className="styleguide-header-heading">
						<Text className="styleguide-header-title">
							Multibit
						</Text>
						<Label className="styleguide-header-subtitle">
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