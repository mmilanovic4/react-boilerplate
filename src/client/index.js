import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const container = document?.getElementById('root');
const component = createElement(App);

const root = createRoot(container);
root?.render(component);
