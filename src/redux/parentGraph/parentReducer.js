import {UPDATE_PARENT_DATA,UPDATE_PARENT_LABELS,UPDATE_PARENT_STATUS} from "./parentTypes"
const initialState={
    data:[],
    labels:[],
    status:false,
}
const parentReducer=(state=initialState,action)=>{
    switch(action.type){
        
        
        
        case UPDATE_PARENT_DATA: return{
            ...state,
            data:action.payload
        }
        case UPDATE_PARENT_LABELS: return{
            ...state,
            labels:action.payload
        }
        case UPDATE_PARENT_STATUS: return{
            ...state,
            status:action.payload
        }
        
        default: return state    
    }
}
export default parentReducer;