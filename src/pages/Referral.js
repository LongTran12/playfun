import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import img from '../assets/images/img.jpg'

export default function Referral() {
    return (
        <Wrap>
            <Row type="flex" justify="center">
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
    img{
        max-width:1024px;
        margin:0 auto;
    }
`;