import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import img1 from '../assets/images/game1.jpg'
import img2 from '../assets/images/trc10.jpg'
import img3 from '../assets/images/game4.jpg'
import BlockInvest from './BlockInvest'

export default function SectionGame2() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('USE TRX'),
            image: img1,
            hot: true,
            href: 'https://trx.tronlucky.io'
        },
        {
            id: 2,
            title: getLang('USE TRC10/20 TOKEN'),
            image: img2,
            hot: true,
            href: 'https://trc10.tronlucky.io'

        },
        {
            id: 3,
            title: getLang('USE OTT TOKEN'),
            image: img3,
            coming: true,
            href: 'https://ote.tronlucky.io'
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