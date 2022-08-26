import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Home from "./components/UserContainer";
import {useDispatch} from "react-redux";
import {insertCourses} from "./redux/user/userAction"
import {UpdateGraphLabels,UpdateGraphData} from "./redux/providerGraph/GraphActions"
import {UpdateParentLabels,UpdateParentData} from "./redux/parentGraph/parentActions"
function Routers()
{
    const dispatch=useDispatch();
    const Courses = async () => {
        const { data } = await axios("https://nut-case.s3.amazonaws.com/coursessc.json");
        dispatch(insertCourses(data));
      };
    const parentGraph=async()=>{
      let searchValue=["Parent Subject"];
      let uniqueCourses=[];
      let uniqueLengths=[];
      let i=0;
      let numberOfCourses=0;
      axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(response=>{
            const sortedCourses=response.data.sort((next,prev)=>{
                if(next[searchValue]>prev[searchValue])
                    return 1;
                else
                    return -1;    
                });
                numberOfCourses=sortedCourses.length;
                while(i<numberOfCourses)
            {
                let search=sortedCourses[i][searchValue];
    
            /********************** creating array of each unique restaurant **********************/
                let searchData=sortedCourses.filter(function(value)
                    {
                        return(value[searchValue]===search);
                    });
            /********************** calculating sum or ratings for each unique restaurant **********************/
            uniqueCourses.push(search);
            uniqueLengths.push(searchData.length);
                i=i+searchData.length;
            }
            // console.log(uniqueCourses,uniqueLengths);
            dispatch(UpdateParentLabels(uniqueCourses));
            dispatch(UpdateParentData(uniqueLengths));
          })
            .catch(error=>{
                console.log(error.message)
          })
    }

    const providerGraph=()=>{
      let searchValue=["Provider"];
      let uniqueCourses=[];
      let uniqueLengths=[];
      let i=0;
      let numberOfCourses=0;
      axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(response=>{
            const sortedCourses=response.data.sort((next,prev)=>{
                if(next[searchValue]>prev[searchValue])
                    return 1;
                else
                    return -1;    
                });
                numberOfCourses=sortedCourses.length;
                while(i<numberOfCourses)
            {
                let search=sortedCourses[i][searchValue];
    
            /********************** creating array of each unique restaurant **********************/
                let searchData=sortedCourses.filter(function(value)
                    {
                        return(value[searchValue]===search);
                    });
            /********************** calculating sum or ratings for each unique restaurant **********************/
            uniqueCourses.push(search);
            uniqueLengths.push(searchData.length);
                i=i+searchData.length;
            }
            // console.log("provider",uniqueCourses,uniqueLengths);
            dispatch(UpdateGraphLabels(uniqueCourses));
            dispatch(UpdateGraphData(uniqueLengths));
          })
          .catch(error=>{
              console.log(error.message)
          })
    }
        useEffect(() => {
        Courses();
        parentGraph();
        providerGraph();
      }, []);

    return (
        <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}/>
              </Routes>
            </BrowserRouter>
        </div>
        );
     
    
}
export default Routers;