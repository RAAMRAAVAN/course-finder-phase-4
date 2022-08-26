
export const insertCourses=(courses)=>
{
    return{
        type:"INSERTCOURSES",
        payload: courses
    }
}
export const filterCourses=(courses)=>
{
    return{
        type:"INSERTFILTEREDCOURSES",
        payload: courses
    }
}