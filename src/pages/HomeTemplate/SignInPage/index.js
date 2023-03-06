import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class SignInPage extends Component {
  render() {
    return (
        <div className='container'>
        <form>
            <div className="row form-group justify-content-center">
                <div className="col-md-4 py-4 my-2 border rounded shadow">
                    <h1 className='mb-3'>Đăng ký</h1>
                    <input name='taiKhoan'  className='form-control mt-2' placeholder="Tài khoản" type="text" />
                    <div className='text-danger'></div>
                    <input name='matKhau'  className='form-control mt-2' placeholder="Mật khẩu" type="password" />
                    <div className='text-danger'></div>
                    <input name='nhapLaiMatKhau'  className='form-control mt-2' placeholder="Nhập lại mật khẩu" type="password" />
                    <div className='text-danger'></div>
                    <input name='email'  className='form-control mt-2' placeholder="Email" type="email" />
                    <div className='text-danger'></div>
                    <input name='soDt'  className='form-control mt-2' placeholder="Số điện thoại" type="number" />
                    <div className='text-danger'></div>
                    <input name='hoTen'  className='form-control mt-2' placeholder="Họ tên" type="text" />
                    <div className='text-danger'></div>
                    <div className="text-danger"></div>
                    <div className='d-flex justify-content-end mt-5'>

                        <NavLink to="/signin" className="btn btn-outline-primary">Đăng nhập</NavLink>
                        <button type='submit' className="btn btn-primary ml-2">Đăng ký
                        
                        </button>
                        {/* <input type='submit' className="btn btn-primary ml-2" value="Đăng ký" /> */}
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
  }
}
