import { useEffect, useState } from 'react';
import { getpatientlist } from '../services/Apiservice';
import Navbar from './Navbar' 
import './Navbar.css'
import './patient_login.css'

import { json, useNavigate } from "react-router-dom";


function Patient_login() {

    const [Patientlist,setPatientlist]=useState([]);
    const [errormsg,seterrormsg] =useState('')

    const navigate =useNavigate();
    
  
    useEffect(()=>{
        getpatientlist()
        .then(res=>{ 
            setPatientlist(res)
        })
    },[])






   const patientlogin=(e)=>{
   e.preventDefault();

    Patientlist.filter(patient=>{
  
        return e.target.mobile_no.value === patient.mobile_no ?
        e.target.password.value.includes(patient.password) :null; //localStorage.setItem('LOGIN', patient.id) :localStorage.setItem('LOGIN', '0')  :localStorage.setItem('LOGIN', '-1') ; 
             

    }).map(patient=>{

        if(e.target.mobile_no.value === patient.mobile_no  )
        {
            
        if(e.target.password.value === patient.password)
        {
            localStorage.setItem('LOGIN', patient.id)
        }else{
            localStorage.setItem('LOGIN', '0')
          

        }
        }else{
            localStorage.setItem('LOGIN', '-1')

        }






    })






    const LOGIN =JSON.parse(localStorage.getItem('LOGIN'));

    if(LOGIN == '0'){
        seterrormsg("Password Error")
        
    }else if(LOGIN == '-1'){

        seterrormsg("User Doesn't Register") 
    }else if(LOGIN >0)
    {
        navigate('/patient_dashboard')
    }


   } 
    return (
        <div className="patient_login">
          <Navbar/>
            <div className="login_container">
                <div className="content-side">
                    <h5>Patient Login</h5>
                    <ul>
                        <li> Book Video Consultation </li>
                        <li> Book Doctor Appointment</li>
                        <li> View Medical Records </li>
                        <li> Add Family Members</li>
                        <li> And much more...</li>
                    </ul>
                </div>
                <div className="form_side">
                    <h4>Login in</h4>
                    <form  onSubmit={patientlogin}  >
                        <div className="input-groups">
                            <div className="number input">
                    
                                <input type="text" name="mobile_no" id=""  placeholder="Mobile Number"/>
                            </div>
                            <div className="password input">
                              
                                <input type="number"  name='password' placeholder="Password"   />
                                    
                            </div>
                            <div className="error-msg">
                                <p>{errormsg}</p>
                            </div>

                        </div>
                        <input type="submit" value="Login"/>
                    </form>
                    <div className="forget-details">
                        <p>Forget <a href="./Forget_pwd">Password</a></p>
                        <p>Don't have account? <a href="/sign_up">Sign up</a></p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Patient_login;