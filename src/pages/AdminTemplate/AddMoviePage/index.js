import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListRender from './ducks/movie'
// const AddNewPages = () =>{
//   const navigate = useNavigate()
//   const [film, setFilm] = useState({
//     maPhim: 5000, //done
//     tenPhim: '', //done
//     biDanh: '',
//     trailer: '', //done
//     hinhAnh: '', //done
//     moTa: '', //done
//     maNhom: 'GP05',
//     ngayKhoiChieu: '', //done
//     danhGia: 5, //done
//     hot: true, //done
//     dangChieu: true, //done
//     sapChieu: true, //done
// })

// }

export default class AddMoviePage extends Component {
  
  render() {
    
    return (
      <div className="container mt-5">
      <table className="table">
          <ListRender />
      </table>
    </div>
    );
  }
}
