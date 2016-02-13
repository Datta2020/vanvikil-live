import { combineReducers } from 'redux';

import options from './options';
import data from './data';

const rootReducer = combineReducers({
    options,
    data
});

export default rootReducer;
