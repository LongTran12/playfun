import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import B1 from '../assets/images/TRADE1.jpg'
import B2 from '../assets/images/TRADE2.jpg'
import B3 from '../assets/images/TRADE3.png'
import BlockInvest from './BlockInvest'

export default function SectionGame2() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('USE'),
            image: B1,
            hot: true,
            href: 'https://ethers.fund'
        },
        {
            id: 2,
            title: getLang('USE'),
            image: B2,
            coming: true,
            href: 'https://trons.fund'
        },
        {
            id: 3,
            title: getLang('STA'),
            image: B3,
            coming: true,
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
                    <BlockHeading title={getLang('titleTrade')} />
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
    background-color:#1a1a3d;
    padding:100px 0;
    overflow:hidden;
`;