//action types
let GM='GM'
let GN='GN'
let GE='GE'
//action
let gmAction =()=>{
    return {type:GM}
}
let gnAction=()=>{
    return {type:GN}
}
let geAction=()=>{
    return {type:GE}
}

export {gmAction,gnAction,geAction,GM,GN,GE}
//action is function, it return actionable object. 