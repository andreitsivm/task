export const SET_USERS="SET_USERS"
export const SET_POSITIONS="SET_POSITIONS"
export const START_LOADING="START_LOADING"
export const STOP_LOADING="STOP_LOADING"




const initialState={
    usersData:{},
    positions:{},
    loading:false
}
export const appReducer=(state=initialState,action)=>{
        switch (action.type) {

            case START_LOADING:{
                return {
                    ...state,loading: true
                }
            }
            case STOP_LOADING:{
                return {
                    ...state,loading: false
                }
            }
            case SET_USERS:{
                return {
                    ...state,usersData: action.payload
                }
            }
            case SET_POSITIONS:{
                return {
                    ...state,positions: action.payload
                }
            }
            default: return state
        }
    }