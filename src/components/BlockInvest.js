import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/images/Hot.png'
import img2 from '../assets/images/coming.png'

export default function BlockInvest({ href, image, title, hot, coming }) {
    return (
        <Wrap>
            <a href={href ? href : '#2'}>
                <div className="hot-image">
                    <img src={image} alt={title} width="100%" />
                    {hot && <div className="hot"><img src={img1} alt="" /></div>}
                    {coming && <div className="hot"><img src={img2} alt="" /></div>}
                </div>
                <h5>{title}</h5>
            </a>
        </Wrap>
    )
}
const Wrap = styled.div`
    background-color:transparent;
    position: relative;
    padding-bottom:60px;
    .hot-image{
        border-radius:10px;
        overflow:hidden;
        .hot{
            position: absolute;
            top:0;
            left: 0;
        }
    }
    h5{
        color:#fff;
        margin:15px 0;
        font-size: 18px;
        font-weight:normal;
    }
    :hover{
        transform:translateY(-10px);
        transition:transform 0.5s ease;
        text-decoration:none;
    }
`;
