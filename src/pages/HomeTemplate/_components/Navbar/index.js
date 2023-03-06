import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavbarHome extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* Brand */}
            <a className="navbar-brand" href="https://cybersoft.edu.vn/">
                <img src='http://demo1.cybersoft.edu.vn/logo.png' alt='' className='logocyber'/>
            </a>
        {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
        {/* Navbar links */}
            <div className="collapse navbar-collapse d-flex justify-content-around" id="collapsibleNavbar">
                <ul className="navbar-nav py-2" style={{minWidth: '450px', justifyContent: 'space-around' }}>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? "bg-white mx-4 text-dark nav-link" : 'nav-link'}  to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? "bg-white mx-4 text-dark nav-link" : 'nav-link'} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? "bg-white mx-4 text-dark nav-link" : 'nav-link'} to="/list-movie">List Movie</NavLink>
                    </li>
                </ul>
                <ul style={{margin: 'auto', color: 'white'}} className={"d-flex"}>
                    <li style={{paddingRight: '50px', marginLeft: '2px'}}>
                        <button style={{borderRadius:'5px'}}>
                            <NavLink to="/login" style={{color:'black'}}>ĐĂNG NHẬP</NavLink>
                        </button>
                    </li>
                    <li style={{paddingRight: '50px'}}>
                        <button style={{borderRadius:'5px'}}>
                            <NavLink to="/auth" style={{color:'black'}}>ĐĂNG KÍ</NavLink>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

    )
  }
}
