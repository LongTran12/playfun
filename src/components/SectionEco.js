import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import B1 from '../assets/images/ECO1.jpg'
import B2 from '../assets/images/ECO2.png'
import B3 from '../assets/images/ECO3.jpg'
import BlockInvest from './BlockInvest'

export default function SectionGame2() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('USE USDI'),
            image: B1,
            hot: true
        },
        {
            id: 2,
            title: getLang('USE USDI'),
            image: B2,
            coming: true
        },
        {
            id: 3,
            title: getLang('USE USDI'),
            image: B3,
            coming: true
        }
    ]
    return (
        <Wrap id="ecosystem">
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
                    <BlockHeading title={getLang('titleEco')} />
                    <Row gutter={40} >
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