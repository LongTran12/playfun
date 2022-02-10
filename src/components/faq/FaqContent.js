import React, { useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../../contexts/SiteContext'

const FaqContent = ({ textContent, children }) => {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap>
            <ElementP>{getLang(textContent)}</ElementP>
            <ElementP>{getLang(children)}</ElementP>
        </Wrap>
    )
}

export default FaqContent
const Wrap = styled.div`
    background-color:transparent;
    border-radius:0 0 15px 15px;
    padding:25px 30px;
`
const ElementP = styled.div`
    font-size:1em;
    color:#fff;
`