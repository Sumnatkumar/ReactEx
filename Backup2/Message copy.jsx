import React from 'react'

class Message extends React.Component{


    eid = 101;
    ename = "Rahul"
    loc = ["Patna","Bihar","Bengaluru"];
    details = {
        sal : 45000,
        avail : false
    }

    render(){
        return <div>
                    <h2>Message Component!</h2>
                    <h3>Employee Id:{this.eid}</h3>
                    <h3>Employee Name:{this.ename}</h3>
                    <h3>Employee Loc:{this.loc}</h3>
                    <h3>Employee Details:{JSON.stringify(this.eid)}</h3>
               </div>
    }
}
export default Message