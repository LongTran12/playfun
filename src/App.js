import React from 'react';
import './App.css';
import SectionVideo from './components/SectionVideo'
import SectionGame from './components/SectionGame'
import SectionGame2 from './components/SectionGame2'
// import SectionTrade from './components/SectionTrade'
import SectionGameStore from './components/SectionGameStore'
import Cert from './pages/Referral'

function App() {
    return (
        <>
            <SectionVideo />
            <SectionGame2 />
            <SectionGame />
            <SectionGameStore />
            <Cert />
            {/* <SectionTrade /> */}
        </>
    );
}

export default App;
