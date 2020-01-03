import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import B1 from '../assets/images/B1ERC20.jpg'
import B2 from '../assets/images/B1TRC20.jpg'
import B3 from '../assets/images/B1STACK.png'
import BlockInvest from './BlockInvest'

export default function SectionGame2() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('USE ERC20 TOKEN'),
            image: B1,
            hot: true,
            href: 'https://ethers.fund'
        },
        {
            id: 2,
            title: getLang('USE USDT'),
            image: B2,
            hot: true,
            href: 'https://trons.fund'
        },
        {
            id: 3,
            title: getLang('USE OTE'),
            image: B3,
            hot: true,
            href: 'https://ote.fund'
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
                    <BlockHeading title={getLang('titleGame2')} />
                    <Row gutter={40}>
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
    background-color:#1a1a3d;
    padding:100px 0;
    overflow:hidden;
`;