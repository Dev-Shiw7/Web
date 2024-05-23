import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Todolist from './components/Todolist'

 function App() {
  const [listTodo, setlistTodo]=useState([]);
  let add=(input)=>{
    setlistTodo([...listTodo,input]);
  }
  const deleteItem=(key)=>{
    let newList=[...Todolist]
    newList.splice(key, 1)
    setlistTodo([...newList])
  }
  return (
     <div className="Mcontainter"> 
        <div className='Ccontainer'>
    <Todo add={add}/>
    <h1 className='heading'>Here's your Todo</h1>
   {listTodo.map((item, i)=>{
    return (
      <Todolist key={i} item={item} deleteItem={deleteItem} index={i}/>
    )
   })}
        
   </div>
    </div>


  )

// return(
//   <AddPlayer/>
//   )
}

export default App
