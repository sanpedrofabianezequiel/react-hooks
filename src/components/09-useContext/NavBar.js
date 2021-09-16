import React from 'react'
import {Link, NavLink} from 'react-router-dom';


export const NavBar = () => {
    /*return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )*//*
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >useContext  </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active" >Home</Link>
                        <Link to="/about" className="nav-item nav-link" >About</Link>
                        <Link to="/login" className="nav-item nav-link" >Login</Link>
                </div>
            </div>
        </nav>
    );*/
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink  exact={true} activeClassName="active" to="/use" className="navbar-brand" >useContext  </NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                        <NavLink exact={true} activeClassName="active" to="/" className="nav-item nav-link " >Home</NavLink>
                        <NavLink exact={true} activeClassName="active" to="/about" className="nav-item nav-link" >About</NavLink>
                        <NavLink exact={true} activeClassName="active" to="/login" className="nav-item nav-link" >Login</NavLink>
                </div>
            </div>
        </nav>
    );

}
