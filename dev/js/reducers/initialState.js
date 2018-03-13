const initialState = {
    settingsReducer: {
        settings: {
            columns: 5,
            rows: 5,
            mines: 5,
            totalFlags: 5
        }
    },
    gameReducer: {
        clickedCells: [],
        flaggedCells: [],
        mines: [],
        remainingFlags: 5
    }
};

export default initialState
