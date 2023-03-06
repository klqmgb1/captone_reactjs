import axios from 'axios'
import React, { Component } from 'react'
import Logo from './ListLogo/logo';
export default class ListLogoPages extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : false,
      data : null,
      error : null,
    }
  }
  componentDidMount(){
    this.setState({
      loading: true,
      data: null, 
      error: null,
    });
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c"
      },
    })
    
        .then((result)=>{
            this.setState({
              loading: false,
              data: result.data.content,
              error: null
            })
        })
        .catch((error)=>{
            this.setState({
              loading: false,
              data: null,
              error: error
            })
    })
  
  }
  renderLogo = () =>{
    const {data} = this.state;
    return data?.map((listlogo)=>{
      return <Logo key={listlogo.maHeThongRap} listlogo={listlogo}/>
    })
  }
  render() {
    return (
      <div className='container d-flex justify-content-center'>
            {this.renderLogo()}
      </div>
    )
  }
}
