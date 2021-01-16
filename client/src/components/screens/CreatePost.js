 import React, { useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
 
 const CreatePost=()=>{
  const history=useHistory();
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl]= useState("");

    useEffect(()=>{
        if(url){
// for creating post
        fetch("/createpost",{
            method:"post",
            headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+ localStorage.getItem("jwt")
            },
            body:JSON.stringify({
              title:title,
              body:body,
              pic:url
            })
          }).then(res=>res.json()).then(data=>{
            if(data.error){
              M.toast({html:data.error,classes:"#c62828 red darken-3"});
            }
            else{
              M.toast({html:"created post successfully",classes:"#2e7d32 green darken-3"})
              history.push('/');
            }
          }).catch(err=>{
            console.log(err);
          })
        }
    },[url]);
// for saving image to cloudinary
    const postDetails = ()=>{
        console.log("hi");
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","insta-clone");
        data.append("cloud_name","dhr7wlz2k");
        fetch("	https://api.cloudinary.com/v1_1/dhr7wlz2k/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).then(data=>{
            setUrl(data.url);
        }).catch(err=>{
            console.log(err);
        });
        

    }



     return (
         <div className="card input-field"
          style={{
              margin:"100px auto",
              maxWidth:"500px",
              padding:"20px",
              textAlign:"center"
          }}
         >
             <input 
                type="text"
                placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />

             <input 
                type="text" 
                placeholder="body" 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
             />
             <div className="file-field input-field">
                 <div className="btn waves-effect waves-light #00796b teal darken-2">
                     <span>Upload Image</span>
                     <input type="file" onChange={(e)=> setImage(e.target.files[0])} />
                 </div>
                 <div className="file-path-wrapper" >
                     <input className="file-path validate" type="text" />
                 </div>
             </div>
             <button className="btn waves-effect waves-light #00796b teal darken-2"
                onClick={()=>postDetails()}
              >
               Submit Post
            </button>
         </div>
     )
 }

 export default CreatePost;