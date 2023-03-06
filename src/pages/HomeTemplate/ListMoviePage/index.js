import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import Loader from '../../../components/Loader';
import { actFetchData } from './duck/action';
import { connect } from 'react-redux';
class ListMoviePage extends Component {

  componentDidMount(){
    //requet
    this.props.fetchData();
  }
  

  RenderListMovie = ()=>{
    const {data, loading} = this.props;
    if(loading) return < Loader />

    //opptional ... tương tự if
    return data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />
    })  
  }


  render() {
    return (
      <div className='container'>
          <div className='row'>{this.RenderListMovie()}</div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchData: () => {
      dispatch(actFetchData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage)