import Navbar from './Navbar'

import Book_appointment from './Book_appointment';
import Check_schedule from './Check_schedule'

import { FaAnglesRight } from "react-icons/fa6";



import User_img from '../Assets/images/user_img.png'

import './Dashboard_Menu.css'
import { useEffect, useState } from 'react';
import { viewpatient } from '../services/Apiservice';


function Dashboard_Menu() {

   const [patient_detail,setpatient_deatil]=useState([])


    useEffect(()=>{
        const LOGIN = JSON.parse(localStorage.getItem('LOGIN'));

   
       
            viewpatient(LOGIN)
             .then(res=>{ 
             setpatient_deatil(res)
             })
    
    
      },[])


    return (
        <div className="Dashboard_Menu">
            <div className="dashboard">

                <div className="left-part">
                    <div className="profile">
                        <div className="img">
                            <img src={User_img} alt="" />
                            <h1>{patient_detail.name}</h1>
                            <h2>{patient_detail.email_id}</h2>
                        </div>
                    </div>

                    <div className="links">
                        <ul>
                         
                            <li><a href="/Appointment_status" >Appointment Status</a> <FaAnglesRight /> </li>
                            <li ><a href="/Checkup_Schedule">Checkup Schedule</a> <FaAnglesRight /> </li>
                            <li><a href="/Disease_detail">Health Issue</a> <FaAnglesRight /> </li>
                            <li><a href="/History_records">History Records</a> <FaAnglesRight /> </li>
                            <li><a href="/Medication_detail">Medication details </a> <FaAnglesRight /> </li>
                            <li><a href="/Patient_video">Video Consultancy</a> <FaAnglesRight /> </li>

                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Dashboard_Menu;