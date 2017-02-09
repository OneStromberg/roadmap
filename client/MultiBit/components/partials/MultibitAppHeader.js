import React from 'react';
import {AppHeader, View, Text, Label, Image, Component, AppHeaderLogo, Container} from 'components';

class MultibitAppHeader extends Component {
	render()
	{
		return (
			<AppHeader className='styleguide-header'>
				<Container>
					<View className='styleguide-header-heading'>
						<Text className='styleguide-header-title'>
							Multibit
						</Text>
						<Label className='styleguide-header-subtitle'>
							UI Styleguide
						</Label>
					</View>
					<AppHeaderLogo src='./assets/multibit/img/zajno-logo.png' alt='Zajno Logo' />
				</Container>
			</AppHeader>
		)
	}
}

export default MultibitAppHeader;