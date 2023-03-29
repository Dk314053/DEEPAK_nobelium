import  React from 'react';

import {useState} from 'react'
let randNum=Math.floor(Math.random()*20)+1;
export default function App() {
const[value,setValue]=useState("")
const[random,setRandom]=useState(randNum)
const[count,setCount]=useState(0)
const[greet,setGreet]=useState("’congratulations you guessed the right number ")
const handleChange=(e)=>{
setValue(e.target.value);
}
const handleClick=()=>{
  if(Number(value) == Number(random)){
setGreet("Congratulation")
 } else if(Number(value) > Number(random)){
   alert(" guessed a bigger number")
   
 }else if(Number(value) < Number(random)){
  alert ("guessed a smaller number")
 }
  setCount(count+1);
}

  return (
    <div>
      <h1>Guess Number</h1>
      <p>Message:{greet}</p>
      <p>Total Round Play by User:{count}</p>
     <input value={value} type="text" onChange={handleChange}/><br/><br/>
<button onClick={handleClick}>Match Number</button>
    </div>
  );
}
