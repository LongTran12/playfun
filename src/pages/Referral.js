import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import img from '../assets/images/referral.png'

export default function Referral() {
    return (
        <Wrap>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }}
                    xl={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                >
                    <img src={img} alt="" width="100%" />
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:100px 0;
    overflow:hidden;
`;