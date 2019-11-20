import React, { useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../../contexts/SiteContext'

const FaqBlock = ({ id, text }) => {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap>
            <WrapP><ElementSpan>{id}.</ElementSpan> {getLang(text)}</WrapP>
        </Wrap>
    )
}

export default FaqBlock
const Wrap = styled.div`
    background-color:transparent;
    padding:10px 15px;
`
const WrapP = styled.p`
    margin-bottom:0;
    font-size:1em;
`
const ElementSpan = styled.span``