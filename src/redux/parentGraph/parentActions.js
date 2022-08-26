import {UPDATE_PARENT_DATA,UPDATE_PARENT_LABELS,UPDATE_PARENT_STATUS} from "./parentTypes"

export const UpdateParentData=(val)=>{
    return{
        type: UPDATE_PARENT_DATA,
        payload: val
    }
}
export const UpdateParentLabels=(val)=>{
    return{
        type: UPDATE_PARENT_LABELS,
        payload: val
    }
}
export const UpdateParentGraphStatus=(val)=>{
    return{
        type: UPDATE_PARENT_STATUS,
        payload: val
    }
}
