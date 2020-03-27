import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Client/pages/Index';

const el = React.createElement(App);
const target = document.getElementById('root');

ReactDOM.render(el, target);
