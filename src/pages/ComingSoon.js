import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import img from '../assets/images/coming-soon.png'

export default function ComingSoon() {
    return (
        <Wrap>
            <Row>
                <Col>
                    <img src={img} alt="" width="100%" />
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    overflow:hidden;
`;
