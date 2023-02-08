import React from 'react'
import girlPic from '../assets/landing-page-girl.png'
import {Col, Image, Row} from 'react-bootstrap'
import FeelTheMusicCard from '../components/FeelTheMusicCard'

type Props = {}

const Home = (props: Props) =>{
    return (
                <Row style={{ width: '100%', height: '100%' }} className="d-flex align-items-center justify-content-">
                    <Col>
                    <Image src={girlPic} alt="My Image" className="d-none d-xxl-block" style={{bottom: 0, height: "100%", width: "500px"}}/>
                    </Col>
                    <Col>
                    <FeelTheMusicCard /></Col>
                </Row>
    )
}

export default Home