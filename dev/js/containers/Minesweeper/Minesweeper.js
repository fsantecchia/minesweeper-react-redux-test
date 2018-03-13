import React from 'react';
import { connect } from 'react-redux';
import MinesweeperHeader from '../../components/MinesweeperHeader/MinesweeperHeader';
import MinesweeperBoard from '../../components/MinesweeperBoard/MinesweeperBoard';
require('./Minesweeper.scss');

const Minesweeper = (props) => {
    return (
        <div className="minesweeper">
            <MinesweeperHeader remainingFlags={props.game.remainingFlags}/>
            <MinesweeperBoard settings={props.settings} game={props.game}/>
        </div>
    );

};

function mapStateToProps(state) {
    return {
        game: state.gameReducer,
        settings: state.settingsReducer.settings
    };
}

export default connect(mapStateToProps)(Minesweeper);
