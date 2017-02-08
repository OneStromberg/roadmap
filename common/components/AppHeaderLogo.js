import React from 'react';
import Component from './Component';
import View from './View';
import Image from './Image';

class AppHeaderLogo extends Component {
	render()
	{
		return (
			<View className={this.getClassName(this.props) + 'img-wrap'}>
				<Image src={this.props.src} alt={this.props.alt} />
			</View>	
		)
	}
}

export default AppHeaderLogo;