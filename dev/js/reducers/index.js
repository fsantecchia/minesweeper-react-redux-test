import {combineReducers} from 'redux';
import SettingsReducer from './settings-reducer';

const allReducers = combineReducers({
    settingsReducer: SettingsReducer
});

export default allReducers
