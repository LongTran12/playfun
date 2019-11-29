import React from 'react'
import SectionFaq from './SectionFaq'
import styled from 'styled-components'
import TitleSectionFaq from './TitleSectionFaq'

const FaqContainer = () => {
    const title = 'INTRODUCTION'
    const data = [
        {
            id: 1,
            text: "Introduce about OTFUND Platform",
            textContent: 'OTFUND is created a blockchain-based platform. We are also the first platform integrates Dapp Game includes Digital Lottery and Digital Trading which is officially launched in October.Using blockchain technology discover how to architect and develop private permissioned blockchain networks for the enterprise to handle business-to-business transactions while maintaining security, privacy confidentiality and decentralized entertainment providers with visibillity, fairness also optimal customer experience.'

        },
        {
            id: 2,
            text: "Lucky Game Platform",
            textContent: 'OTFUND creates entertainment Dapps including lottery games Lucky Number, Lucky Dice, Lucky Ring and Lucky Moon, etc in the beginning and will constantly update new games to serve the growing demand of the community.'

        },
        {
            id: 3,
            text: "For Advertising",
            textContent: 'In the future when the community thrives, the system will update the interface and conduct advertising service. All profits will be publicly disclosed and redistributed to members holding OTF Token.'

        },
        {
            id: 4,
            text: "For Developers",
            textContent: 'The OTFUND team has finished building the core structure to manage the entire system and provides the API so that outside developers can interact and design module Games on our operating system without any effect to the current community. Developers also benefit attractive policies from OTFund.'

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
export default FaqContainer
const WrapSection = styled.div`
    margin-bottom:10px;
`
