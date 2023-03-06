import React, { Component } from 'react'
export default class Renders extends Component {
  render() {
    const {movie} = this.props;
    return (
      <table style={{width: '100%'}}>
          <thead >
            <tr>
              <th>Mã Phim</th>
              <th>Hình Ảnh</th>
              <th>Tên Phim</th>
              <th>Mô Tả</th>
              <th style={{minWidth: '200px'}}>Hành Động</th>
            </tr>
        </thead>
          <tbody style={{position: 'relative'}}>
            <td style={{width: '100px'}}>{movie && movie.maPhim}</td>
            <td>
              <img  alt='' src={movie.hinhAnh} style={{width: '50px', objectFit: 'cover', objectPosition: '0% 20%'}}/>
            </td>
            <td style={{minWidth: '200px'}}>{movie && movie.tenPhim}</td>
            <td style={{overflow: 'hidden', height: '20px', objectFit: 'cover', minWidth: '200px', maxHeight: '200px'}}>{movie && movie.moTa}</td>
            <td>
              <div>
                <button className='btn btn-danger' style={{width: '80px'}}>Delete</button>
                <button className='btn btn-warning' style={{width: '80px'}}>Edit</button>
              </div>
            </td>
          </tbody>

          </table>
    )
  }
}


