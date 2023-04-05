import React from "react";
import {useState,useMemo} from 'react'
import "./style.css";

export default function App() {
const [value,setValue]=useState(0)
const [show,setShow]=useState(true)
// Here we used toggle functionality due to apply ternary condition ,we pass intially true value and then show as a true condition.


const getValue=()=>{
  setValue(value+1);
}

const countNumber=(num)=>{
  console.log("cliked me every time",num)
  for(let i=0;i<=100000;i++){}
  return num
}
// but after using usememo you can see that when we click clicked me button then it will not show our console and increase our react application performqnce.

const checkData =useMemo(()=>{
   return countNumber(value);
},[value])
// instead of usememo why we not use useEffect because we are not using useEffect due to in useEffect we can not return any value and we can not store those value in variable  
// we are using use memo here 

  return (
    <div>
      <button onClick={getValue}>Counter</button>
      <p>My new Number are:{checkData}</p>
     
      <button onClick={()=>setShow(!show)}>
        {show? "You Clicked me ":"Clicked me plz"} </button>
       
    </div>
  );
}
 /* if show is true then we get you (clicked me )other wise we get( clicked me plz) */

// Befor useMemo we get value but take some time when we click counter button because we use unnessary for loop and in that we pass some expansive calculation and you can also see that in console part if click on click button then it will again rerender of our whole component due to use of useState we update our state every time due to that our whole component inside app component rerender every time