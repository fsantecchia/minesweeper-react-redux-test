import _ from 'lodash';
import initialState from './initialState';

export default function (state = initialState.gameReducer, action) {
    let newState = _.clone(state);
    switch (action.type) {
        case 'RESTART_GAME':
            newState.remainingFlags = action.payload.mines;
            newState.mines = action.payload.minesPositions;
            newState.clickedCells = [];
            newState.flaggedCells = [];
            break;
        case 'CELL_CLICKED':
            newState.clickedCells = action.payload;
            break;
    }

    return newState;
}
