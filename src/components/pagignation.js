import React, {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {changePage,incrementPage,decrementPage} from "../redux/pagignation/pagignationActions"
function Pagignation()
{
    const [currentPageNo,setPageNo]=useState(1);
    let [S,setS]=useState(0);
    let [E,setE]=useState(5);

    const dispatch=useDispatch();
    const courses=useSelector(state=>state.user.filteredCourses)
    const numberofcourses=courses.length;
    
    let numberOfPages=Math.ceil(numberofcourses/6)

    let allPagesArr=[];   
    // reset
    let reset=()=>{
      setS(0);
      setE(5);
      setPageNo(1);
      numberOfPages=Math.ceil(numberofcourses/6)
      for(let i=0;i<numberOfPages;i++)
          allPagesArr[i]=i+1;
      if(numberOfPages<10)
          E=numberOfPages;  

      subArr=allPagesArr.slice(S,E);
      dispatch(changePage(0));
    //   console.log("reset worked");
  }

  useEffect(() => {
      reset();
    }, [numberofcourses]);
    // 

    for(let i=0;i<numberOfPages;i++)
        allPagesArr[i]=i+1;

    if(numberOfPages<10)
        E=numberOfPages;  

    let subArr=allPagesArr.slice(S,E);

  let PageNo=(value)=>
  {
    
    setPageNo(value);
    // console.log(currentPageNo);
    dispatch(changePage(value*6-6));
  }

  let CounterE=()=>
  {
    if(currentPageNo<numberOfPages)
        {
            setPageNo(currentPageNo+1);
            dispatch(incrementPage());
        }
        if(E<numberOfPages)
            {
                setS(S+1);
                setE(E+1);
                subArr=allPagesArr.slice(S,E);
                // console.log(S,E);
            }
    }     
    let CounterS=()=>
    {
        if(currentPageNo>1)
        {
            setPageNo(currentPageNo-1);
            dispatch(decrementPage());
        }
        if(S>0)
        {
            setS(S-1);
            setE(E-1);
            subArr=allPagesArr.slice(S,E);
            // console.log(S,E);
        }
        
    }
    

  
return(
            <>
                <div className="App">
                <div className="pageContainer mb-5">
                {currentPageNo>1?<button className="pageNo" onClick={()=>{CounterS()}}><i className="fa fa-caret-left" aria-hidden="true"></i></button>:<button className=" disabled" disabled ><i className="fa fa-caret-left" aria-hidden="true"></i></button>}
                
                {subArr.map(function(number,index){
                        // {return((currentPageNo==(index+1))?<button key={index} className="disabled" onClick={()=>PageNo(number)}>{number}</button>:<button key={index} className="pageNo" onClick={()=>PageNo(number)}>{number}</button>)}
                    return(
                    <button key={index} className="pageNo" onClick={()=>PageNo(number)}>{number}</button>
                    );
                })}
                {currentPageNo<numberOfPages?<button className="pageNo" onClick={()=>{CounterE()}}><i className="fa fa-caret-right" aria-hidden="true"></i></button>:<button className="disabled" onClick={()=>{CounterE()}}><i className="fa fa-caret-right" aria-hidden="true"></i></button>}
                
                </div>
                </div>
            </>
        );

}
export default Pagignation;