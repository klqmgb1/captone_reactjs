// import ListLichChieu from 'pages/HomeTemplate/LichChieu'
import ListLogoPages from 'pages/HomeTemplate/Logo'
import React, { Component } from 'react'

export default class CumRap extends Component {
  render() {
    return (
      <div className='rap '>
                <h3 className='d-flex justify-content-center'>CỤM RẠP</h3>
            <ListLogoPages />
            {/* <div className='rapcontent'>
            <ListLichChieu />
            </div> */}
      </div>
    )
  }
}

