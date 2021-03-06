import React,{useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App'

const Profile =()=>{
  const[mypics,setPics] = useState([]);
  const[image,setImage]= useState("");
  const[url,setUrl]= useState("");
  const {state,dispatch} = useContext(UserContext)
 useEffect(()=>{
   fetch('/myposts',{
     headers:{
       "Authorization":"Bearer "+localStorage.getItem("jwt")
     }
   }).then(res=>res.json()).then(result=>{
           console.log(result);
           setPics(result.myposts);
   });
 },[])

 useEffect(()=>{

  if(image){
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","insta-clone");
    data.append("cloud_name","dhr7wlz2k");
    fetch("	https://api.cloudinary.com/v1_1/dhr7wlz2k/image/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).then(data=>{
        setUrl(data.url);
        // console.log(data);
        localStorage.setItem("user",JSON.stringify({...state,pic:data.url}))
       dispatch({type:"UPDATEPIC",payload:data.url})
       window.location.reload();
      }).catch(err=>{
        console.log(err);
    });
  }
 },[image]);

 const updatePhoto =(file)=>{
   setImage(file)
}


 return (
     <div style={{maxWidth:"550px",margin:"0px auto"}}>
       <div style={{
                margin:"18px 0px",
                borderBottom:"1px solid grey"
             }}>
             <div style={{
                 display:"flex",
                 justifyContent:"space-around"
             }}>
                 <div>
                 <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                  src={state?state.pic:"loading"}
                 />
                
             </div>
             <div>
                 <h4>{state?state.name:"loading"}</h4>
                 <h6>{state?state.email:"loading"}</h6>
                 <div style={{display:"flex",width:"108%",justifyContent:"space-between"}}>
                     <h6>{mypics.length} posts</h6>
                     <h6>{state?state.followers.length:"0"} followers</h6>
                     <h6>{state?state.following.length:"0"} following</h6>
                 </div>
             </div>
         </div>
        
                  <div className="file-field input-field" style={{margin:"10px"}}>
                 <div className="btn waves-effect waves-light #00796b teal darken-2">
                     <span>Update Pic</span>
                     <input type="file" onChange={(e)=> updatePhoto(e.target.files[0])} />
                 </div>
                 <div className="file-path-wrapper" >
                     <input className="file-path validate" type="text" />
                 </div>
             </div>
             </div>
     <div className="gallery">
          {
            mypics.map(item=>{
              return(
                <img key={item._id} className="item" src={item.photo} alt={item.title}/>
              )
            })
          }
     </div>
            </div>
 )
}
export default Profile;