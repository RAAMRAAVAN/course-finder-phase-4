import {UPDATE_DATA,UPDATE_LABELS,UPDATE_STATUS } from "./graphTypes"
const initialState={
    data:[],
    labels:[],
    status:false,
}
const graphReducer=(state=initialState,action)=>{
    switch(action.type){
                
        case UPDATE_DATA: return{
            ...state,
            data:action.payload
        }
        case UPDATE_LABELS: return{
            ...state,
            labels:action.payload
        }
        case UPDATE_STATUS: return{
            ...state,
            status:action.payload
        }
        
        default: return state    
    }
}
export default graphReducer;