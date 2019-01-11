import React from 'react';

import './style.css';

/**
 * @param {object} props
 * @returns {object}
 */
function CalculatorWrapper(props) {
	return (
		<div className="calculator">
			{props.children}
		</div>
	);
}

class Calculator extends React.Component {

	/**
	 * @type {object}
	 */
	state = {
		x: 0,
		y: 0
	};

	/**
	 * @param {object} event
	 * @returns {undefined}
	 */
	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	/**
	 * @returns {object}
	 */
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

export default Calculator;
