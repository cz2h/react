import authReducer from './authReducer';
import graphReducer from './graphReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    graphs: graphReducer
});

export default rootReducer;