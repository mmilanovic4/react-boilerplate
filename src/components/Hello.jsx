import React from 'react';

class Hello extends React.Component {

	state = {
		name: 'John Doe'
	};

	render() {
		return(
			<p>Hello, {this.state.name}.</p>
		);
	}

}

export default Hello;
