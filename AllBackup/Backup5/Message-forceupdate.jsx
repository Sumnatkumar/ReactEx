import React from 'react'
class Message extends React.Component{
    msg="Hello";

    gmHandler =() => {
        console.log("Test Case");
        this.msg = "Good Morning";
        console.log(this.msg);
        this.forceUpdate();
    }

    gnHandler = () =>{
        this.msg = "Good Night";
        console.log(this.msg);
        this.forceUpdate();
    }

    render(){
        console.log("Test render");
        return <div>
                    <h1>Message</h1>
                    <hr/>
                    <h3>Message:{this.msg}</h3>
                           <button onClick={this.gmHandler}>GM</button>
                           <button onClick={this.gnHandler}>GN</button>
               </div>
    }

}

export default Message;