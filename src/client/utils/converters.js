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

export { convertStringToNumber };
