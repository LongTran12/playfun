import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import trx from '../assets/images/gametrx.jpg'
import trc from '../assets/images/gametrc.jpg'
import otf from '../assets/images/gameotf.jpg'
import BlockInvest from './BlockInvest'

export default function SectionGame2() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('USE TRX'),
            image: trx,
            hot: true,
            href: 'https://trx.tronlucky.io'
        },
        {
            id: 2,
            title: getLang('USE TRC10/20 TOKEN'),
            image: trc,
            coming: true,
            href: 'https://trc.tronlucky.io'
        },
        {
            id: 3,
            title: getLang('USE OTF TOKEN'),
            image: otf,
            coming: true,
            href: 'https://otf.tronlucky.io'
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
    background-color:transparent;
    padding:100px 0;
    overflow:hidden;
`;