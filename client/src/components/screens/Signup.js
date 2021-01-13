import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const SignUp =()=>{
  const history=useHistory();
  const[name,setName]= useState("");
  const[password,setPassword]= useState("");
  const[email,setEmail]= useState("");

  // for sending the post request to the server host
   const PostData=()=>{
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return  M.toast({html:"Please fill valid email",classes:"#c62828 red darken-3"});
    }
//  for sending data from 5000 host that is the serve side to localhost 3000 on which react is running
// we can either use CORS from npm lib or
  // we can add "proxy":"http://localhost:5000", in package.json file
  // and now we can send the relative path and it will automatically send it to server side with different ports  
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        password:password,
        email:email
      })
    }).then(res=>res.json()).then(data=>{
      if(data.error){
        M.toast({html:data.error,classes:"#c62828 red darken-3"});
      }
      else{
        M.toast({html:data.message,classes:"#2e7d32 green darken-3"})
        history.push('/signin');
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
            type="email"
            placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
              <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={()=> PostData()} className="btn waves-effect waves-light #00796b teal darken-2">
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