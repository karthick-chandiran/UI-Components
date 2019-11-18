import React,{useState} from 'react'
import ProgressBar from "./index";
export default function ProgressBarExample() {
    const [inputValue, setinputValue] = useState(0)
    return (
        <div>
            <input type="text" onChange={()=>setinputValue(this.value)}/>
            <ProgressBar completionValue ={inputValue} />
        </div>
    )
}
