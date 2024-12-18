import React,{useState} from 'react'

let Message = () =>{
    let [msg,setMsg]=useState("Hello...");

    let gmHandler = () => {
        setMsg("Good Morning!");
    }
    let gnHandler = () => {
        setMsg("Good Night!");
    }
    return <div>
                <h2>Message - Functional Component!</h2>
                <h2>Message Value:{msg}</h2>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gnHandler}>GN</button>
           </div>
}

export default Message;