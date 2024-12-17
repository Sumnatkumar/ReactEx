import React, { Component } from 'react'

class Registration extends Component {
constructor(props){
    super(props)
    this.state={
        uname:"",
        uemail:"",
        umobile:"",
        upassword:""
    }
}

updateHandler = (event)=>{
    this.setState({[event.target.name]:event.target.value})
}
submitHandler=(event)=>{
    // alert(JSON.stringify(this.state))
    event.preventDefault()
    console.log(this.state)
}

    render(){
        return (
            <div className='container'>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-4">
                    <h3>Registration Component</h3>

                    <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        {/* <label>User Name:</label> */}
                        <input type="text" name={"uname"} placeholder='User Name:' className='form-control' onChange={this.updateHandler}/>
                    </div>
                    <div className='form-group'>
                        {/* <label>Email Id:</label> */}
                        <input type="text" name={"uemail"} placeholder='Email Id:' className='form-control' onChange={this.updateHandler}/>
                    </div>
                    <div className='form-group'>
                        {/* <label>Mobile No:</label> */}
                        <input type="text" name={"umobile"} placeholder='Mobile No.' className='form-control' onChange={this.updateHandler}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" name={"upassword"} placeholder='Password' className='form-control' onChange={this.updateHandler}/>
                    </div>
                        <input type="submit" className='btn btn-warning' value={"Registration"}/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration