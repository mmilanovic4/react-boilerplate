import React, { useContext } from 'react';
import { Label } from 'Client/components/Label';
import { NumberInput } from 'Client/components/NumberInput';
import { DataContext, DataContextProvider } from 'Client/data/DataContext';
import { Container } from './components/Container';

const Form = () => {
	const ctx = useContext(DataContext);
	return (
		<>
			<Label label="x =">
				<NumberInput
					value={ctx?.state?.x}
					onChange={(value) => {
						ctx?.dispatch({ target: 'x', value });
					}}
				/>
			</Label>
			<Label label="y =">
				<NumberInput
					value={ctx?.state?.y}
					onChange={(value) => {
						ctx?.dispatch({ target: 'y', value });
					}}
				/>
			</Label>
		</>
	);
};

const Display = () => {
	const ctx = useContext(DataContext);
	return (
		<Label label="z =">
			<NumberInput disabled value={ctx?.state?.x + ctx?.state?.y} />
		</Label>
	);
};

const App = () => {
	return (
		<DataContextProvider>
			<Container>
				<Form />
				<Display />
			</Container>
		</DataContextProvider>
	);
};

export { App };
