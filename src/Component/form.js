import React, { useState,useRef } from 'react';
import './Form.css'

function Form() {

    const [usersData,setUsersData]=useState([]);
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [mobNumber,setMobNumber]=useState("");
    let idRef=useRef(1);
    let updationIdRef=useRef(0);
    const [submitOrUpdate,setSubmitOrUpdate]=useState("Submit")

    const handleSubmit=(event)=>{
        event.preventDefault();
       
        if(updationIdRef.current==0){
         setUsersData([...usersData,
            {id:idRef.current++,userName:userName,email:email,pass:pass,mobNumber:mobNumber}
        ]);
    }
    else{
        const updatedData= usersData.map(item=>{
            console.log(item.id,updationIdRef.current);
           if(item.id==updationIdRef.current){
               return {id:item.id,userName:userName,email:email,pass:pass,mobNumber:mobNumber}
           }
           return item;
          });
          console.log(updatedData);
          setUsersData([...updatedData]);
          updationIdRef.current=0;
          setSubmitOrUpdate("Submit");
    }
       setEmail("");
       setUserName("");
       setPass("");
       setMobNumber("");
    }

    const handleUpdation=(id)=>{

        
        const updateForUSer=usersData.filter((item)=>item.id==id);
        console.log(updateForUSer);
        setUserName(updateForUSer[0].userName);
        setPass(updateForUSer[0].pass);
        setEmail(updateForUSer[0].email);
        setMobNumber(updateForUSer[0].mobNumber);
           updationIdRef.current=updateForUSer[0].id;
          console.log(updationIdRef.current);
          setSubmitOrUpdate("Update");

    }



    const handleDeletion=(id)=>{
          const newUsersData=usersData.filter((item)=>item.id!=id);
          setUsersData([...newUsersData]);
    }

  return (
    <div className='maindiv'>
     
      <div className="formDataDiv">
        <div className="formDiv">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter the UserName' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/><br/><br/>
            <input type="email" placeholder='Enter the Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
            <input type="password" placeholder='Enter the Password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/><br/><br/>
            <input type="mobile number" placeholder='Enter the Mobile Number' value={mobNumber} onChange={(e)=>{setMobNumber(e.target.value)}}/><br/><br/>
            <input type="submit" value={submitOrUpdate} />
            </form>
           
        
        </div>
        <div className="liveDataDiv">
           <h1>UserName: {userName}</h1>
           <h1>Eamil.id: {email}</h1>
           <h1>Password: {pass}</h1>
           <h1>Mobile Number: {mobNumber}</h1>
           
        </div>
        
      </div>
      <div className="tableDiv">
        <table>
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersData.map((item)=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.pass}</td>
                        <td>{item.mobNumber}</td>
                        <td>
                        <button onClick={()=>handleUpdation(item.id)}>Update</button>
                        <span onClick={()=>handleDeletion(item.id)}>❌</span>
                        </td>
                    </tr>
                )
                }
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;