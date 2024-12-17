import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gmAction,geAction, gnAction } from '../../redux/message/message.action';

const Message = () => {
    let dispatch = useDispatch(); // Directly get the dispatch function
    let message=useSelector((state)=>{
        return state.message;
    })
    const gmHandler = () => {
        dispatch(gmAction()); // Dispatch the GM action
    };

    const gnHandler = () => {
        dispatch(gnAction()); // Dispatch the GN action
    };

    return (
        <div>
            <h1>Message Component</h1>
            <pre>{JSON.stringify(message)}</pre>
            <h4>Value: {message.msg}</h4>
            <button onClick={gmHandler}>GM</button>
            <button onClick={()=>{
                dispatch(geAction())
            }}>GE</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    );
};

export default Message;
