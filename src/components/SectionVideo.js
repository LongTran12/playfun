import React, { useContext } from 'react'
import styled from 'styled-components';
import { MyContext } from '../contexts/SiteContext';
import { Row, Col } from 'antd'
import { FaPlay } from 'react-icons/fa'
import imgVideo from '../assets/images/video-img.png'

export default function SectionVideo() {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }}>
                    <div className="wrap-video text-center">
                        <h5 style={{ color: "#fff", marginBottom: 15 }}>{getLang('PLAYFUN aims to create global ecological chain of operation system and build an ecosphere with multi million users.')}</h5>
                        <p>{getLang('The PLAYFUN platform is headquartered in Singapore and has offices in the United States, South Korea, Japan, and the Philippines. The founding members of the platform come from the technical departments of well-known international enterprises such as Qualcomm, Google, IBM, etc. It is an international founding team with strong strength and experience in technology, project experience, commercial and financial investment fields, etc, which wins the favor of international capital markets.')}</p>
                        <div className="video-box">
                            <img src={imgVideo} alt="video background" width="100%" />
                            <button><FaPlay /></button>
                            <div className="wrap-close" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    background:#1a1a3d;
    padding-top:60px;
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
                background:rgba(0,0,0,0.2); 
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
`;
