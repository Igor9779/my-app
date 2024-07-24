import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

import volga from '../assets/volga.JPG'
import oldCar from '../assets/pexels-vadutskevich-13467182.jpg'

export default class CarouselBox extends Component {
  render() {
      return (
          <Carousel>
              <Carousel.Item>
                  <img
                      className='d-block w-100'
                      src={volga}
                      alt='Volga'
                  />
                  <Carousel.Caption>
                      <h3>My car</h3>
                      <p>My first car, which taught me how to drive.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className='d-block w-100'
                      src={oldCar}
                      alt='Chaika'
                  />
                  <Carousel.Caption>
                      <h3>Retro car</h3>
                      <p>Something similar to a "Chaika"...in my opinion.</p>
                  </Carousel.Caption>
              </Carousel.Item>
        </Carousel>
    )
  }
}
