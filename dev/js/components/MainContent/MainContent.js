import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
import Minesweeper from '../../containers/Minesweeper/Minesweeper';
require('./MainContent.scss');

const MainContent = () => (
    <div className="main-content">
        <GameSettings />
        <Minesweeper />
    </div>
);

export default MainContent;
