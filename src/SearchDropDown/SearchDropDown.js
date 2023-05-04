import React from 'react'
import { useState } from 'react'
import MOCK_DATA from './MOCK_DATA .json'

function SearchDropDown() {
const [update,setUpdate]=useState("")
let data=[]
data=MOCK_DATA
  return (
    <div>
        <h1>Searchable Dropdown</h1>
        <div>
<input type='text' value={update} onChange={(e)=>setUpdate(e.target.value)} />
<button onClick={()=>handleClick(update)}>Search</button>
</div>
<div>
{
   data.map((ele)=>(
   <div > {ele.CompanyName} </div>)
   )
}


</div>
    </div>
  )
}

export default SearchDropDown