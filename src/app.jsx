import * as React from 'react';
import { Button } from '@/components';

export function App() {
	const [counter, setCounter] = React.useState(0);
	return (
		<>
			<p>Counter: {counter}</p>
			<Button
				onClick={() => {
					setCounter((x) => x + 1);
				}}
			>
				Click me
			</Button>
		</>
	);
}
