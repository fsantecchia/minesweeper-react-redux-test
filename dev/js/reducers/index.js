import {combineReducers} from 'redux';
import GameReducer from './game-reducer';
import SettingsReducer from './settings-reducer';

const allReducers = combineReducers({
    gameReducer: GameReducer,
    settingsReducer: SettingsReducer
});

export default allReducers
