import React from 'react'
import {useReducer} from 'react'

const initialstate=0;

const reducer=(state,action)=>{
  console.log(state,action)
  if(action.type==="INCREMENT"){
    return state+1;
  }
  if(action.type==="DECREMENT"){
    return state-1;
  }else{
    return initialstate;
  }
  return state
}

export default function UseReducer() {
const [state,dispatch]=useReducer(reducer,initialstate)

  return (
    
    <div className="App">
      <p>{state}</p>
      <button onClick={()=> dispatch ({type:"INCREMENT"})}>inc</button><br/><br/>
      <button onClick={()=> dispatch ({type:"DECREMENT"})}>dec</button>
    </div>
  );
}
