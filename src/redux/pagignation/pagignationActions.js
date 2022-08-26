import { CHANGE_PAGE,INCREMENT_PAGE,DECREMENT_PAGE,UPDATE_PAGE_ARR  } from "./pagignationTypes"
export const changePage=(val)=>{
    return{
        type: CHANGE_PAGE,
        payload: val
    }
}
export const incrementPage=()=>{
    return{
        type: INCREMENT_PAGE,
    }
}
export const decrementPage=()=>{
    return{
        type: DECREMENT_PAGE,
    }
}
export const updatePageArr=(arr)=>{
    return{
        type: UPDATE_PAGE_ARR,
        payload: arr
    }
}
