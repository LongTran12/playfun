import React from 'react';
import './App.css';
import SectionVideo from './components/SectionVideo'
import SectionInvest from './components/SectionInvest'
import SectionGame from './components/SectionGame'
import SectionTrade from './components/SectionTrade'

function App() {
    return (
        <>
            <SectionVideo />
            <SectionInvest />
            <SectionGame />
            <SectionTrade />
        </>
    );
}

export default App;
