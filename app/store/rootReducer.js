import { combineReducers } from 'redux';
import stockTicker from './ticker/reducer';

const rootReducer = combineReducers({ stockTicker });

export default rootReducer;
