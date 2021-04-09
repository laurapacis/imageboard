import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddelware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddelware(thunk)))

ReactDOM.render(<App />, document.getElementById('root'));