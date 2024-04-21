import React, { useEffect, useState } from 'react'

import { FaAnglesRight } from "react-icons/fa6";



import User_img from '../../Assets/images/user_img.png'

import './Doc_dashboard_menu.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { get_medicalrecord, getpatientlist, viewdoctor } from '../../services/Apiservice';

const Doc_dashboard_menu = () => {
    const navigate =useNavigate();

    const [doctor_detail,set_doctor_detail]=useState([])
   

    useEffect(()=>{

    const Dlogin =localStorage.getItem('DLOGIN')
    if(Dlogin > 0)
    {
      
    }else{
      navigate('/');
    }

    viewdoctor(Dlogin)
    .then(res=>{
        set_doctor_detail(res)
       

    })

    

   

    })

  return (
    <div className="Dashboard_Menu">
            <div className="doc_dashboard">

                <div className="left-part">
                    <div className="profile">
                        <div className="img">
                            <img src={User_img} alt="" />
                            <h1>{doctor_detail.Doctor_name}</h1>
                            <h2>{doctor_detail.Doctor_Qualification}</h2>
                        </div>
                    </div>

                    <div className="links">
                        <ul>
                         
                            <li><a href="/Doctor_Appointment" >Appointment</a> <FaAnglesRight /> </li>
                            <li ><a href="/Patient_list">Patient List</a> <FaAnglesRight /> </li>
                            <li><a href="/Medical_Records">Medical Records</a> <FaAnglesRight /> </li>
                            <li><a href="/Doctor_video">Video Consultancy</a> <FaAnglesRight /> </li>

                        </ul>
                    </div>

                </div>


            </div>
        </div>
  )
}

export default Doc_dashboard_menu