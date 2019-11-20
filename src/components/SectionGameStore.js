import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import img1 from '../assets/images/lucky-dice.jpg'
import img2 from '../assets/images/lucky-ring.jpg'
import img3 from '../assets/images/lucky-moon.jpg'
import BlockInvest from './BlockInvest'

export default function SectionGameStore() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('LUCKY DICE'),
            image: img1,
            coming: true
        },
        {
            id: 2,
            title: getLang('LUCKY RING'),
            image: img2,
            coming: true

        },
        {
            id: 3,
            title: getLang('LUCKY MOON'),
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
                    <BlockHeading title={getLang('GAME STORE')} />
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
    background-color: transparent;
    padding:100px 0;
    overflow:hidden;
`;