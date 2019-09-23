import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import { FaYoutube, FaBook, FaCommentDots, FaTwitter, FaWeibo, FaLocationArrow, FaFacebookF } from 'react-icons/fa'
import { MyContext } from '../contexts/SiteContext';


function Footer() {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap >
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <Row className="row-footer">
                        <Col xxl={4} xl={4} lg={4} md={24} sm={24} xs={24}>
                            <img src={logo} alt="" width="100%" />
                        </Col>
                        <Col xxl={{ span: 10, offset: 10 }} xl={{ span: 10, offset: 10 }} lg={8} md={24} sm={24} xs={24}>
                            <div className="social">
                                <ul>
                                    <li><a href="#1"><FaYoutube /></a></li>
                                    <li><a href="#1"><FaBook /></a></li>
                                    <li><a href="#1"><FaCommentDots /></a></li>
                                    <li><a href="#1"><FaTwitter /></a></li>
                                    <li><a href="#1"><FaWeibo /></a></li>
                                    <li><a href="#1"><FaLocationArrow /></a></li>
                                    <li><a href="#1"><FaFacebookF /></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{getLang('The games provided by PLAYFUN are based on blockchain, fair and transparent. When you start playing these games,please note that online gambling and lottery is an entertainment vehicle and that it carries with it a certain degree of financial risk. Players should be aware of this risk, and govern themselves accordingly.')}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    background-color: #0a0a28;
    color:#777;
    .row-footer{
        padding:40px 0;
        display:flex;
        align-items:center;
        flex-flow:row wrap;
        border-bottom:1px solid #1f1f45;
        margin-bottom:40px;
        .social{
            
            ul{
                list-style:none;
                display:flex;
                justify-content:flex-end;
                li{
                    padding:0 25px;
                    a{
                        svg{
                            font-size:28px;
                            color:#777;
                        }
                    }
                }
            }
        }
    }
`;

export default Footer
