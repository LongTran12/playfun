import React from 'react';
import './App.css';
import SectionVideo from './components/SectionVideo'
import SectionGame from './components/SectionGame'
import SectionGame2 from './components/SectionGame2'
import SectionTrade from './components/SectionTrade'
import SectionGameStore from './components/SectionGameStore'

function App() {
    return (
        <>
            <SectionVideo />
            <SectionGame />
            <SectionGame2 />
            <SectionGameStore />
            {/* <SectionTrade /> */}
        </>
    );
}

export default App;
