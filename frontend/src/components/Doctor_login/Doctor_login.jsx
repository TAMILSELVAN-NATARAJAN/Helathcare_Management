import React, { useEffect, useState } from 'react'

import './Doctor_login.css'
import { getdoctorlist } from '../../services/Apiservice';

import { json, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';


const Doctor_login = () => {
    const navigate =useNavigate();


    const [Doctorlist,setDoctorlist]=useState([]);

    const [errormsg,seterrormsg] =useState('')


    useEffect(()=>{
        getdoctorlist()
        .then(res=>{
                 setDoctorlist(res)
                
        })


    },[])

    const Doctorlogin=(e)=>{

        e.preventDefault();
     
         Doctorlist.filter(doctor =>{
                
             return e.target.mobile_no.value === doctor.Doctor_mobile_no ?
              e.target.password.value.includes(doctor.Doctor_password) :null;//? localStorage.setItem('DLOGIN', doctor.id) :localStorage.setItem('DLOGIN', '0'):localStorage.setItem('DLOGIN', '-1') ; 

         
         }).map(doctor =>{
            console.log(doctor);

            if(e.target.mobile_no.value == doctor.Doctor_mobile_no )
            {
                
            if(e.target.password.value == doctor.Doctor_password)
            {
                localStorage.setItem('DLOGIN', doctor.id)
            }else{
                localStorage.setItem('DLOGIN', '0')
              

            }
            }else{
                localStorage.setItem('DLOGIN', '-1')

            }
                   
         })



         const DLOGIN =JSON.parse(localStorage.getItem('DLOGIN'));

         if(DLOGIN == '0'){

             seterrormsg("Password Error")
             
         }else if(DLOGIN == '-1'){
     
             seterrormsg("User Doesn't Register") 

         }else if(DLOGIN >0)
         {
             navigate('/Doctor_dashboard')
         }

        } 




    return (
        <div className='Doctor_login'>
            <Navbar/>
            <div className="login_container">
                <div className="content-side">
                    <h5>Doctor Login</h5>
                    <ul>
                        <li>Helping patients regain health </li>
                        <li> Making a positive impact on lives</li>
                        <li> Lifelong learning and intellectual stimulation </li>
                        <li> Fulfillment in serving humanitys</li>
                        <li> And much more...</li>
                    </ul>
                </div>
                <div className="form_side">
                    <h4>Login in</h4>
                    <form  method='post'  onSubmit={Doctorlogin}>
                        <div className="input-groups">
                            <div className="number input">

                                <input type="text" name="mobile_no" id="" placeholder="Mobile Number" />
                            </div>
                            <div className="password input">

                                <input type="text" name='password' placeholder="Password" />

                            </div>
                            <div className="error-msg">
                                <p>{errormsg}</p>
                            </div>

                        </div>
                        <input type="submit" value="Login" />
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Doctor_login