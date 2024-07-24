import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center p-4'>Our team</h2>
          <CardGroup className='m-4 justify-content-between'>
            <Card>
              <CardImg
                variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <CardBody>
                <CardTitle>Developers</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas fugiat laboriosam dicta.
                </CardText>
                <Button variant='primary'>About team</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                variant='top'
                src='https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <CardBody>
                <CardTitle>Designers</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas fugiat laboriosam dicta.
                </CardText>
                <Button variant='primary'>About team</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                variant='top'
                src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <CardBody>
                <CardTitle>Testers</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas fugiat laboriosam dicta.
                </CardText>
                <Button variant='primary'>About team</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
