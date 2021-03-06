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
        case 'CELL_FLAGGED':
            newState.remainingFlags = newState.remainingFlags - 1;
            newState.flaggedCells.push(action.payload);
            break;
        case 'CELL_UNFLAGGED':
            newState.remainingFlags = newState.remainingFlags + 1;
            _.remove(newState.flaggedCells, action.payload);
            break;
    }

    return newState;
}
