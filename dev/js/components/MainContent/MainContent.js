import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
require('./MainContent.scss');

const MainContent = () => (
    <div className="main-content">
        <GameSettings />
        Content
    </div>
);

export default MainContent;
