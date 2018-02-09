import {combineReducers} from 'redux';
import SaveName from './reducers/save';

const allReducer = combineReducers({
    name: SaveName
});

export default allReducer;
