import React, { useContext } from 'react'
import styled from 'styled-components'
import imgBack from '../assets/images/backgr-brand.png'
import { MyContext } from '../contexts/SiteContext'
import img4 from '../assets/images/brand-4.png'
import img5 from '../assets/images/brand-5.png'
import img6 from '../assets/images/brand1.png'
import img7 from '../assets/images/brand2.png'
import img8 from '../assets/images/brand3.png'
import { Row, Col } from 'antd'
import line from '../assets/images/news_line.png'

export default function SectionBrand() {
    const { getLang } = useContext(MyContext)
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
                    <div className="head-brand">
                        <h4>{getLang('Investment Institutions')}</h4>
                        <p>{getLang('Has received millions of dollars in investment')}</p>
                    </div>
                    <div className="body-brand">
                        {dataBrand.map((index, i) =>
                            <p key={i}>
                                <a href={index.href}>
                                    <img src={index.img} alt={index.brand} width="250px" />
                                </a>
                            </p>
                        )}
                    </div>
                </Col>
            </Row>
            <div className="back-gradient" ><img src={line} alt="" /></div>
        </Wrap>
    )
}
const dataBrand = [
    {
        id: 0,
        img: img6,
        brand: 'holdeb asset',
        href: "#1"
    },
    {
        id: 1,
        img: img7,
        brand: 'philippine suntown',
        href: '#1'
    },
    {
        id: 2,
        img: img8,
        brand: 'pearl ventures',
        href: "#2"
    },
    {
        id: 3,
        img: img4,
        href: "#2",
        brand: 'golden gate investments'
    },
    {
        id: 4,
        img: img5,
        brand: 'king ventures',
        href: "#2"

    },
]
const Wrap = styled.div`
    background-image:url(${imgBack ? imgBack : ''});
    background-size:100% 100%;
    position: relative;
    overflow:hidden;
    ::before{
        content:'';
        background-color:rgba(14, 14, 48, 1);
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        z-index:-1;
    }
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
    .body-brand{
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        justify-content:center;
        margin-bottom:50px;
        p{
            display:inline-block;
            margin:0 40px 35px;
            a{
                img{
                    /* height:36px; */
                }
            }
        }
        p:nth-child(-n+2){
            padding:0 30px;
        }
    }
    .back-gradient{
        position: relative;
        img{
            position: absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
        }
    }
`;
