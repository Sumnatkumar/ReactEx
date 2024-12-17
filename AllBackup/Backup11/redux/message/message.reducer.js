import {GM,GN} from './message.action'
let initialState={
    msg:"Hello..."
}
let messageReducer = (state=initialState,action)=>{
    //based on action we are updating/create new state
    switch(action.type){
        case 'GM':
            return {msg:"Good Morning"}
        case 'GN':
            return {msg:"Good Night"}
        default:
            return state;
    }
}

export default messageReducer