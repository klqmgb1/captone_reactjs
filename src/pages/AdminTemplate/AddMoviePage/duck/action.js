
import * as ActionType from "./types"
import api from "utils/apiUtils";


export const actAuthLogin = (user, navigate)=>{
    return (dispatch) =>{
        dispatch(actAuthLoginRequest());
        api
        .post("/QuanLyNguoiDung/DangNhap", user)
        .then((result)=>{
            if(result.data.content.maLoaiNguoiDung === "KhachHang"){
                return Promise.reject({
                    response: {
                        data: {
                            content: "Ban khong co quyen truy cap!",
                        },
                    },
                });
            }

            dispatch(actAuthLoginSuccess(result.data.content));

            localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

            navigate("/admin/dashboard", {replace : true})
        })
        .catch((error)=>{
            dispatch(actAuthLoginFail(error))
        })
    }
}

export const actAuthLoginRequest = () =>{
    return {
        type: ActionType.ADD_MOVIE_REQUEST
    }
}

export const actAuthLoginSuccess = (data) =>{
    return {
        type: ActionType.ADD_MOVIE_SUCCESS,
        payload: data,
    }
}

export const actAuthLoginFail = (error) =>{
    return {
        type: ActionType.ADD_MOVIE_FAIL,
        payload: error,
    };
};