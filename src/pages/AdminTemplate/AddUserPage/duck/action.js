import * as ActionType from "./types"
import api from "./../../../../utils/apiUtils"

export const addUserApi = (user) => {
    return (dispatch) =>{
        dispatch(addUserRequest());

        api
        .post("QuanLyNguoiDung/ThemNguoiDung", user)
        .then((result) => {
            dispatch(addUserSuccess(result.data.content));
        })
        .catch((error)=>{
            dispatch(addUserFail(error))
        })
    }
}


const addUserRequest = ()=>{
    return {
        type: ActionType.ADD_USER_REQUEST
    }
}
const addUserSuccess = (data)=>{
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data,
    }
}
const addUserFail = (error) =>{
    return {
        type: ActionType.ADD_USER_FAIL,
        payload: error,
    }
}