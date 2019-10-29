import React from 'react';

import './style.css';

/**
 * Convert string from text input to number
 * @param {string} number
 * @returns {number}
 */
function convertStringToNumber(input) {
	const output = Number.parseInt(input.toString().replace(/0-9/g, '').replace(/^0+/g, ''), 10);
	return Number.isNaN(output) ? 0 : output;
}

function CalculatorWrapper(props) {
	const { children } = props;

	return (
		<div className="calculator">
			{children}
		</div>
	);
}

export default class Calculator extends React.Component {

	state = {
		x: 0,
		y: 0,
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: convertStringToNumber(value),
		});
	};

	render() {
		const { x, y } = this.state;
		const z = (x + y).toLocaleString();

		return (
			<CalculatorWrapper>
				<h1>Calculator</h1>
				<label>
					<span>x = </span>
					<input
						type="text"
						name="x"
						value={x}
						inputMode="number"
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<span>y = </span>
					<input
						type="text"
						name="y"
						value={y}
						inputMode="number"
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<span>x + y = </span>
					<input
						type="text"
						disabled={true}
						value={z}
					/>
				</label>
			</CalculatorWrapper>
		);
	}

}
