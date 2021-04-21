import React, { useState } from "react"
import "./to-do.css"

const Todo = () =>{


    let[value,setvalue] = useState("");
     const function2 = (event) => {
        
        setvalue(event.target.value);
    }

    const function1 = () =>{

        let input = document.getElementById("input");
        const list = document.createElement("li");
        list.innerHTML = value;
        const node = document.getElementById("list1");
        node.appendChild(list);
        input.value="";
        
    }

return(
<>
<div className="todo-container">
<h1 className="heading1"> TO-DO-LIST</h1>
<input id="input" type="text" className="inpt" placeholder="Create a task" onChange={function2}></input>
<button className="btn" onClick={function1}>➕</button>
<ul id="list1">
    
</ul>
</div>


</>


);

}  


export default Todo