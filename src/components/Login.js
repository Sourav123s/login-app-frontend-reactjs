import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from './apiCall'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const[userName,setUserName]=useState()
    const[password,setPassword]=useState()
    //  const Route=useHistory()
    const navigatee=useNavigate()

    async function handelSubmit(e){
        e.preventDefault();
        api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          api.post('/login',{
              password:password,
              email:userName
          }).then(res=>{
              if (res.data.success){
                  toast(res.data.message)
                  localStorage.setItem("authUser", JSON.stringify(res.data.details.user))
                  localStorage.setItem("token", JSON.stringify(res.data.details.token))
                  navigatee('/dashbord')
              }else{
                  toast.error(res.data.message)
              }
          })
   
    }
    return (
        <>
        <div>
                <h1>Login Page</h1>
       
           <form onSubmit={handelSubmit}>
               <label>User Name </label>
               <br></br>
               <input
               type='Email'
                placeholder='Enter user Name'
                    onChange={e => setUserName(e.target.value)}
               />
               <br></br>
               <br></br>
               {/* <hr></hr> */}
                <label>password </label>
                <br></br>
               <input
               type='password'
                placeholder='Enter password'
                onChange={e=>setPassword(e.target.value)}
               />
                <br></br>
                <br></br>
                <button type="submit">Login</button>
           </form>

           <div>
               <h4>
                   if You dont have a account in here please click the link below 
                   <a href="/register">Click Here</a>
               </h4>
           </div>
<ToastContainer/>
            </div>
        </>
    )
}


export default Login