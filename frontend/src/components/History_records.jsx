import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import Dashboard_Menu from './Dashboard_Menu'

import './History_records.css'
import { useNavigate } from 'react-router-dom'
import { get_appointment, view_chekup_detail, viewpatient } from '../services/Apiservice'


const History_records = () => {

    const navigate = useNavigate();


    const [patient_detail, setpatient_deatil] = useState([])

    const [checkup_detail, set_checkup_detail] = useState([])

    const [appointment_status, set_appointment_status] = useState([])




    useEffect(() => {

        const login = localStorage.getItem('LOGIN')
        if (login > 0) {

        } else {
            navigate('/')
        }

        viewpatient(login)
            .then(res => {
                setpatient_deatil(res)
            })

        view_chekup_detail()
            .then(res => {
                set_checkup_detail(res)

            })
            
            get_appointment()
            .then(res => {
              set_appointment_status(res);
            })




    })
    return (
        <div >
            <Navbar />
            <div className="History_records">
                <div className="left-part">
                    <Dashboard_Menu />
                </div>
                <div className="right-part">

                    <div className="top-title">
                        <h2>History records  </h2>
                    </div>

                    <div className="appointment-records">
                        <div className="title">
                            <h3>Appointment Records</h3>
                        </div>
                        <div className="table">
                            <table>

                                <tr>
                                    <th>Patient ID</th>
                                    <th>Name</th>
                                    <th>Mobile No</th>
                                    <th>Doctor Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                                {appointment_status.filter((pat) => {
                                    return pat.patient_id == patient_detail.id
                                }).map(patient => {
                                    return <tr>

                                        <td>{patient.patient_id}</td>
                                        <td>{patient.patient_name}</td>
                                        <td>{patient.mobile_no}</td>
                                        <td>{patient.doctor_name}</td>
                                        <td>{patient.date}</td>
                                        <td>{patient.time}</td>
                                        <td>{patient.status}</td>


                                    </tr>
                                    return
                                })

                                }







                            </table>
                        </div>
                    </div>

                    {/* .....................checkup-records................... */}

                    <div className="Checkup-records">
                        <div className="title">
                            <h3>Checkups Records</h3>
                        </div>
                        <div className="table">
                            <table>

                                <tr>
                                    <th>Patient ID</th>
                                    <th>Name</th>
                                    <th>Mobile No</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>

                                {checkup_detail.filter((pat) => {
                                    return pat.patient_id == patient_detail.id
                                }).map(patient => {
                                    return <tr>
                                        <td>{patient.patient_id}</td>
                                        <td>{patient.patient_name}</td>
                                        <td>{patient.mobile_no}</td>
                                        <td>{patient.date}</td>
                                        <td>{patient.time}</td>
                                        <td>{patient.status}</td>


                                    </tr>


                                })


                                }







                            </table>
                        </div>
                    </div>







                </div>
            </div>


        </div>
    )
}

export default History_records