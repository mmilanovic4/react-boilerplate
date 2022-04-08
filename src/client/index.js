import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const container = document?.getElementById('root');
const component = <App />;

const root = createRoot(container);
root?.render(component);
