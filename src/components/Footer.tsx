import React from 'react'
import facebooklogo from '../assets/facebook.svg'
import twitterlogo from '../assets/twitter.svg'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

type Props = {}

const Footer = (props: Props) =>{
  return (
    <Card className="bg-dark" >
    <Card.Footer  >
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col xs={3} md={3}>
          <p>About Us</p>
        </Col>
        <Col xs={3} md={3}>
          <p>Contact</p>
        </Col>
        <Col xs={3} md={3}>
          <Image src={twitterlogo} alt="Twitter logo" />
          <p>Twitter</p>
        </Col>
        <Col xs={3} md={3}>
          <Image src={facebooklogo} alt="Facebook logo" />
          <p>Facebook</p>
        </Col>
      </Row>
    </Container>
  </Card.Footer>
  </Card>
  )
}

export default Footer