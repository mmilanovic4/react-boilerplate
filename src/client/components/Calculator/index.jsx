import React, { useState } from 'react';

import { x as initialX, y as initialY } from 'Client/config.json';

/**
 * Convert string from text input to number
 * @param {string} number
 * @returns {number}
 */
function convertStringToNumber(input) {
	const output = Number.parseInt(
		input.toString().replace(/0-9/g, '').replace(/^0+/g, ''),
		10
	);
	return Number.isNaN(output) ? 0 : output;
}

export default () => {
	const [x, setX] = useState(initialX);
	const [y, setY] = useState(initialY);

	const handleChange = (event, handler) => {
		const { value } = event.target;
		handler(convertStringToNumber(value));
	};

	const z = (x + y).toLocaleString();

	return (
		<div className="calculator">
			<h1>Calculator</h1>
			<label>
				<span>x =</span>
				<input
					type="text"
					inputMode="numeric"
					value={x}
					onChange={(event) => handleChange(event, setX)}
				/>
			</label>
			<label>
				<span>y =</span>
				<input
					type="text"
					inputMode="numeric"
					value={y}
					onChange={(event) => handleChange(event, setY)}
				/>
			</label>
			<label>
				<span>z =</span>
				<input type="text" disabled value={z} />
			</label>
		</div>
	);
};
