import _ from 'lodash';
import initialState from './initialState';

export default function (state = initialState.settingsReducer, action) {
    let newState = _.clone(state);
    switch (action.type) {
        case 'RESTART_GAME':
            newState.settings = action.payload;
            newState.settings.totalFlags = newState.settings.mines;
            break;
    }

    return newState;
}
