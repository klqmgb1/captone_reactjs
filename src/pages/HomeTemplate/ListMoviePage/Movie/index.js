import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Movie extends Component {
  render() {
    const {movie} = this.props;
    return (
      <div className='col-md-3'>
        <div className="card mt-2" style={{position: 'relative'}}>
            <img className="card-img-top" style={{ height: '250px', objectFit: 'cover', objectPosition: '0% 20%' }} src={movie.hinhAnh} alt="" />
            <div className="card-body" style={{ height: '170px' }}>
                <h5 className="card-title">{movie.tenPhim}</h5>
                <Link to={`/detail/${movie.maPhim}`} className="btn btn-success" style={{position: 'absolute', bottom: '20px'}}>
                    Detail
                </Link>
            </div>
        </div>

      </div>
    )
  }
}
