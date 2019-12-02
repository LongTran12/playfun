import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import ether from '../assets/images/etherlucky.png'
import tron from '../assets/images/tronlucky.png'

export default function SectionGame2() {
    return (
        <Wrap id='dapps'>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} style={{ textAlign: 'center' }}>
                    <a href={'https://erc20buster.com/'}><img src={ether} style={{ width: '80%' }} /></a>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} style={{ textAlign: 'center' }}>
                    <a href={'https://tronlucky.io'}><img src={tron} style={{ maxWidth: '80%' }} /></a>
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    background-color:#1a1a3d;
    padding:100px 0;
    overflow:hidden;
`;