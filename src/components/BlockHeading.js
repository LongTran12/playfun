import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/heading-img.png'
import img2 from '../assets/images/heading-tittle2.png'

export default function BlockHeading({ title, bold }) {
    return (
        <Wrap bold={bold}>
            {title}
        </Wrap>
    )
}
const Wrap = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:30px;
    position: relative;
    background-image:url(${props => props.bold ? img2 : img});
    width: 314px;
    height: 59px;
    font-size: 20px;
    line-height: 59px;
    font-weight: 600;
    color: #fff;
    margin: 0 auto;
    background-size: 100% 100%;
    text-align: center;
    margin-bottom: 40px;
    z-index: 2213;
    img{
        position:absolute;
        top:0;
    }
    h4{
        font-size:20px;
        margin-bottom:0;
        z-index:2;
        color:#fff;
    }
`;
