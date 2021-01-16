import React,{useContext} from 'react';
// link is used so that we do not need to refresh the page again and again
import {Link} from 'react-router-dom';
import {UserContext} from '../App';
const NavBar=()=>{

    const {state,dispatch} = useContext(UserContext);
    const renderList = () =>{
        if(state){
            return[
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">CreatePost</Link></li>
            ]
        }else{
            return[
                <li><Link to="/signin">SignIn</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
              ]
        }
    }

    return(
        <nav className="navbar">
        <div className="nav-wrapper">
            <Link to={state ? "/":"/signup"} className="brand-logo left">Insta</Link>
            <ul id="nav-mobile"className="right">
                {renderList()}
            </ul>
        </div>
        </nav>
    )
}

export default NavBar;