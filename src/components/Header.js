import React, { useState, useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import langUs from '../assets/images/lang-us.png'
import langVn from '../assets/images/lang-vn.png'
import { MyContext } from '../contexts/SiteContext'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/images/qrcode.png'
import img1_color from '../assets/images/qrcode_color.png'
import img2 from '../assets/images/send.png'
import img2_color from '../assets/images/send_color.png'
import img_qrcode from '../assets/images/image_qrcode.jpg'
import backLine from '../assets/images/nav-line.png'
import { FaCaretDown, FaAlignLeft } from 'react-icons/fa'

export default function Header() {
    const [isOpen, setisOpen] = useState(false);
    const { lang, setlang, getLang } = useContext(MyContext);
    const [isMobile, setisMobile] = useState(false);
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
                            <NavLink to="/"><img src={logo} alt="logo" width="100%" /></NavLink>
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
                                <div className={`menu-content ${isMobile === true ? 'is-mobile' : 'is-desktop'} `}>
                                    <button className="button-mobile" onClick={() => setisMobile(!isMobile)}><FaAlignLeft /></button>
                                    <div className="wrap-mobile-close" onClick={() => setisMobile(false)} />
                                    <ul className="menu-content__menu">
                                        <li><NavLink activeClassName="active" to="/">{getLang('Home')}</NavLink></li>
                                        <li className="li-child">
                                            <button>{getLang('Invest')} <FaCaretDown /></button>
                                            <ul>
                                                <li><a href="#1">{getLang('Trust Contract')}</a></li>
                                                <li><a href="#1">{getLang('Investment')}</a></li>
                                                <li><a href="#1">{getLang('Loan Contract')} </a><span>{getLang('Coming Soon')}</span></li>
                                            </ul>
                                        </li>
                                        <li className="li-child">
                                            <button>{getLang('DAPPS')} <FaCaretDown /></button>
                                            <ul>
                                                <li><a href="#1">{getLang('Lottery')}</a></li>
                                                <li><a href="#1">{getLang('Dice')}</a><span>{getLang('Coming Soon')}</span></li>
                                                <li><a href="#1">{getLang('Football Betting')} </a><span>{getLang('Coming Soon')}</span></li>
                                            </ul>
                                        </li>
                                        <li className="li-child">
                                            <button>{getLang('Trade')} <FaCaretDown /></button>
                                            <ul>
                                                <li><a href="#1">{getLang('Grid Trading')}</a></li>
                                                <li><a href="#1">{getLang('Coin Exchange')}</a><span>{getLang('Coming Soon')}</span></li>
                                                <li><a href="#1">{getLang('OTC Trade')} </a><span>{getLang('Coming Soon')}</span></li>
                                            </ul>
                                        </li>
                                        <li><NavLink activeClassName="active" to="/er">{getLang('Referral')}</NavLink></li>
                                        <li className="li-child">
                                            <button>{getLang('About')} <FaCaretDown /></button>
                                            <ul>
                                                <li><a href="#1">{getLang('Help')}</a></li>
                                                <li><a href="#1">{getLang('Download APP')}</a></li>
                                                <li><a href="#1">{getLang('Rules')}</a></li>
                                                <li><a href="#1">{getLang('About Us')}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="menu-content__share">
                                        <a href="#1" >
                                            <img src={img1} alt="" className="image" width="42px" height="42px" />
                                            <img src={img1_color} alt="" className="image color" width="42px" height="42px" />
                                            <img src={img_qrcode} alt="" className="imageqr" width="100%" />
                                        </a>
                                        <a href="#1" >
                                            <img src={img2} alt="" className="image" width="42px" height="42px" />
                                            <img src={img2_color} alt="" className="image color" width="42px" height="42px" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:15px 0 0;
    background:#0a0a27;
    .tab-right-header{
        .language{
            position:relative;
            z-index:11;
            >button{
                display: inline-block;
                padding: 0 20px;
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
                top:30px;
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
                z-index:9;
                
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
        .menu-content{
            display:flex;
            flex-flow:row wrap;
            align-items:flex-end;
            padding-top:5px;
            margin-top:10px;
            .button-mobile{
                display:none;
            }
            :before{
                content:'';
                background-image:url(${backLine});
                top:0;
                left:0;
                background-size:100% 100%;
                position: absolute;
                height:1px;
                width:100%;
            }
            >ul{
                display:flex;
                align-items:center;
                list-style:none;
                padding-left:0;
                margin-bottom:6px;
                flex-flow:row wrap;
                >li{
                    padding:5px 40px 5px 0;
                    >a{
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
                    &.li-child{
                        position: relative;
                        button{
                            font-size:16px;
                            position: relative;
                            color:#777;
                            border:0;
                            background-color:transparent;
                            padding:0;
                            svg{
                                fill:#777;
                            }
                        }
                        ul{      
                            position: absolute;
                            top:110%;
                            left:50%;
                            transform:translateX(-50%);
                            width:100%;
                            list-style:none;
                            padding-left:0;
                            border-radius:7px;
                            background-color:#1f1f46;
                            box-shadow:0px 6px 19px #0a0a27;
                            z-index:2;
                            text-align:center;
                            min-width:120px;
                            visibility:hidden;
                            li{       
                                position: relative;
                                a{
                                    font-size:14px;
                                    position: relative;
                                    padding:5px 7px;
                                    display:block;
                                    color: #a7afdc;
                                    width:100%;
                                    :hover{
                                        text-decoration:none;
                                        color: #fff;
                                        background: #2c2c4c; 
                                    }
                                }
                                >span{
                                    font-size:0;
                                    display:none;
                                }
                                :hover{
                                    a + span{
                                        display:block;
                                        width:100%;
                                        font-size:14px;
                                        display:block;
                                        position: absolute;
                                        top:0;
                                        z-index:2;
                                        padding:5px 7px;
                                        left:0;
                                        background: #444;
                                        color: #f2ce80;
                                        font-weight:normal;
                                    }
                                    
                                }  
                                
                            }
                        }
                        :hover{
                            transition:all 0.4s ease;
                            button{
                                color:#fff;
                                svg{
                                    transform:rotate(180deg);
                                    transition:transform 0.4s ease;
                                }
                            }
                            ul{
                                visibility:visible;
                                top:100%;
                                transition:all 0.5s ease;
                                                       
                            }
                        }
                    }
                }

            }
            &__share{
                margin-left:auto;
                padding-bottom:5px;
                a{
                    position: relative;
                    .image{
                        position: relative;
                        &.color{
                            position: absolute;
                            left:0;
                            top:50%;
                            transform:translateY(-50%);
                            visibility: hidden;
                        }  
                    }
                    .imageqr{
                        position: absolute;
                        top: 22px;
                        left: 50%;
                        visibility: hidden;
                        transform: translateX(-50%);
                        width: 160px;
                        z-index:9990;
                    }
                    :hover{
                        .image{
                            &.color{
                                visibility:visible;
                                transition:all 0.4s ease;
                            }
                        }
                        .imageqr{
                            visibility:visible;
                            top:30px;
                            transition:all 0.3s ease;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        .menu{
            .menu-content{    
                padding-top:15px;
                >ul{
                    background: #111;
                    position: fixed;
                    height: 100vh;
                    width:100%;
                    width:70vw;
                    left: 0;
                    top: 0;
                    z-index: 9999;
                    flex-flow:column;
                    padding-top:50px;
                    >li{
                        margin-bottom:15px;
                    }
                }
                &.is-desktop{
                    button{
                        display:block;
                        margin-bottom: 15px;
                        font-size: 25px;
                        background: transparent;
                        border: none;
                        svg{
                            fill:#fff;
                        }
                    }
                    >ul{
                        visibility: hidden;
                    }
                }
                &.is-mobile{
                    .wrap-mobile-close{
                    background: rgba(0,0,0,.4);
                    position: fixed;
                    height: 100vh;
                    width: 100vh;
                    left: 0;
                    top: 0;
                    z-index: 9998;
                }
                }
            }
        }
    }
`;

