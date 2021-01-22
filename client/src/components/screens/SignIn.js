import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import M from 'materialize-css';




const SignIn =()=>{
  const {state,dispatch} = useContext(UserContext);
  const history=useHistory();
  const[password,setPassword]= useState("");
  const[email,setEmail]= useState("");

  // for sending the post request to the server host
   const PostData=()=>{
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return  M.toast({html:"Please fill valid email",classes:"#c62828 red darken-3"});
    }
    fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        password:password,
        email:email
      })
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      if(data.error){
        M.toast({html:data.error,classes:"#c62828 red darken-3"});
      }
      else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user));
        dispatch({type:"USER",payload:data.user});
        M.toast({html:data.message,classes:"#2e7d32 green darken-3"})
        history.push('/');
      }
    }).catch(err=>{
      console.log(err);
    })
   }


 return (
     <div className="mycard">
         <div className="card auth-card input-field ">
            <h2>Insta</h2>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={()=>PostData()} className="btn waves-effect waves-light #00796b teal darken-2">
               Login
            </button>
            <h5>
              <Link to="/signup">Don't have an account ?</Link>
            </h5>
      </div>
     </div>
 )
}
export default SignIn;