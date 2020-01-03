import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import BlockHeading from './BlockHeading'
import { MyContext } from '../contexts/SiteContext'
import B1 from '../assets/images/partTron.png'
import B2 from '../assets/images/partHuobi.png'
import B3 from '../assets/images/partBitsonic.png'
import B4 from '../assets/images/partPlaydapp.png'
import B5 from '../assets/images/partDapp.png'
import B6 from '../assets/images/partEth.png'
import B7 from '../assets/images/partOkex.png'
import BlockInvest from './BlockInvest'

export default function SectionPartner() {
    const { getLang } = useContext(MyContext)
    const data = [
        {
            image: B1,
            reference: 'tron'
        },
        {
            image: B2,
            reference: 'huobi'
        },
        {
            image: B3,
            reference: 'bitsonic'
        },
        {
            image: B4,
            reference: 'bitsonic'
        },
        {
            image: B5,
            reference: 'bitsonic'
        },
        {
            image: B6,
            reference: 'bitsonic'
        },
        {
            image: B7,
            reference: 'bitsonic'
        }
    ]
    return (
        <Wrap id="ecosystem">
            <Row>
                <Col
                    xxl={{ span: 22, offset: 1 }}
                    xl={{ offset: 1 }}
                    lg={{ offset: 1 }}
                    md={{ offset: 1 }}
                    sm={{ offset: 1 }}
                    xs={{ offset: 1 }}
                    className="text-center"
                >
                    <BlockHeading title={getLang('titlePARTNER')} />
                    <Row gutter={20} type="flex" justify="space-between" align="top" >
                        {data.map((index, i) =>
                            <Col xxl={6} xl={8} lg={12} md={12} sm={12} xs={24} key={i}>
                                {/* <BlockInvest {...index} /> */}
                                <Image width="100%" height='100%' src={index.image} alt={index.reference} />
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
const Image = styled.img`
    background-size:cover;
    margin-bottom:1em;
`