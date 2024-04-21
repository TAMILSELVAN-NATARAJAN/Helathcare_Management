import React, { useEffect, useState } from 'react'

import Doctor_navbar from './Doctor_navbar'
import Doc_dashboard_menu from './Doc_dashboard_menu'

import { FaUserGroup } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import { HiRefresh } from "react-icons/hi";

import User_icon from '../../Assets/images/user_icon.png'
import { Delete_appointment, agree_appointment, get_appointment, get_medicalrecord, getpatientlist, viewdoctor } from '../../services/Apiservice';


import './Doctor_dashboard.css'
import { useNavigate } from 'react-router-dom';

const Doctor_dashboard = () => {
    

    const navigate = useNavigate();
    const [patient_list, set_patientlist] = useState([])
    const [medical_record, set_medical_record] = useState([])
    const [doctor_list, set_doctor_list] = useState([])


    // const [appointment_count, set_appointment_count] = useState([])
    const [appointment_list, set_appointment_list] = useState([])


    useEffect(() => {
        const Dlogin = localStorage.getItem('DLOGIN')
        if (Dlogin > 0) {

        } else {
            navigate('/');
        }

        get_appointment()
            .then(res => {
                set_appointment_list(res)
            })


        getpatientlist()
            .then(res => {
                set_patientlist(res)

            })

        get_medicalrecord()
            .then(res => {
                set_medical_record(res)
            })


        viewdoctor(Dlogin)
            .then(res => {
                set_doctor_list(res)

            })

           
    }, [])

    // appointment_list.filter((appointment => {
    //     return appointment.doctor_name == doctor_list.Doctor_name ?
    //     set_appointment_count(appointment)  : null;

    // }))
    

    const delete_appointment=(e,id)=>{
        let pass =prompt("Enter password.....");
        if (pass == 'HTM@121')
        {   
            Delete_appointment(id) 
            .then(res=>{
            if(res)
            {
                set_appointment_list(res)
            }
            alert("Deleted Sucessfully..")
            navigate('/Doctor_dashboard') 
            
        })
        }else{
            alert("Password error");
        }
    }

    const confirm_appointment=(e,id,patient)=>{
      
        agree_appointment(id,patient)
        .then(res=>{
            if(res.status == 200)
            {
                alert('Agree..');
                e.preventDefault();
            }
          
        })

    }


    return (




        <div className='Doctor_dashboard'>
            <Doctor_navbar />
            <div className="container">
                <div className="left-part">
                    <Doc_dashboard_menu />

                </div>

                <div className="right-part">
                    <div className="dashboard">

                        <div className="boxes">

                            <div className="box1 box" onClick={() => { navigate('/Patient_list') }}>

                                <div className="icon">
                                    <p><FaUserGroup /></p>
                                </div>
                                <div className="content">
                                    <h3>Patients</h3>
                                    <h1>{patient_list.length}</h1>
                                </div>
                            </div>
                            <div className="box2 box" onClick={() => { navigate('/Doctor_Appointment') }}>

                                <div className="icon">
                                    <p><FaEnvelopeOpenText /></p>
                                </div>
                                <div className="content">
                                    <h3>Appointments</h3>
                                    <h1>9</h1>
                                </div>
                            </div>
                            <div className="box3 box" onClick={() => { navigate('/Medical_records') }}>

                                <div className="icon">
                                    <p><FaRegHeart /></p>
                                </div>
                                <div className="content">
                                    <h3>Treatments</h3>
                                    <h1>{medical_record.length}</h1>
                                </div>
                            </div>

                        </div>

                        <div className="Appointments">

                            <div className="today-appointment">
                                <div className="title">
                                    <h2>Today Appoinment</h2>
                                    <p><a href="/Doctor_Appointment">See all</a></p>
                                </div>

                                <div className="appointment-list">
                                    <ul>

                                        {appointment_list.filter((appointment => {
                                            return appointment.doctor_name == doctor_list.Doctor_name ?
                                                appointment : null;

                                        })).map(patient => {
                                            
                                            

                                            return <li className='list'>
                                                <div className="img">
                                                    <img src={User_icon} alt="" />
                                                </div>

                                                <div className="content">
                                                    <h2>{patient.patient_name}</h2>
                                                    <p>{patient.Symtoms}</p>
                                                </div>

                                                <div className="time">
                                                    <h1>{patient.time}</h1>
                                                </div>



                                            </li>
                                        })}







                                    </ul>
                                </div>
                            </div>


                            <div className="appointment-request">
                                <div className="title">
                                    <h2>Appoinment Request</h2>
                                    <p><a href="" onClick={()=>{window.location.reload()}}><HiRefresh /></a></p>
                                </div>

                                <div className="appointment-list">
                                    <ul>


                                        {appointment_list.filter((appointment => {
                                            return appointment.doctor_name == doctor_list.Doctor_name ?
                                                appointment.status == 'Pending'? appointment : null:null;

                                        })).map(patient => {

                                            return <li className='list'>
                                                <div className="img">
                                                    <img src={User_icon} alt="" />
                                                </div>

                                                <div className="content">
                                                    <h2 >{patient.patient_name}</h2>
                                                    <p>{patient.Symtoms}</p>
                                                    <p>{patient.date} | <span>{patient.time}</span></p>
                                                </div>

                                                <div className="status">
                                                    <a href="" onClick={(e)=>{delete_appointment(e,patient.id)}}><FaXmark /></a>
                                                    <a href="" onClick={(e)=>{confirm_appointment(e,patient.id,patient)}} ><FaCheck /></a>

                                                </div>

                                            </li>



                                        })}

                                    </ul>
                                </div>
                            </div>







                        </div>






                    </div>
                </div>

            </div>


        </div>



    )
}

export default Doctor_dashboard