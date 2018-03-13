import React from 'react';
import { connect } from 'react-redux';
require('./MinesweeperHeader.scss');

const MinesweeperHeader = (props) => (
    <div className="minesweeper-header">
        Remaining Flags: {props.remainingFlags}
    </div>
);

export default MinesweeperHeader;
