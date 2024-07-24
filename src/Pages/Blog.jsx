import React, { Component } from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col md='9'>
                    <Card className='m-5'>
                        <img
                            width={150}
                            height={150}
                            className='mr-3'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <CardBody>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eius recusandae quos quae labore numquam adipisci sapiente vero!
                                Non distinctio eos eveniet necessitatibus iste,
                                blanditiis architecto sequi sit, dignissimos unde cumque?
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='m-5'>
                        <img
                            width={150}
                            height={150}
                            className='mr-3'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <CardBody>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eius recusandae quos quae labore numquam adipisci sapiente vero!
                                Non distinctio eos eveniet necessitatibus iste,
                                blanditiis architecto sequi sit, dignissimos unde cumque?
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='m-5'>
                        <img
                            width={150}
                            height={150}
                            className='mr-3'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <CardBody>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eius recusandae quos quae labore numquam adipisci sapiente vero!
                                Non distinctio eos eveniet necessitatibus iste,
                                blanditiis architecto sequi sit, dignissimos unde cumque?
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='m-5'>
                        <img
                            width={150}
                            height={150}
                            className='mr-3'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                        />
                        <CardBody>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eius recusandae quos quae labore numquam adipisci sapiente vero!
                                Non distinctio eos eveniet necessitatibus iste,
                                blanditiis architecto sequi sit, dignissimos unde cumque?
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='3'>
                    <h5 className='text-center mt-5'>Categories</h5>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>HTML/CSS</ListGroupItem>
                            <ListGroupItem>JavaScript</ListGroupItem>
                            <ListGroupItem>Python</ListGroupItem>
                            <ListGroupItem>Java</ListGroupItem>
                            <ListGroupItem>C++</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card className='mt-3' bg='light'>
                        <CardBody>
                            <CardTitle>Side widget</CardTitle>
                            <CardText>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eius recusandae quos quae labore numquam adipisci sapiente vero!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }
}
