import { CHANGE_PAGE,INCREMENT_PAGE,DECREMENT_PAGE,UPDATE_PAGE_ARR,  } from "./pagignationTypes"
const initialState={
    pagenumber:0,
}
const pagignation=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_PAGE: return{
            ...state,
            pagenumber:action.payload
        }
        case INCREMENT_PAGE: return{
            ...state,
            pagenumber: state.pagenumber+6
        }
        case DECREMENT_PAGE: return{
            ...state,
            pagenumber: state.pagenumber-6
        }
        case UPDATE_PAGE_ARR: return{
            ...state,
            pagearr: action.payload
        }
        default: return state    
    }
}
export default pagignation;