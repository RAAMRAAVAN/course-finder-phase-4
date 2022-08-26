import React,{useState} from "react";
import BarChart from "./Graph/BarChart";
import {useSelector} from "react-redux";

function Graph() {
    
  const data=useSelector(state=>state.providergraph.data); 
  const labels=useSelector(state=>state.providergraph.labels); 

  // console.log("data=",data,"labels=",labels);
  const [userData, setUserData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Users Gained",
        data: data,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
    });

  return (
    
    <div className="Graph">
      <div style={{ width: 1200}}>
        <BarChart chartData={userData} />
      </div>
      
    </div>
  );
  
}

export default Graph;