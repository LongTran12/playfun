import React, { useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../../contexts/SiteContext'

const TitleSectionFaq = ({ text }) => {
    const { getLang } = useContext(MyContext)
    return (
        <Wrap>
            {getLang(text)}
        </Wrap>
    )
}

export default TitleSectionFaq
const Wrap = styled.p`
    font-size:1.3em;
    font-weight:bold;
    text-transform:uppercase;
    color:#fff;
`