// import axios from 'axios'
// import React, { Component } from 'react'
// import LichChieu from './ListLichChieu';
// export default class ListLichChieu extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loading : false,
//       data : null,
//       error : null,
//     }
//   }
//   componentDidMount(maRap){
//     this.setState({
//       loading: true,
//       data: null, 
//       error: null,
//     });
//     axios({
//       url: 'https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap='+maRap+'&maNhom=GP01',
//       method: "GET",
//       headers: {
//         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c"
//       },
//     })
    
//         .then((result)=>{
//             this.setState({
//               loading: false,
//               data: result.data.content[0].lstCumRap[0],
//               error: null
//             })
//         })
//         .catch((error)=>{
//             this.setState({
//               loading: false,
//               data: null,
//               error: error
//             })
//     })
  
//   }
//   renderLichChieu = () =>{
//     const {data} = this.state;
//     return data?.map((lichchieu)=>{
//       return <LichChieu key={lichchieu.maLichChieu} lichchieu={lichchieu}/>
//     })
//   }
//   render() {
//     return (
//       <div className='container d-flex justify-content-center'>
//             {this.renderLichChieu()}
//       </div>
//     )
//   }
// }
