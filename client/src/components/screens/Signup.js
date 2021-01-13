import React from 'react';
import {Link} from 'react-router-dom';
const SignUp =()=>{
 return (
     <div className="mycard">
         <div className="card auth-card input-field ">
            <h2>Insta</h2>
            <input
            type="email"
            placeholder="email"
            />
              <input
            type="text"
            placeholder="name"
            />
            <input 
            type="text"
            placeholder="password"
            />
            <button className="btn waves-effect waves-light #00796b teal darken-2">
               SignUp
            </button>
            <h5>
              <Link to="/signin">Already have an account ?</Link>
            </h5>
      </div>
     </div>
 )
}
export default SignUp;