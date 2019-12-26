import React from 'react';
import ReactDOM from 'react-dom';
import './app/components/css/index.css';
import App from './app/App';
import { createStore } from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

// Create a redux store.
const rootStore = createStore(rootReducer);

ReactDOM.render(<Provider store={rootStore}><App /></Provider>, document.getElementById('root'));