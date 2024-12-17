import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render (){
        return <nav className="navbar navbar-dark bg-dark navbar-expand">
                    <a href="#" className="navbar-brand">Routing Ex</a>
                    <div className="ml-auto">
                        <ul className="navbar-nav">
                            <li><Link to="/Home" className="nav-link">Home</Link></li>
                            <li><Link to="/about" className="nav-link">About</Link></li>
                            <li><Link to="/services" className="nav-link">Serives</Link></li>
                            <li><Link to="/employees" className="nav-link">Employees</Link></li>
                            <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
    }
}
export default Navbar