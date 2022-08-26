

const initialState={
    users:[],
    filteredCourses:[],
}
const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "INSERTCOURSES": 
        return{
            users:action.payload,
            filteredCourses:action.payload
        };
        case "INSERTFILTEREDCOURSES": 
        return{
            ...state,
            filteredCourses:action.payload,
        };;

        default: return state;      
    }
}
export default userReducer;