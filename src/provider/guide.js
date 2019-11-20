import React, { memo } from 'react'
import styled from 'styled-components/macro'
import MetaMask from "../assets/img/metamask.png"
import NotInstalled from "../assets/img/notInstalled.svg"

const Guide = () => {
    return (
        <GuidePage>
            <GuideWrap>
                <GuideInner>
                    <GuideLeft>
                        <Head>You need to install the extension to run the app!</Head>
                        <GuideBody>
                            <ExtensionBlock>
                                <Title>ETHEREUM</Title>
                                <Status>Ready</Status>
                                <InstallLink>
                                    <span>Please install Metamask in here:</span>
                                    <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"><img src={MetaMask} alt="Metamask Wallet" /></a>
                                </InstallLink>
                            </ExtensionBlock>
                        </GuideBody>
                    </GuideLeft>
                    <GuideRight>
                        <img src={NotInstalled} alt="Not Installed" />
                    </GuideRight>
                </GuideInner>
            </GuideWrap>
        </GuidePage>
    )
}
export default Guide;

const GuidePage = memo(styled.div`
    background: #141734;
    position: relative;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding-left: 3%;
    padding-right: 3%;
    @media(min-width: 981px){
        
    }
`)
const GuideWrap = memo(styled.div`
    display: block;
    width: 100%;
`)
const GuideInner = memo(styled.div`
    @media(min-width: 981px){
        display: flex;
        justify-content: space-evenly;
    }
`)
const GuideLeft = memo(styled.div`
    @media(min-width: 981px){
        width: 67%;
        margin-right: 3%;
    }
`)
const GuideRight = memo(styled.div`
    text-align: center;
    @media(max-width: 980px){
        margin-top: 2em;
    }
    @media(min-width: 981px){
        width: 40%;
        display: flex;
        align-items: center;
    }
    img{
        width: 100%;
        height: auto;
    }
`)
const Head = memo(styled.div`
    color: #ff581d;
    text-transform: uppercase;
    font-size: 2.4em;
    margin-bottom: 2em;
    @media(max-width: 980px){
        font-size: 2em;
        text-align: center;
    }
`)
const GuideBody = memo(styled.div`
    display: flex;
    justify-content: space-between;
`)
const ExtensionBlock = memo(styled.div`
    background-color: transparent;
    box-shadow: 3px 3px 20px 5px rgba(18,17,32,0.3);
    width: 47%;
    padding: 2em;
    text-align: center;
`)
const Title = memo(styled.div`
    font-size: 1.8em;
    margin-bottom: 0.7em;
`)
const Status = memo(styled.div`
    color: #ff581d;
    font-size: 1.8em;
    margin-bottom: 0.7em;
`)
const InstallLink = memo(styled.div`
    display: flex;
    justify-content: space-evenly;
    span{
        display: flex;
        align-items: center;
        margin-right: 0.5em;
        text-align: left;
    }
    img{
        width: 50px;
        height: auto;
    }
`)
