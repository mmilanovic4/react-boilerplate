import { createElement } from 'react';
import { render } from 'react-dom';

import { App } from './App';

const el = createElement(App);
const target = document.getElementById('root');

render(el, target);
