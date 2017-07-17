import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './javascripts/components/app';
import registerServiceWorker from './javascripts/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
