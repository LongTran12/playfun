import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import bnb from '../assets/images/gamebnb.jpg'
import dab from '../assets/images/gamedab.jpg'
import lina from '../assets/images/gamelina.jpg'
import eth from '../assets/images/gameeth.jpg'
import spin from '../assets/images/gamespin.jpg'
import usdt from '../assets/images/gameusdt.jpg'

import BlockInvest from './BlockInvest'

export default function SectionGame() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('USE ETH'),
            image: eth,
            hot: true,
            href: 'https://eth.etherlucky.io'
        },
        {
            id: 2,
            title: getLang('USE DAB TOKEN'),
            image: dab,
            hot: true,
            href: 'https://dab.etherlucky.io'
        },
        {
            id: 3,
            title: getLang('USE LINA TOKEN'),
            image: lina,
            hot: true,
            href: 'https://lina.etherlucky.io'
        },
        {
            id: 4,
            title: getLang('USE SPIN TOKEN'),
            image: spin,
            hot: true,
            href: 'https://spin.etherlucky.io'
        },
        {
            id: 5,
            title: getLang('USE BNB TOKEN'),
            image: bnb,
            coming: true,
            href: 'https://bnb.etherlucky.io'
        },
        {
            id: 6,
            title: getLang('USE USDT TOKEN'),
            image: usdt,
            coming: true,
            href: 'https://ote.etherlucky.io'
        }
    ]
    return (
        <Wrap>
            <Row>
                <Col
                    xxl={{ span: 16, offset: 4 }}
                    xl={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                    className="text-center"
                >
                    <BlockHeading title={getLang('titleGame')} />
                    <Row gutter={40} type="flex" justify="center">
                        {data.map((index, i) =>
                            <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24} key={i}>
                                <BlockInvest {...index} />
                            </Col>

                        )}

                    </Row>
                </Col>
            </Row>
        </Wrap>
    )
}
const Wrap = styled.div`
    background-color: #0a0a28;
    padding:100px 0;
    overflow:hidden;
`;