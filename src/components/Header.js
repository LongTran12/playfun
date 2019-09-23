import React, { useState } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import langUs from '../assets/images/lang-us.png'
import langVn from '../assets/images/lang-vn.png'

export default function Header() {
    const [isOpen, setisOpen] = useState(false)
    return (
        <Wrap>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 18, offset: 3 }}>
                    <Row type='flex' justify='space-between' align='middle'>
                        <Col xxl={{ span: 4, offset: 0 }} >
                            <img src={logo} alt="logo" width="100%" />
                        </Col>

                        <Col xxl={{ span: 8, offset: 12 }} >
                            <div className="tab-right-header d-flex justify-content-end">
                                <div className="language">
                                    <button onClick={() => setisOpen(!isOpen)}>
                                        <img src={langUs} alt="us" width={20} height={20} />
                                        English
                                        </button>
                                    <ul>
                                        <li>
                                            <button>
                                                <img src={langUs} alt="us" width={20} height={20} />
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src={langVn} alt="us" width={20} height={20} />
                                                VietNam
                                            </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="menu">
                        <Row>
                            <Col>
                                <ul>
                                    <li>Home</li>
                                    <li>Invest</li>
                                    <li>Trade</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:50px 0;
    overflow:hidden;
    background:#0a0a27;
    .tab-right-header{
        .language{
            position:relative;
            >button{
                display: inline-block;
                padding: 3px 20px;
                line-height: 32px;
                border-radius: 16px;
                background-color: #1f1f46;
                text-align: center;
                border:0;
                display:flex;
                align-items:center;
                img{
                    margin-right:7px;
                }              
            }
            ul{
                position:absolute;
                top:40px;
                right:0;
                padding:0;
                border-radius:5px;
                visibility:hidden;
                transform:translateY(-20px);
                transition:transform 0.4s ease;
                list-style: none;
                width: 100%;
                text-align: center;
                background: #ccc;
                border-top: 5px solid #0a0a27;
                box-shadow: 0 6px 19px #0a0a27;
                background-color: #1f1f46;
                z-index:99;
                li{
                    padding:7px;
                    button{
                        border:0;
                        background:transparent;
                        display:flex;
                        align-items:center;
                        img{
                            margin-right:7px;
                        }
                    }
                }
            }
            :hover{
                ul{
                    visibility:visible;
                    transform:translateY(0);
                }
            }
        }
    }
    .menu{
        ul{
            display:flex;
            align-items:center;
            list-style:none;
            li{
                padding:5px 15px;
            }
        }
    }
`;

