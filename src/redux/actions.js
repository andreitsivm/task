import {
    MENU_VISIBLE, SET_USERS,
    START_LOADING,
    STOP_LOADING
} from "./app-reducer";

export const setUsers=(data)=>{
    return{
        type:SET_USERS,
        payload:data
    }
}
export const startLoading=()=>{
    return{
        type:START_LOADING
    }
}
export const stopLoading=()=>{
    return{
        type:STOP_LOADING
    }
}
