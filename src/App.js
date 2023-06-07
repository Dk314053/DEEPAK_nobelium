import React from 'react';
import './App.css'
import { useState } from 'react';

function App() {
const [update,setUpdate]=useState("")
const [data,setData]=useState([1,2,3,4,5,6,7,8,9,10])

const handleChange=(e)=>{
setUpdate(e.target.value)
}

  return (
    <div className="app">

      <h1 className='head'>Print Table</h1>
     <input className='input' type='text' placeholder='type any number' value={update} onChange={handleChange} />
     <ul>
     {
   update?(data.map((ele,index)=>{
     return(
     <li style={{listStyleType:"none",marginRight:"1.8rem",fontSize:"1.5rem"}} key={index}>{ele*update}</li>
     )})):" "
     }
     </ul>
    </div>
  );
}

export default App;
