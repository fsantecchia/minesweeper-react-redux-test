import React from 'react';
import { connect } from 'react-redux';
import MinesweeperHeader from '../../components/MinesweeperHeader/MinesweeperHeader';
import MinesweeperBoard from '../../components/MinesweeperBoard/MinesweeperBoard';
require('./Minesweeper.scss');

const Minesweeper = (props) => {
    return (
        <div className="minesweeper">
            <MinesweeperHeader remainingFlags={5}/>
            <MinesweeperBoard />
        </div>
    );

};

function mapStateToProps(state) {
    return {
        settings: state.settingsReducer.settings
    };
}

export default connect(mapStateToProps)(Minesweeper);
