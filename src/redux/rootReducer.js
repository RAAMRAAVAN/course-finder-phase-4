import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import filterReducer from "./filter/filterReducer";
import pagignation from "./pagignation/pagignationReducer";
import graphReducer from "./providerGraph/graphReducer";
import parentReducer from "./parentGraph/parentReducer"

const rootReducer= combineReducers({
    user: userReducer,
    filterCourses: filterReducer,
    pageNumber: pagignation,
    providergraph: graphReducer,
    parentgraph: parentReducer
})
export default rootReducer