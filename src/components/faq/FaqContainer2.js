import React from 'react'
import SectionFaq from './SectionFaq'
import styled from 'styled-components'
import TitleSectionFaq from './TitleSectionFaq'

const FaqContainer2 = () => {
    const title = 'Home'
    const data = [
        {
            id: 1,
            text: "FaqIntroduce",
            textContent: 'Dapps'

        },
        {
            id: 2,
            text: "Home",
            textContent: 'textFooter'

        },
        {
            id: 3,
            text: "Home",
            textContent: 'textFooter'

        },
        {
            id: 4,
            text: "Home",
            textContent: 'textFooter'

        }
    ]
    return (
        <>
            <TitleSectionFaq text={title} />
            {data.map((index, i) =>
                <WrapSection key={i}>
                    <SectionFaq {...index} />
                </WrapSection>
            )}
        </>
    )
}
export default FaqContainer2
const WrapSection = styled.div`
    margin-bottom:10px;
`
