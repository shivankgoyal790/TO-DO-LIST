import React from "react"


const List = (props) =>{
return(
<>

<li className ="hi" keys={props.key}> {props.text} </li><button id={props.id} onClick={ () => {props.onSelect(props.id)} } className="btn2">⚔️</button> 
<br></br>
</> 
);

}

export default List