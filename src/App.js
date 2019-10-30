import React, { useState } from 'react';
import './App.css';
import SectionVideo from './components/SectionVideo'
import SectionGame from './components/SectionGame'
import SectionGame2 from './components/SectionGame2'
// import SectionTrade from './components/SectionTrade'
import SectionGameStore from './components/SectionGameStore'
import Cert from './pages/Referral'
import { Modal, Input, Icon } from 'antd'

function App() {
    const [promo, setPromo] = useState(true)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const submitUser = () => {

    }


    return (
        <>
            <SectionVideo />
            <SectionGame />
            <SectionGame2 />
            <SectionGameStore />
            <Cert />
            {/* <Modal
                title="Promotion"
                visible={promo}
                onOk={submitUser}
                onCancel={() => setPromo(false)}
            >
                <p>Register New Account - Join First Promotion</p>
                <Input placeholder="Your address" prefix={<Icon type="user" />} disabled value={'abc'} style={{ margin: 2 }} />
                <Input placeholder="Your username" prefix={<Icon type="user" />} value={username} style={{ margin: 2 }} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="Your email" prefix={<Icon type="user" />} value={email} style={{ margin: 2 }} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Your phone" prefix={<Icon type="user" />} value={phone} style={{ margin: 2 }} onChange={(e) => setPhone(e.target.value)} />
            </Modal> */}
            {/* <SectionTrade /> */}
        </>
    );
}

export default App;
