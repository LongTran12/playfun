import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import imgBackgr from '../assets/images/home-bg.png'
import img1 from '../assets/images/item-invest1.png'
import img2 from '../assets/images/item-invest2.png'
import img3 from '../assets/images/item-invest1.png'
import BlockInvest from './BlockInvest'

export default function SectionInvest() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            id: 1,
            title: getLang('Investment'),
            image: img1,

        },
        {
            id: 1,
            title: getLang('Trust Contract'),
            image: img2,
            hot: true

        },
        {
            id: 1,
            title: getLang('Loan Contract'),
            image: img3,
            coming: true
        }
    ]
    return (
        <Wrap>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }} className="text-center">
                    <img src={imgBackgr} alt="" />
                    <BlockHeading title={getLang('Invest')} bold="true" />
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
    background-color: #0a0a28;
`;