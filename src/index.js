import React from 'react';
import ReactDOM from 'react-dom';
import './app/components/css/index.css';
import App from './app/App';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


// Create a redux store.
const rootStore = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={rootStore}><App /></Provider>, document.getElementById('root'));