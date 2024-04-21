import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import Dashboard_Menu from './Dashboard_Menu'

import './Appointment_status.css'

import { get_appointment, viewpatient } from '../services/Apiservice'
import { useNavigate } from 'react-router-dom'

const Appointment_status = () => {
  const navigate = useNavigate();


  const [patient_detail, setpatient_deatil] = useState([])
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

    get_appointment()
      .then(res => {
        set_appointment_status(res);
      })

  }, [])







  return (
    <div >
      <Navbar />
      <div className="Appointment_status">
        <div className="left-part">
          <Dashboard_Menu />
        </div>
        <div className="right-part">

          <div className="title">
            <h2>Appointment Status </h2>
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
      </div>


    </div>

  )
}

export default Appointment_status