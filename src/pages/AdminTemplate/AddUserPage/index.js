import React, { useState } from 'react'
import { addUserApi } from './duck/action';
import { useDispatch } from 'react-redux';


export default function AddUser() {

    const dispatch = useDispatch()
    const [state, setState] = useState({
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoanNguoiDung: "KhachHang",
      hoTen: "",
    });

    const handleOnchange = (e)=>{
      const { name, value } = e.target;
      setState({
        ...state,
        [name]: value
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(addUserApi(state))
    }
      return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Số ĐT</label>
                <input
                  type="number"
                  className="form-control"
                  name="soDt"
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Họ Tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={handleOnchange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
      )
    }
