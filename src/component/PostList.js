import React from 'react'
import {useContext} from 'react'
import { useData } from '../App';
import './PostList.css'

const PostList = () => {

    const{state,setEle}=useContext(useData);
console.log(state)
const handlelist=(ele)=>{
    setEle(ele)
}

  return (
    <div className='new'>
    <h1 className='head1'>Post List</h1>
   <ul className='unorder'>
    {
        state.map((ele)=>{
            return (<li  className='list' onClick={()=>handlelist(ele)}>
                {ele.title}</li>)
        })
    }
   </ul>
   </div>
  )
}

export default PostList;