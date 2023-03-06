import React, { Component } from 'react'
export default class Renders extends Component {
  render() {
    const {movie} = this.props;
    return (
        <>
          <td>{movie && movie.maPhim}</td>
          <td>
            <img  alt='' src={movie.hinhAnh}/>
          </td>
          <td>{movie && movie.tenPhim}</td>
          <td>{movie && movie.moTa}</td>
          <td>{movie && movie.hinhAnh}</td>
        </>
    )
  }
}


