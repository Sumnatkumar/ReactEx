// import React from 'react'

// class Message extends React.Component{

//     render(){
//         return <div>
//                     <h2>Message Component!</h2>
//                </div>
//     }
// }
// export default Message
function Message(){
    let eid = 101;
    let ename = "Rahul Kumar";
    let loc = ["Senari", "Arwal"];
    let details = {
        sal : 45000,
        avail : true
    }

    return <div>
                <h2>Message Component!</h2>
                <h3>Employee Id:{eid}</h3>
                <h3>Employee Name:{ename}</h3>
                <h3>Location :{loc[0]}</h3>
                <h3>Details:{JSON.stringify(details)}</h3>
           </div>
}