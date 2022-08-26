import {UPDATE_DATA,UPDATE_LABELS,UPDATE_STATUS} from "./graphTypes"

 
export const UpdateGraphData=(val)=>{
    return{
        type: UPDATE_DATA,
        payload: val
    }
}
export const UpdateGraphLabels=(val)=>{
    return{
        type: UPDATE_LABELS,
        payload: val
    }
}
export const UpdateGraphStatus=(val)=>{
    return{
        type: UPDATE_STATUS,
        payload: val
    }
}
