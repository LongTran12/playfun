import React, { useState, useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import langUs from '../assets/images/lang-us.png'
import langVn from '../assets/images/lang-vn.png'
import { MyContext } from '../contexts/SiteContext'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [isOpen, setisOpen] = useState(false);
    const { lang, setlang, getLang } = useContext(MyContext);
    return (
        <Wrap>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }}
                    xl={{ span: 20, offset: 2 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                >
                    <Row type='flex' justify='space-between' align='middle'>
                        <Col
                            xxl={{ span: 4, offset: 0 }}
                            xl={{ span: 4, offset: 0 }}
                            lg={{ span: 4, offset: 0 }}
                            md={{ span: 4, offset: 0 }}
                            sm={{ span: 4, offset: 0 }}
                            xs={{ span: 6, offset: 0 }}
                        >
                            <img src={logo} alt="logo" width="100%" />
                        </Col>

                        <Col
                            xxl={{ span: 8, offset: 12 }}
                            xl={{ span: 8, offset: 12 }}
                            lg={{ span: 8, offset: 12 }}
                            md={{ span: 8, offset: 12 }}
                            sm={{ span: 8, offset: 12 }}
                            xs={{ span: 8, offset: 10 }}
                        >
                            <div className="tab-right-header d-flex justify-content-end">
                                <div className="language">
                                    <button onClick={() => setisOpen(!isOpen)}>
                                        <img src={lang === "vi" ? langVn : langUs} alt="us" width={20} height={20} />
                                        {lang === 'vi' ? 'Vietnamese' : 'English'}
                                    </button>
                                    <ul>
                                        <li>
                                            <button onClick={() => setlang('en')}>
                                                <img src={langUs} alt="us" width={20} height={20} />
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => setlang('vi')}>
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
                                    <li><NavLink activeClassName="active" to="/">{getLang('Home')}</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/pa">Invest</NavLink></li>
                                    <li><a href="#3">Trade</a></li>
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
    padding:50px 0 0;
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
                top:35px;
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
                z-index:999;
                
                li{
                    padding:7px;
                    :hover{
                        opacity:0.5;
                    }
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
            margin-top:40px;
            padding-left:0;
            margin-bottom:6px;
            li{
                padding:5px 40px 5px 0;
                a{
                    color:#fff;
                    font-size:16px;
                    position: relative;
                    padding-bottom:10px;
                    color:#777;
                    :before{
                        content:'';
                        width: 100%;
                        height:2px;
                        background-color:#fff;
                        top:100%;
                        left:0;
                        right:0;
                        position: absolute;
                        transform-origin:bottom right;
                        transform:scale(0);
                        transition:transform 0.5s ease;
                    }
                    :hover{
                        text-decoration:none;
                        color:#fff;
                        :before{
                            transform:scale(1);
                            transform-origin:bottom left;
                        }
                    }
                   
                    &.active{
                        color:#fff;
                        :before{
                            transform-origin:bottom left;
                            transform:scale(1);
                        }
                    }
                }
            }
        }
    }
`;

