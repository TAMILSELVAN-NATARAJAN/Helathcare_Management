import { useEffect, useState } from 'react';
import Logo from '../Assets/images/Logo.png'
import User_icon from '../Assets/images/user_icon.png'

import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();
  
    const [islogin ,setislogin ]=useState(true)

    
    useEffect(()=>{
        const LOGIN = JSON.parse(localStorage.getItem('LOGIN'));
         
        if(LOGIN>0){
            setislogin(false)
        }

        
    
      })

    return(
        <div className="Navbar">

              <div className="navbar_container">
                     <div className="logo">
                        <a href="/"><img src={Logo}alt="" /> </a>
                        <a href="/"><h2>HT-M</h2></a>
                        
                     </div>

                     <div className="navlinks">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#health">Health</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                     </div>
                     {/* <div className="sub_solution">
                        <div className="lists">
                            <ul>
                                <li><a href="">emd</a></li>
                                <li><a href="">emd</a></li>
                                <li><a href="">emd</a></li>
                                <li><a href="">emd</a></li>
                            </ul>
                        </div>
                     </div> */}

                     <div className={islogin?'login_links none':'login_links hidden'}>
                        <a href="" onClick={()=>{navigate('/patient_login')}}>Schedule an Appointment</a>
                        <a href="/patient_login">Patient login</a>
                        <a href="/Doctor_login">Doctor Login</a>
                     </div>

                     <div className={islogin?'login_links hidden':'login_links profile '}>
                        <a href="/Book_appointment">Book Appointment</a>
                        <a href="/Patient_dashboard"><img src={User_icon} alt="" /></a>
                     </div>


                     
              </div>



        </div>
    );
}


export default Navbar;