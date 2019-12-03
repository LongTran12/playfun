import React from 'react'
import FaqContainer from '../components/faq/FaqContainer'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const Faq = () => {
    return (
        <Wrap>
            <Row type="flex" justify="center">
                <Col xxl={{ span: 16, offset: 2 }}
                    xl={{ span: 22, offset: 1 }}
                    lg={{ span: 22, offset: 1 }}
                    md={{ span: 22, offset: 1 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                >
                    <WrapSection>
                        <FaqContainer />
                    </WrapSection>

                </Col>
            </Row>
        </Wrap>

    )
}

export default Faq
const Wrap = styled.div`
    background-color:transparent;
    padding:100px 0;
    overflow:hidden;
`
const WrapSection = styled.div`
margin-bottom:3em;
`