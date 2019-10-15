import React from 'react';
import './App.css';
import SectionVideo from './components/SectionVideo'
import SectionGame from './components/SectionGame'
import SectionTrade from './components/SectionTrade'
import SectionGameStore from './components/SectionGameStore'

function App() {
    return (
        <>
            <SectionVideo />
            <SectionGame />
            <SectionGameStore />
            <SectionTrade />
        </>
    );
}

export default App;
