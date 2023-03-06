import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './_components/Footer'
import NavbarHome from './_components/Navbar'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <Outlet />
        <Footer />
      </div>
    )
  }
}
