import React, { Component } from 'react';
import Renders from './render';
import Loader from '../../../../components/Loader';
import { actFetchData } from './action';
import { connect } from 'react-redux';
class ListRender extends Component {
  componentDidMount(){
    this.props.fetchData();
  }
  RenderList = ()=>{
    const {data, loading} = this.props;
    if(loading) return < Loader />
    return data?.map((movie) => {
      return <Renders key={movie.maPhim} movie={movie} />
    })  
  }
  render() {
    return (
        <tr>{this.RenderList()}</tr>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListRender)