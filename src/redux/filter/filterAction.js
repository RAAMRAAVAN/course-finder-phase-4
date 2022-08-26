import { FILTER_INPUTS } from "./filterTypes";


export const fetchFilterSuccess=users=>{
    return{
        type: FILTER_INPUTS ,
        payload: users
    }
}


