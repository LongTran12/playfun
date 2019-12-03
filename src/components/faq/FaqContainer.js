import React, { useContext } from 'react'
import SectionFaq from './SectionFaq'
import styled from 'styled-components'
import TitleSectionFaq from './TitleSectionFaq'
import { MyContext } from '../../contexts/SiteContext'

const FaqContainer = () => {
    const { getLang } = useContext(MyContext)
    const title = 'INTRODUCTION'
    const title2 = 'MINING OTF TOKEN'
    const data = [
        {
            id: 1,
            text: "IntroHead1",
            textContent: `IntroContent1`

        },
        {
            id: 2,
            text: "IntroHead2",
            textContent: 'IntroContent2'

        },
        {
            id: 3,
            text: "IntroHead3",
            textContent: 'IntroContent3',
            children: <WrapChild>
                <p>- FaceBook  <a href="https://www.facebook.com/OTFund-102027677883008/">https://www.facebook.com/OTFund-102027677883008/</a></p>
                <p>- Zalo Group  <a href="https://zaloapp.com/g/hrfpzw058">https://zaloapp.com/g/hrfpzw058</a></p>
                <p>{getLang(`Telegram Group: Game DAPP Lucky ERC10 TRC10/20 CLUB`)}</p>
                <p>- VN <a href="https://t.me/clbgamedapplucky">https://t.me/clbgamedapplucky</a></p>
                <p>- ENG <a href="https://t.me/clbldappgameen">https://t.me/clbldappgameen</a></p>

            </WrapChild>

        },
        {
            id: 4,
            text: "IntroHead4",
            textContent: 'IntroContent4'

        },
        {
            id: 5,
            text: "IntroHead5",
            textContent: 'IntroContent5'

        },

    ]
    const data2 = [
        {
            id: 1,
            text: "MiNingHead1",
            textContent: `MiningContent1`

        },
        {
            id: 2,
            text: "MiNingHead2",
            textContent: `MiningContent2`

        },
        {
            id: 3,
            text: "MiNingHead3",
            textContent: `MiningContent3`

        },
        {
            id: 4,
            text: "MiNingHead4",
            // textContent: `MiningContent4`

        },
        {
            id: 5,
            text: "MiNingHead5",
            textContent: `MiningContent5`

        },
        {
            id: 6,
            text: "MiNingHead6",
            textContent: `MiningContent6`

        },
        {
            id: 7,
            text: "MiNingHead7",
            textContent: `MiningContent7`

        },
        {
            id: 8,
            text: "MiNingHead8",
            textContent: `MiningContent8`

        },
        {
            id: 9,
            text: "MiNingHead9",
            children: <WrapChild>
                <p>{getLang('(1) ETH price')}</p>
                <p>{getLang('(2) ETH amount in the Reserve Fund')}</p>
                <p>{getLang('(3) The growing rate of Reserve Fund')}</p>
                <p>{getLang('(4) Speed of increasing new Users')}</p>
                <p>{getLang('(5) Number of OTF Token mined')}</p>
                <p>{getLang('MiningContent91')}</p>
                <p>{getLang('MiningContent92')}</p>
                <p>{getLang('MiningContent93')}</p>
            </WrapChild>

        },
    ]
    const title3 = 'RESERVE FUND'
    const data3 = [
        {
            id: 1,
            text: "ReserveHead1",
            children: <WrapChild>
                <p>{getLang("STO (Security Token Offering) – This is secured by fund assets and is considered as a legally binding investment contract that allows investors to access shares of the fund, stock news monthly or have a say in the business decision-making process.")}</p>
                <p>{getLang("To ensure the security of the platform, OTFUND team is committed to researching the security and sustainability of the system to maximize that capability on the advanced technology platforms Smart Contract.")}</p>
            </WrapChild>
        },
        {
            id: 2,
            text: "ReserveHead2",
            textContent: `ReserveContent2`,
        },
        {
            id: 3,
            text: "ReserveHead3",
            textContent: `ReserveContent3`,
        },
        {
            id: 4,
            text: "ReserveHead4",
            textContent: `ReserveContent4`,
        },
    ]
    const title4 = 'LUCKY NUMBER GAME'
    const data4 = [
        {
            id: 1,
            text: "LuckyHead1",
            textContent: `LuckyContent1`,
        },
        {
            id: 2,
            text: "LuckyHead2",
            textContent: `LuckyContent2`,
            children: <WrapChild>
                <h3>{getLang("We have:")}</h3>
                <Group>
                    + 4 sizes on TRUSTWALLET:  0.01 – 0.05 – 0.1 – 0.5<br />
                    + 4 sizes on TRONWALLET: 50 – 100 – 250 – 500<br />
                    + 2 sizes OTE: 5 – 20<br />
                    + 2 sizes ETH: 0.05 – 0.5<br />
                    + 4 sizes TRX: 20 – 100 – 250 – 500<br />
                    + 2 sizes USDT Token: 5 – 20<br />
                    + 4 sizes LINA Token: 100 – 200 – 500 – 1000<br />
                    + 4 sizes DAB Token: 10 – 20 – 50 – 100<br />
                    + 4 sizes SPIN Token: 100 – 200 – 500 – 1000<br />
                </Group>
                <p>{getLang(`Moreover, the players can use Token ERC20, TRC 10/20 (BNB, ANX, LINA, DAB, DPA, BitDea,… and many other coins) with the prices of ticket are 10 – 1000 Token.
                We choose one number from 01 to 99 . The system will automatically spin a pool when it has 100 players or we will get the lottery result after 60 minutes which has under 100 players.`)}</p>
            </WrapChild>,
        },
        {
            id: 3,
            text: "LuckyHead3",
            textContent: `LuckyContent3`,
        },
        {
            id: 4,
            text: "LuckyHead4",
            textContent: `LuckyContent4`,
        },
        {
            id: 5,
            text: "LuckyHead5",
            textContent: `LuckyContent5`,
        },
        {
            id: 6,
            text: "LuckyHead6",
            textContent: `LuckyContent6`,
        },
        {
            id: 7,
            text: "LuckyHead7",
            textContent: `LuckyContent7`,
        }

    ]
    return (
        <>
            <Wrap>
                <TitleSectionFaq text={title} />
                {data.map((index, i) =>
                    <WrapSection key={i}>
                        <SectionFaq {...index} />
                    </WrapSection>
                )}
            </Wrap>
            <Wrap>
                <TitleSectionFaq text={title2} />
                {data2.map((index, i) =>
                    <WrapSection key={i}>
                        <SectionFaq {...index} />
                    </WrapSection>
                )}
            </Wrap>
            <Wrap>
                <TitleSectionFaq text={title3} />
                {data3.map((index, i) =>
                    <WrapSection key={i}>
                        <SectionFaq {...index} />
                    </WrapSection>
                )}
            </Wrap>
            <Wrap>
                <TitleSectionFaq text={title4} />
                {data4.map((index, i) =>
                    <WrapSection key={i}>
                        <SectionFaq {...index} />
                    </WrapSection>
                )}
            </Wrap>
        </>
    )
}
export default FaqContainer
const WrapSection = styled.div`
    margin-bottom:10px;
`
const Wrap = styled.div`
    margin-bottom:3em;
`
const WrapChild = styled.div`
    margin-top:10px;
    color:#fff;
    *{
        font-size:1em;
        color:#fff;
    }
    a{
        color:#007bff;
    }
`
const Group = styled.div`
    padding-left:1em;
    margin-bottom:1em;
`