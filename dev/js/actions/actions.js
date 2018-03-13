export const RESTART_GAME = (settings) => {
    return {
        type: 'RESTART_GAME',
        payload: settings
    }
};

export const CELL_CLICKED = (cells) => {
    return {
        type: 'CELL_CLICKED',
        payload: cells
    }
};

export const CELL_FLAGGED = (cell) => {
    return {
        type: 'CELL_FLAGGED',
        payload: cell
    }
};

export const CELL_UNFLAGGED = (cell) => {
    return {
        type: 'CELL_UNFLAGGED',
        payload: cell
    }
};
