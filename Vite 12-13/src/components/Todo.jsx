import React,{useState} from "react";
//import Todo from './Todo.css'

function Todo(props){
    const [input, setInput]=useState("")
    return(
        <div className="inputcontainer">
            <input type="text" className="boxTodo"
             placeholder="Enter the task"
             value={input}
             onChange={e=>{
                setInput(e.target.value)
             }}       />
            <button  className="addbtn" onClick={()=>{
                props.add(input)
                setInput("")
            }}>+</button>
            
        </div>
    )
}

export default Todo