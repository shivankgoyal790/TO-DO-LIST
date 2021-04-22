import React, { useState } from "react"
import "./to-do.css"

const Todo = () =>{


    const[value,setvalue] = useState("");
    const[items,setitems] = useState([]);    
   
   
    const function2 = (event) => {
            setvalue(event.target.value);         
    }
    const function1 = () =>{

        setitems((prevValue) =>{

            return [...prevValue,value];
        } ) 
        setvalue("");    
    }

    const function3 = () =>{


    }
    return(
    <>
        <div className="todo-container">
        <h1 className="heading1"> TO-DO-LIST</h1>
        <input id="input" type="text" className="inpt" placeholder="Create a task" onChange={function2} value={value}></input>
        <button className="btn" onClick={function1}>➕</button>
        <ul id="list1">
            {items.map( (itemvalue , index) => {
                return <li key={index}>{itemvalue} <button onclick={function3} className="btn2">⚔️</button>  </li>
            })}
        </ul>
        </div>
    </>
    );

}  


export default Todo