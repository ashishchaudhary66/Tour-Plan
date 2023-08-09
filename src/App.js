import React,{useState} from "react";
import Tours from "./components/Tours"
import data from "./data";
const App = () => {
  const[tours,setTour]=useState(data)
  function btnHandler(id){
    const newTours=tours.filter(tour=>tour.id!==id)
    setTour(newTours)
  }
  function refreshContent()
  {
    setTour(data);
  }  
  if(tours.length===0){
    return(
      <div className="no-Content">
        <h2>No content left</h2>
        <button onClick={refreshContent}>refresh</button>
      </div>
    )
  }
  return (<div className="App">
    <Tours tours={tours} btnHandler={btnHandler}> </Tours>
  </div>);
};

export default App;
