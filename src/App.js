import React, { useState } from 'react';

import './App.css';

function App() {

  const [time, SetTime]= useState(25);
  const [brk, setBrk] = useState(0);
  const [start, SetStart] = useState(false);
  const [stop, SetStop] = useState();  

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
    
    

    <h1>{time}</h1>

    <div>
      <button>Start</button>
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
