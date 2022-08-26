import React from "react";
import Filter from "./filter"
import Header from "./Header"
import Pagignation from "./pagignation";
import Courses from "./Courses";
import {useSelector} from "react-redux";
import Graph from "./Graph";
import Graph2 from "./Graph2";
function UserContainer()
{
    const graph=useSelector(state=>state.parentgraph);
    const graph2=useSelector(state=>state.providergraph);
    return (
        <div>
            <Header/>
            <Filter/>
            {graph.status?<Graph/>:<></>} 
            {graph2.status?<Graph2/>:<></>}
            <Courses/>
            <Pagignation/>
        </div>
    )
}
export default UserContainer;