import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 

  function App(){
    const [counter1, setCounter1]=useState(0);
    const [counter2, setCounter2]=useState(0);
    const myCounter1 = () => {
      if (counter1  < 9) { 
        setCounter1(counter1 + 1);
      }
    };
    const myCounter12 = () => {
      if (counter1 < 10) { 
        setCounter1(counter1  - 1);
      }
    };

    const myCounter2=() => {
      if (counter2 < 10) { 
        setCounter2(counter2 + 1);
      }
    };

    const myCounter112=() => {
      if (counter2 < 10) { 
        setCounter2(counter2 - 1);
      }
    };
    
    let count;
    return(<>


    <div style={{display:"center"}}>
      <h1 style={{display:"center"}}>Counter 1</h1>
      <button onClick={myCounter1                 //mistake was that I used arrow function in onClick. It wasn't necessary
}>+</button>
      <p>{counter1}</p>
      <button onClick={()=>{myCounter12()

      }}>-</button>

      <h1 style={{display:"center"}} >Counter 2</h1>
      <button onClick={()=>{myCounter2}}>+</button>
      <p>{counter2}</p>
      <button onClick={()=>{myCounter112}}>-</button>


     </div> 
   </> )
  }
  export default App
  
  
  

 







  