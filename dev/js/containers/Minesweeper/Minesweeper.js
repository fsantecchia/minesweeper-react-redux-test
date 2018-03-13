import React from 'react';
import { connect } from 'react-redux';
require('./Minesweeper.scss');

const Minesweeper = (props) => {
    return (
        <div className="minesweeper">
          MINESWEEPER COMPONENT
        </div>
    );

};

function mapStateToProps(state) {
    return {
        settings: state.settingsReducer.settings
    };
}

export default connect(mapStateToProps)(Minesweeper);
