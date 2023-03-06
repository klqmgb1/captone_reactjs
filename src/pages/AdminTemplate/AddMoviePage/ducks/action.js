import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS,LIST_MOVIE_FAIL } from "./type";
import api from "../../../../utils/apiUtils";
export const actFetchData = () =>{
    return (dispatch)=>{
        dispatch(actListMovieRequest())
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
          .then((result)=>{
            dispatch(actListMovieSuccess(result.data.content))
          })
          .catch((error)=>{
            dispatch(actListMovieFail(error))
          })
    };
};
export const actListMovieRequest = () =>{
    return  {
        type: LIST_MOVIE_REQUEST,

    }
}
export const actListMovieSuccess = (data)=>{
    return {
        type: LIST_MOVIE_SUCCESS,
        payload: data,
    }
}
export const actListMovieFail = (error)=>{
    return {
        type: LIST_MOVIE_FAIL,
        payload: error,
    }
}