import React,{useState,useEffect} from 'react';

 const Home=()=>{
     const [data,setData] = useState([]);
     useEffect(()=>{
         fetch('/allpost',{
             headers:{
                 "Authorization":"Bearer"+localStorage.getItem("jwt")
             }
         }).then(res=>res.json()).then(result =>{
             console.log(data);
             setData(result);
         })
     },[])
 return (
     <div className="home">
         <div className="card home-card">
             <h5>Prerna</h5>
             <div className="card-image">
                 <img src="https://images.unsplash.com/photo-1606830836043-d1045a1da55e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZCUyMHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                 />
             </div>
             <div className="card-content">
             <i className="material-icons" style={{color:"red"}}>favorite</i>

                 <h6>Title</h6>
                 <p>jgsdhkblbhhgytgfcgyuhbj dggggggggg ddddddddd</p>
                 <input type="text" placeholder="add a comment" />

             </div>
         </div>
         <div className="card home-card">
             <h5>Prerna</h5>
             <div className="card-image">
                 <img src="https://images.unsplash.com/photo-1606830836043-d1045a1da55e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZCUyMHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                 />
             </div>
             <div className="card-content">
             <i className="material-icons" style={{color:"red"}}>favorite</i>

                 <h6>Title</h6>
                 <p>jgsdhkblbhhgytgfcgyuhbj dggggggggg ddddddddd</p>
                 <input type="text" placeholder="add a comment" />

             </div>
         </div>    
         <div className="card home-card">
             <h5>Prerna</h5>
             <div className="card-image">
                 <img src="https://images.unsplash.com/photo-1606830836043-d1045a1da55e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZCUyMHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                 />
             </div>
             <div className="card-content">
             <i className="material-icons" style={{color:"red"}}>favorite</i>
                 <h6>Title</h6>
                 <p>jgsdhkblbhhgytgfcgyuhbj dggggggggg ddddddddd</p>
                 <input type="text" placeholder="add a comment" />

             </div>
         </div>  
         <div className="card home-card">
             <h5>Prerna</h5>
             <div className="card-image">
                 <img src="https://images.unsplash.com/photo-1606830836043-d1045a1da55e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZCUyMHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                 />
             </div>
             <div className="card-content">
                 <i className="material-icons" style={{color:"red"}}>favorite</i>
                 <h6>Title</h6>
                 <p>jgsdhkblbhhgytgfcgyuhbj dggggggggg ddddddddd</p>
                 <input type="text" placeholder="add a comment" />

             </div>
         </div>
     </div>
 )
 }
 export default Home;