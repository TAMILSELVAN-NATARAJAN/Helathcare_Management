import { useState } from 'react';
import Logo from '../../Assets/images/Logo.png'
import User_icon from '../../Assets/images/user_icon.png'

import './Doctor_navbar.css'

import { json, useNavigate } from "react-router-dom";


function Doctor_navbar(){

    const navigate =useNavigate();


    const [islogin ,setislogin ]=useState(false)

    const logout =()=>{
        localStorage.setItem('DLOGIN', '-1')
        navigate('/')

    }

    return(
        <div className="Doctor_navbar">

              <div className="navbar_container">
                     <div className="logo">
                        <a href="/"><img src={Logo}alt="" /> </a>
                        <a href=""><h2>HealTec-Me</h2></a>
                     </div>

                     <div className="navlinks">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="">Solution</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                     </div>
                     <div className="sub_solution">
                        <div className="lists">
                            <ul>
                                <li><a href="">emd</a></li>
                                <li><a href="">emd</a></li>
                                <li><a href="">emd</a></li>
                                <li><a href="">emd</a></li>
                            </ul>
                        </div>
                     </div>

                     

                     <div className='login_links'>
                        <a href="" onClick={logout}>Log out</a>
                        <a href="/Doctor_dashboard"><img src={User_icon} alt="" /></a>
                     </div>


                     
              </div>



        </div>
    );
}


export default Doctor_navbar;