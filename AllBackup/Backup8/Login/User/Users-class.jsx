import React,{Component} from "react";
import Axios from 'axios';
class Users extends Component{
    constructor(props){
        super(props)
        console.log("First construct method")
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        console.log("third - componentDidmount")
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
        })
        .catch()
    }

    render() {
       console.log("second -render")
       return <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">

                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email Id:</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length >0 ? <>
                            {
                                users.map((users)=>{
                                    return <tr key={user.id}>
                                                <td>{users.id}</td>
                                                <td>{users.name}</td>
                                                <td>{users.email}</td>
                                                <td>{users.address.city}</td>
                                           </tr>
                                })
                            }
                            </>:<></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
       </div>
    }
}