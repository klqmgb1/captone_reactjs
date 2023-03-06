import { DETAIL_MOVIE_REQUEST, DETAIL_MOVIE_SUCCESS, DETAIL_MOVIE_FAIL } from "./types";
import api from "../../../../utils/apiUtils";

// import * as ActionType from "./types";

export const fectDetailMovie = (id)=>{
    return(dispatch) =>{
        dispatch(actDetailMovieRequet)

        api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
        .then((result)=>{
            dispatch(actDetailMovieSuccess(result.data.content))
        })
        .catch((error)=>{
            dispatch(actDetailMovieFail(error))
        })
    }
}

const actDetailMovieRequet = () => {
    return {
        type: DETAIL_MOVIE_REQUEST
    }
};
const actDetailMovieSuccess = (data) => {
    return{
        type: DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
};
const actDetailMovieFail = (error) => {
    return {
        type: DETAIL_MOVIE_FAIL,
        payload: error,
    }
};