import React, { Component } from 'react';
import Axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Method - 1");
    this.state = {
      users: [],  // Initialize state to store users data
    };
  }

  // Fetch users data
  getUserData = () => {
    console.log("Test Case 123");
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        console.log(resp.data);
        this.setState({ users: resp.data }); // Update state with fetched data
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  };

  // Lifecycle method, called once after component mounts
  componentDidMount() {
    console.log("Life Cycle Method - 3");
  }

  // Lifecycle method, called after component updates
  componentDidUpdate(prevProps, prevState) {
    console.log("Life Cycle Method - 3");
    // Example: You can compare previous state to current state here
    if (prevState.users !== this.state.users) {
      console.log("Users data updated");
    }
  }

  // Cleanup logic when the component unmounts
  componentWillUnmount() {
    console.log("Unmounting user component");
    // You could cancel any ongoing Axios requests here if needed
  }

  render() {
    console.log("Render method execute....2");
    return (
      <div>
        <h1>Users Data</h1>
        <button onClick={this.getUserData}>Get Users Data</button>

        {/* Display fetched user data */}
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
