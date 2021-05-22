import { convertStringToNumber } from 'Client/utils/converters';
import React from 'react';

const NumberInput = ({ disabled, value, onChange }) => {
	return (
		<input
			className="number-input"
			disabled={disabled}
			inputMode="numeric"
			type="text"
			value={value}
			onChange={(e) => {
				onChange(convertStringToNumber(e?.target?.value));
			}}
		/>
	);
};

export { NumberInput };
