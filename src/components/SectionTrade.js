import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import img1 from '../assets/images/otc_exchange.png'
import img2 from '../assets/images/dex.png'
import img3 from '../assets/images/aitrading.png'
import BlockInvest from './BlockInvest'

export default function SectionGame() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('OTC Exchange'),
            image: img1,
            hot: true,
        },
        {
            id: 1,
            title: getLang('DECENTRALIZED ExChange'),
            image: img2,
            coming: true

        },
        {
            id: 1,
            title: getLang('AI Trading'),
            image: img3,
            coming: true
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
                    <BlockHeading title={getLang('Trade')} bold="true" />
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
   background-color:#0e0e30;
    padding:100px 0 0;
    overflow:hidden;
`;