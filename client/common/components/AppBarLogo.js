import React from 'react';
import {Component, View, Image} from 'components';

class AppBarLogo extends Component {
	render()
	{
		return (
			<View className={this.getClassName(this.props) + 'img-wrap'}>
				<Image src={this.props.src} alt={this.props.alt} />
			</View>	
		)
	}
}

export default AppBarLogo;