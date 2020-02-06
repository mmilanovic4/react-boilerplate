import React, { useState } from 'react';

import { x as initialX, y as initialY } from 'Client/Config.json';
import './style.css';

/**
 * Convert string from text input to number
 * @param {string} number
 * @returns {number}
 */
function convertStringToNumber(input) {
	const output = Number.parseInt(
		input
			.toString()
			.replace(/0-9/g, '')
			.replace(/^0+/g, ''),
		10
	);
	return Number.isNaN(output) ? 0 : output;
}

const CalculatorWrapper = props => {
	const { children } = props;

	return <div className="calculator">{children}</div>;
};

export default props => {
	const [x, setX] = useState(initialX);
	const [y, setY] = useState(initialY);

	const handleChange = (e, handler) => {
		const { value } = event.target;
		handler(convertStringToNumber(value));
	};

	const z = (x + y).toLocaleString();

	return (
		<CalculatorWrapper>
			<h1>Calculator</h1>
			<label>
				<span>x =</span>
				<input
					type="text"
					inputMode="numeric"
					value={x}
					onChange={e => handleChange(e, setX)}
				/>
			</label>
			<label>
				<span>y =</span>
				<input
					type="text"
					inputMode="numeric"
					value={y}
					onChange={e => handleChange(e, setY)}
				/>
			</label>
			<label>
				<span>z =</span>
				<input type="text" disabled value={z} />
			</label>
		</CalculatorWrapper>
	);
};
