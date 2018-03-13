import React from 'react';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
require('../../scss/style.scss');

const App = () => (
    <div>
        <Header />
        <MainContent />
    </div>
);

export default App;
