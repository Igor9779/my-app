import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                  <img className='tab-img' src='https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum. Sed sit amet facilisis urna.
                    Ut bibendum, mauris sit amet commodo consequat,
                    leo libero pellentesque nulla, a dictum odio ligula et dolor.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img className='tab-img' src='https://miro.medium.com/v2/resize:fit:1400/0*jaGxhmoV53RzpNNu' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum. Sed sit amet facilisis urna.
                    Ut bibendum, mauris sit amet commodo consequat,
                    leo libero pellentesque nulla, a dictum odio ligula et dolor.
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum. Sed sit amet facilisis urna.
                    Ut bibendum, mauris sit amet commodo consequat,
                    leo libero pellentesque nulla, a dictum odio ligula et dolor.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img className='tab-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU6Wbeay3OFYUYO0StXP14U3Y8YJJMJEc5A&s' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum. Sed sit amet facilisis urna.
                    Ut bibendum, mauris sit amet commodo consequat,
                    leo libero pellentesque nulla, a dictum odio ligula et dolor.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img className='tab-img' src='https://blog.techliance.com/wp-content/uploads/Which-JavaScript-libraries-are-best-for-web-solutions-1024x611.jpg' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum. Sed sit amet facilisis urna.
                    Ut bibendum, mauris sit amet commodo consequat,
                    leo libero pellentesque nulla, a dictum odio ligula et dolor.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img className='tab-img' src='https://qph.cf2.quoracdn.net/main-qimg-df9ce022aa446a2f5f06fa0904c79e65' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum. Sed sit amet facilisis urna.
                    Ut bibendum, mauris sit amet commodo consequat,
                    leo libero pellentesque nulla, a dictum odio ligula et dolor.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
