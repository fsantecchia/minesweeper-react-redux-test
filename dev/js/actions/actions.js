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
