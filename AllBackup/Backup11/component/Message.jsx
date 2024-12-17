import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { gmAction,gnAction } from '../redux/message/message.action'
const Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state)=>{
                    return state;
                  })

    let gmHandler = () =>{
        //dispatch an redux action
        dispatch(gmAction()) 
    }

  return (
    <div>
        <h1>Message Component</h1>
        <pre>{JSON.stringify(message)}</pre>
        <h2>Value:{message.msg}</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={()=>{
            dispatch(gnAction())
        }}>GN</button>
    </div>
  )
}

export default Message