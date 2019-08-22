import React, { useState,useEffect, useRef } from 'react';

import './App.css';

function App() {

  const [time, SetTime]= useState(1);
  const [second, SetSecond] = useState(60);
  //const [brk, setBrk] = useState(0);
//const [start, SetStart] = useState(false);
 // const [stop, SetStop] = useState();  

 
 function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}




 const fuck = () =>{
      if(second > 0){
        SetSecond(second - 1);
      }else if(second === 0 && time !== 0){
        SetTime(time - 1);
        SetSecond(second + 60);
      }else if(time === 0 && second === 0 ){
        SetTime(0 + '0');
        SetSecond(0 + '0');
      }
 }

 useInterval(fuck, 1000);

  const timer = () =>{
    if(time !== 0 || second !== 0){
       
      }else{

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
    
    

    <h1>{time}:{second}</h1>

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
