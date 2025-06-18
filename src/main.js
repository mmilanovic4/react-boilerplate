import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './app';
import './style.css';

const container = document.getElementById('root');
const component = React.createElement(App);

const root = ReactDOM.createRoot(container);
root.render(component);
