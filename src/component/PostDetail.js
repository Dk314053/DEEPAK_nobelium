import React from 'react'
import { useContext } from 'react'
import { useData } from '../App';
import './PostDetail.css'

const PostDetail = () => {
const data=useContext(useData)
const list=data.ele;

  return (
   <div >
        
    <table>
        <thead>
        <th1>Post Detail</th1>
            <tr>
              
            <th>User Id</th>
            <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{list.userId}</td>
            <td>{list.body}</td>
            </tr>
        </tbody>
    </table>
    </div>
 
  )
}

export default PostDetail