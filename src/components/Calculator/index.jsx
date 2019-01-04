import React from 'react';

import './style.css';

function CalculatorWrapper(props) {
	console.log(props.children);

	return (
		<div className="calculator">
			{props.children}
		</div>
	);
}

export default class Calculator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<CalculatorWrapper>
				<h1>Calculator</h1>
				<label>
					<span>x = </span>
					<input
						type="text"
						name="x"
						value={this.state.x}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<span>y = </span>
					<input
						type="text"
						name="y"
						value={this.state.y}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<span>x + y = </span>
					<input
						type="text"
						disabled={true}
						value={parseInt(this.state.x) + parseInt(this.state.y)}
					/>
				</label>
			</CalculatorWrapper>
		);
	}

}
