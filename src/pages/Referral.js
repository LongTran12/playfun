import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import img from '../assets/images/img.jpg'
import { MyContext } from '../contexts/SiteContext'
export default function Referral() {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap>
            <Row type="flex" justify="center">
                <Col xxl={{ span: 16, offset: 2 }}
                    xl={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <div className="head-brand">
                        <h4>CERTIFICATE</h4>
                        <p>CERTIFICATE OF INCORPORATION</p>
                    </div>
                    <img src={img} alt="" width="100%" style={{ alignContent: 'center' }} />
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    background-color:transparent;
    padding:100px 0;
    overflow:hidden;
    text-align: center;
    .head-brand{
        h4{
            font-size: 24px;
            text-align: center;
            margin: 60px auto 4px;
            color: #737594;
        }
        p{
            margin: 0 0 50px 0;
            text-align: center;
            font-size: 14px;
            color: #737594;
        }
    }
    img{
        max-width:1024px;
        margin:0 auto;
    }
`;