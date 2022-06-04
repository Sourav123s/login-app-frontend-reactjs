import React, { useEffect, useState }  from "react";
import {useNavigate} from 'react-router-dom'


function Dashbord(){
const navigate=useNavigate();
const [firstName,setFirstName]=useState();
const [lastName,setLastName]=useState();
const[email,setEmail]=useState();

function Logout(e){
    e.preventDefault();
    localStorage.clear();
    navigate('/')


}


    useEffect(()=>{

    let user = JSON.parse(localStorage.getItem('authUser'));
     setFirstName(user.firstName);
     setLastName(user.lastName);
     setEmail(user.email)

    },[])


    return(
        <>
        <div>
          <h1>Dashbord </h1>
            <h1>User Name</h1>
            <h3>{firstName} {lastName}</h3>
            <div>
                <h1>
                    User Email
                </h1>
                <h3>
                    {email}
                </h3>
            </div>
                <button onClick={Logout}>Logout</button>
        </div>
        </>
    )
}
export default Dashbord;