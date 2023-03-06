import React, { Component } from 'react'
import { Outlet, Navigate, NavLink } from 'react-router-dom'

export default class AdminTemplate extends Component {
  render() {
    if (!localStorage.getItem("UserAdmin"))
      return <Navigate replace to="/auth" />;
    return (
      <div>
        <NavLink to="/" style={{color:'black', fontSize:'30px', margin: '30px 30px', fontWeight:'bold'}}>HOME</NavLink >
        <h1 style={{margin: "20px 20px"}}>Trang Quản Trị</h1>
        <Outlet />
      </div>
    )
  }
}
