import React, { useState } from 'react';

import './App.css';

function App() {

  const [time, SetTime]= useState(25);
  const [second, SetSecond] = useState(60);
  //const [brk, setBrk] = useState(0);
//const [start, SetStart] = useState(false);
 // const [stop, SetStop] = useState();  

 
//useEffect(() => {
  
  
//}, [])




 const fuck = () =>{
      SetSecond(second - 1);
      if(second === 0){
        SetTime(time - 1);
        SetSecond(second + 60);
      }
 }
  const timer = () =>{
        if(time !== 0){
        var  interval = setInterval(fuck(), 1000);
        }else{
          clearInterval(interval);
        }
  }

  const inctme = () =>{
          if(time >= 25){
            SetTime(time + 1)
          }
    }

    const rdctme =()=>{
      if (time > 25){
        SetTime(time - 1)
      }
    }
  return (
    <div>
    
    

    <h1>{time}: {second}</h1>

    <div>
      <button onClick={timer}>Start</button>
      <button>Stop</button>
    </div>

      <div>
    <button onClick={inctme}>+</button>
    <h1>25</h1>
    <button onClick={rdctme}>-</button>
      </div>

    </div>
  );
}

export default App;
