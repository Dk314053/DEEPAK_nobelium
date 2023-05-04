import React from "react";
import  './App.css'
import axios from "axios"
import {useState,useEffect} from "react"

export default function App() {
  const [post,setPost]=useState([])
  const[error,setError]=useState("")
  const axiosdata=()=>{
    axios.get("https://jsonplaceholder.typicode.com/usrs")
    .then((response)=>setPost(response.data))
    .catch((errors)=>setError(errors.message))
  }
  useEffect(()=>{
axiosdata()
  },[])
  console.log(post)
  return (
 
    <div className="new">
      <h1>{error}</h1>
       {/* //showing error */}
      {
        post.map((item)=>{
          return(
            <div >
              <p>{item.id}</p>
              <p>{item.name}</p>
              
              
               </div>
          )
        })
      }
    
    </div>
  );
}
