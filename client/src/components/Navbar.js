import React from 'react';
// link is used so that we do not need to refresh the page again and again
import {Link} from 'react-router-dom';

const NavBar=()=>{
    return(
        <nav className="navbar">
        <div className="nav-wrapper">
            <Link to="/"className="brand-logo left">Insta</Link>
            <ul id="nav-mobile"className="right">
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default NavBar;