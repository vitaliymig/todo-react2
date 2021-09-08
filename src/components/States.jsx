
import { useState } from "react";

export default function CountBtn(props) {
    const [count, setCount] = useState(10)
    const [count2, setCount2] = useState(10)
    const [count3, setCount3] = useState(10)
    return(
        <>
        <button className ={props.className} onClick={()=> setCount(prev => prev + 1)}>click {count}</button>
        <button className ={props.className} onClick={()=> setCount2(prev => prev + 1)}>click {count2}</button>
        <button className ={props.className} onClick={()=> setCount3(prev => prev + 1)}>click {count3}</button></>
        
    )
}   