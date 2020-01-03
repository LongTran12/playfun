import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import { FaYoutube, FaBook, FaFacebookF } from 'react-icons/fa'
import { MyContext } from '../contexts/SiteContext';


function Footer() {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap >
            <Row>
                <Col
                    xxl={{ span: 16, offset: 4 }}
                    xl={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                >
                    <Row className="row-footer" type="flex" justify="center" align="middle">
                        <Col xxl={2} xl={2} lg={2} md={4} sm={4} xs={6}>
                            <img src={logo} alt="" width="80px" />
                        </Col>
                        <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={18}>
                            <div>
                                {getLang('OPEN TOKEN FUND')}
                            </div>
                            <div>
                                {getLang('')}
                            </div>
                        </Col>
                        <Col xxl={{ span: 11, }}
                            xl={{ span: 11, }}
                            lg={{ span: 11, }}
                            md={9} sm={9} xs={24}>
                            <div className="social">
                                <ul>
                                    <li><a href="https://www.youtube.com/channel/UC__i7MUVUePTtBOCJu_zVVw"><FaYoutube /></a></li>
                                    <li><a href="https://t.me/clbgamedapplucky"><FaBook /></a></li>
                                    {/* <li><a href="#1"><FaCommentDots /></a></li>
                                    <li><a href="#1"><FaTwitter /></a></li>
                                    <li><a href="#1"><FaWeibo /></a></li>
                                    <li><a href="#1"><FaLocationArrow /></a></li> */}
                                    <li><a href='https://www.facebook.com/OTFund-102027677883008/'><FaFacebookF /></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{getLang('textFooter')}</p>
                            <p>{getLang('textCopyright')}</p>
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
    overflow:hidden;
    padding-bottom:15px;
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
                padding-left:0;
                margin:0 auto;
                li{
                    padding:0 25px;
                    margin-bottom:5px;
                    a{
                        svg{
                            font-size:28px;
                            color:#777;
                        }
                        :hover{
                            svg{
                                color:#fff;
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        
        .row-footer{
            margin-bottom:20px;
            .social{
                margin-top:40px;
               
            }
        }
    }
`;

export default Footer
