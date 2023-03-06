import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class LoginPage extends Component {
  render() {
    return (
        <form  className='container'>
            <div className='row justify-content-center '>
                <div className="col-md-4 mt-5 border rounded py-5 mb-5 shadow">
                    <i className="fa-solid fa-film" style={{ fontSize: '60px', }} />
                    <div className='d-flex justify-content-center ' style={{textAlign: 'center'}}>
                        <div>
                            <h4 className='mb-4 text-center d-inline'>Đăng nhập</h4><br />
                            <span className='ml-3'>Chào mừng bạn quay lại.</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="form-group">
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <input  name='taiKhoan' className='form-control' type='text' placeholder='Nhập tài khoản' />
                        </div>
                        <div className="form-">
                            <label htmlFor="taiKhoan">Mật khẩu</label>
                            <input  name='matKhau' className='form-control' type='password' placeholder='Nhập mật khẩu' />
                        </div>
                        <div className='text-danger ml-3'></div>
                    </div>
                    <button

                        className='btn btn-block btn-primary mt-5'>Đăng nhập</button>
                    <div className='text-center mt-2 font-italic'><span>Bạn không có tài khoản ? </span><Link to='/signin'>Đăng ký</Link></div>
                </div>
            </div>
        </form>
    )
  }
}
