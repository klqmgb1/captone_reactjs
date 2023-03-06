import React, { Component } from 'react'
import HomePage from '../DEMO/HomePage'
import ListMoviePage from '../ListMoviePage'
import Carosel from './carousel'
// import Carousel from './Carousel/carosel'
import CumRap from './Rap'


export default class HomePages extends Component {
  render() {
    return (
      
      <><div className='bg-light'>
        <Carosel />
        <div className='container mt-4'>
          <ListMoviePage />
        </div>
        <div className='container mt-4'>
          <CumRap />
        </div>
          <HomePage />
          </div></>
    )
  }
}
