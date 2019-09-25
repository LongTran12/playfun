import React from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

export default function Modal({ onClose, children }) {
    return (
        <Wrap>

            <div className="close-modal">
                <button onClick={onClose}><IoIosClose /></button>
            </div>
            <div className="wrap-close" onClick={onClose} />
            <div className="body-modal">
                {children}
            </div>
        </Wrap>
    )
}
const Wrap = styled.div`
  position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:1103;
    /* animation: width 0.2s ease; */
    .close-modal{
        
        button{
            font-size: 50px;
            background: transparent;
            border: 0;
            z-index: 1106;
            right: 0;
            top: -51px;
            color: #fff;
            position: absolute;
            cursor: pointer;
            transform: translateY(0);
        }
    }
    .wrap-close{
        background: rgba(0,0,0,.34);
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index:1105;
    }
    .body-modal{
        z-index:1200;
        transform:translateX(0);
        position: relative;
    }
    @media (max-width:992px){
        .body-modal{
            iframe{
                width: 93vw;
                height: 50vh;
            }
        }
    }
    @keyframes width {
        from{
            left:0;
        }
        to{
            left:-50%;
        }
    }
`;

