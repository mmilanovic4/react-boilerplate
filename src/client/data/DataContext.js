import React, { createContext, useReducer } from 'react';

import data from 'Client/data/data.json';

const DataContext = createContext();
const { Provider } = DataContext;

const DataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, payload) => {
		const { target, value } = payload;
		return {
			...state,
			[target]: value
		};
	}, data);
	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { DataContext, DataContextProvider };
