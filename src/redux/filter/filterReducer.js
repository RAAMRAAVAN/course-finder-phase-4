import { FILTER_INPUTS } from "./filterTypes";

const initialState={
    filters:[],
}
const filterReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        
        case FILTER_INPUTS:
            return{
                filters:action.payload,
            }     
        
        default: return(state);       
    }
}
export default filterReducer;