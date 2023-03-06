import React, {useEffect} from 'react'
// import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actFetchData } from '../ListMoviePage/duck/action';
import { fectDetailMovie } from './duck/action';
import detailMovieReducer from './duck/reducer';
import Loader from '../../../components/Loader';
import { useSelector, useDispatch } from 'react-redux';



export default function DetailMoviePage(props) {

  const loading = useSelector((state)=>state.detailMovieReducer.loading);
  const data = useSelector((state)=> state.detailMovieReducer.data);
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(()=>{
    // props.fectDetailMovie(params.id)
    dispatch(fectDetailMovie(params.id))
  }, [])

  if(loading) return <Loader />


  return (
    <div>
      <h3>{data && data.tenPhim}</h3>
    </div>
  );
}

// const mapStateToProps = (state) =>{
//   return{
//     loading: state.detailMovieReducer.loading,
//     data: state.detailMovieReducer.data,
//   }
// }

// const mapDispatchToProps = (dispatch)=>{
//   return{
//     fectDetailMovie: (id) =>{
//       dispatch(actFetchData())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage)