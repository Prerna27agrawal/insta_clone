import React,{useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App'

const Profile =()=>{
  const[mypics,setPics] = useState([]);
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
 return (
     <div style={{maxWidth:"550px",margin:"0px auto"}}>
             <div style={{
                 display:"flex",
                 justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
             }}>
                 <div>
                 <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                 src="data:image/jpeg;base64,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"
                 
                 />
             </div>
             <div>
                 <h4>{state?state.name:"loading"}</h4>
                 <div style={{display:"flex",width:"108%",justifyContent:"space-between"}}>
                     <h6>40 posts</h6>
                     <h6>40 followers</h6>
                     <h6>40 following</h6>
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