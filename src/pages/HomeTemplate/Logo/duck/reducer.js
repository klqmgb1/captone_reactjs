// import {
//     LIST_LOGO_REQUEST, 
//     LIST_LOGO_SUCCESS, 
//     LIST_LOGO_FAIL
// } from './types'
// const initialState = {
//     loading: false,
//     data: null,
//     error: null,
// }

// const listLogoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LIST_LOGO_REQUEST:{
//             state.loading = true;
//             state.data = null;
//             state.error = null;
//             return {...state}
//         }
//         case LIST_LOGO_SUCCESS:{
//             state.loading = true;
//             state.data = action.payload;
//             state.error = null;
//             return {...state}
//         }
//         case LIST_LOGO_FAIL: {
//             state.loading = false;
//             state.data = null;
//             state.error = action.payload;
//             return {...state}
//         }
            
    
//         default:
//             return {...state}
//     }
// }
// export default listLogoReducer