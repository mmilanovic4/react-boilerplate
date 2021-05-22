import React from 'react';

const Label = ({ children, label }) => {
	return (
		<label className="label">
			<span>{label}</span>
			{children}
		</label>
	);
};

export { Label };
