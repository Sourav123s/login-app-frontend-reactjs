
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from './apiCall'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register(){
    const[firstName,setFirstName]=useState();
    const [lastName,seLastName]=useState();
    const[email,setEmail]=useState();
    const [password,setPassword]=useState();

    const navigate=useNavigate();

 function handelSubmit(e){
     e.preventDefault();
    try {
        // api.defaults.headers.common['Authorization'] = 'bearer sourab';

        api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
       
        api.post('/add-user',
        {
            email: email,
            firstName:firstName,
            lastName:lastName,
            password:password

        }).then(res=>{
            if (res.data.success){
                toast(res.data.message);

                setTimeout(()=>{
                    navigate('/')
                },2000)
                
            }else{
               
                toast.error(res.data.message)
            }
        })


    } catch (error) {
        console.log(error);
    }
}

    return (
        <>
        <div>
            <h1>Register Page </h1>
            <form onSubmit={handelSubmit} >
                <label>User First Name </label>
                <br></br>
                <input
                    type='text'
                    placeholder='Enter user Name'
                    onChange={e => setFirstName(e.target.value)}
                />
                <br></br>
                <br></br>
                <label>User Last Name </label>
                <br></br>
                <input
                    type='text'
                    placeholder='Enter user Name'
                onChange={e => seLastName(e.target.value)}
                />
                <br></br>
                <br></br>
                <label>User Email </label>
                <br></br>
                <input
                    type='text'
                    placeholder='Enter user Name'
                onChange={e => setEmail(e.target.value)}
                />
                <br></br>
                <br></br>
                {/* <hr></hr> */}
                <label>password </label>
                <br></br>
                <input
                    type='password'
                    placeholder='Enter password'
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <br></br>
                <button type="submit">Register</button>
            </form>
            <ToastContainer/>
            </div>

        </>
    )
}

export default Register