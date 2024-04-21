import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Doctor_navbar from './Doctor_navbar'
import Doc_dashboard_menu from './Doc_dashboard_menu'

import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import './Doctor_Appointment.css'
import { get_appointment, getdoctorlist,Delete_appointment ,viewdoctor } from '../../services/Apiservice';

const Doctor_Appointment = () => {

    const navigate = useNavigate();

    const [appointment_list, set_appointment_list] = useState([])
    // const [search_appointment, set_search_appointment] = useState([])
    const [doctor_list, set_doctor_list] = useState([])

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
          
            viewdoctor(Dlogin)
            .then(res=>{
                set_doctor_list(res)
               
               
        })

    })

    const delete_appointment=(id)=>{
        Delete_appointment(id)
        .then(res=>{
            set_appointment_list(res)
            alert("Deleted Sucessfully..")
            navigate('/Doctor_dashboard')    
            
        })
    }



    return (
        <div className='Doctor_Appointment'>
            <Doctor_navbar />
            <div className="container">
                <div className="left-part">
                    <Doc_dashboard_menu />

                </div>

                <div className="right-part">

                    <div className="title">
                        <h2>Appointment</h2>
                        {/* <input type="text" onChange={(e) => set_search_appointment(e.target.value)}  placeholder='Search '/> */}
                    </div>

                    <div className="table">
                        <table>

                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Symtoms</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>

                            {appointment_list.filter((appointment => {
                                return appointment.doctor_name   == doctor_list.Doctor_name ?
                                appointment.status == 'Confrim'?appointment:null:null;
                                    
                            })).map(patient => {

                                return <tr>

                                    <td>{patient.patient_id}</td>
                                    <td>{patient.patient_name}</td>
                                    <td>{patient.mobile_no}</td>
                                    <td>{patient.Symtoms}</td>
                                    <td>{patient.date}</td>
                                    <td>{patient.time}</td>
                                    <td>{patient.status}</td>


                                </tr>
                            })}
                        </table>
                    </div>

                </div>

            </div>


        </div>


    )
}

export default Doctor_Appointment