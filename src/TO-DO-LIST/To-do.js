import React, { useState } from "react"
import "./to-do.css"
import List from "./List.js"
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

    const deletelist = (id) =>{

        setitems((olditems) => {
            return olditems.filter((arrelememt ,index) => {
                return index !== id;
            })
        })

    }


    return(
    <>
        <div className="todo-container">
        <h1 className="heading1"> TO-DO-LIST</h1>
        <input id="input" type="text" className="inpt" placeholder="Create a task" onChange={function2} value={value}></input>
        <button className="btn" onClick={function1}>➕</button>
        <ul id="list1">
            {items.map( (itemvalue , index) => {
                return <List  key={index} id={index} text={itemvalue} onSelect={deletelist}/>
            })}
        </ul>
        </div>
    </>
    );

}  


export default Todo