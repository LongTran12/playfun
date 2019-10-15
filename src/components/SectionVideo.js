import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { MyContext } from '../contexts/SiteContext';
import { Row, Col } from 'antd'
import { FaPlay } from 'react-icons/fa'
import imgVideo from '../assets/images/game1.jpg'
import line from '../assets/images/news_line.png'
import Modal from '../components/Modal'

export default function SectionVideo() {
    const { getLang } = useContext(MyContext)
    const [isOpen, setisOpen] = useState(false)
    return (
        <Wrap>
            <Row>
                <Col
                    xxl={{ span: 16, offset: 4 }}
                    xl={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                >
                    <div className="wrap-video text-center">
                        <h5 style={{ color: "#fff", marginBottom: 15 }}>{getLang('homeTitle')}</h5>
                        <p>{getLang('videoDescription')}</p>
                        <div className="video-box">
                            <img src={imgVideo} alt="video background" width="100%" />
                            <button onClick={() => setisOpen(!isOpen)}><FaPlay /></button>
                            <div className="wrap-close" />
                        </div>
                        {isOpen && <Modal onClose={() => setisOpen(false)}>
                            <div className="video">
                                <iframe width="1080px" height="607px" src="https://www.youtube.com/embed/lFaJWArxdw0" frameBorder="0" title="video"></iframe>
                            </div>
                        </Modal>
                        }
                    </div>
                </Col>
            </Row>
            <div className="back-gradient" ><img src={line} alt="" /></div>
        </Wrap>
    )
}
const Wrap = styled.div`
    background:#1a1a3d;
    padding-top:60px;
    overflow:hidden;
    p{
        font-size:12px;
        color:#a7afdc;
    }
    .video-box{       
        position:relative;
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        box-shadow: 0 6px 19px #0a0a27;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        margin-top:40px;
        .wrap-close{
            background: rgba(0,0,0,.6);
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index:1;
        }
        img{
            border-radius:15px;
        }
        button{
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            background:#fff;
            border:0;
            border-radius:999px;
            padding:25px;
            z-index:2;
            :before{
                content:'';
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                background:#e6f7ff45;
                width:calc(100% + 35px);
                height:calc(100% + 35px);  
                position:absolute;
                border-radius:999px;
            }
            svg{
                font-size:40px;
                fill:#4aaeff;
                padding-left:8px;
            }
        }   
    }
    .back-dots{
        content:'';
        height:1px;
        width:100%;
        background-image:linear-gradient(to right, #48affe,#c221e6);
        position:absolute;
        left: 0;
        top:0;
            
    }
    .back-gradient{
        position: relative;
        padding-bottom:1px;
        img{
            position: absolute;
            bottom:0px;
            left:50%;
            transform:translateX(-50%);
        }
    }

`;
