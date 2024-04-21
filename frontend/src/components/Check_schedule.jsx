import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Dashboard_Menu from './Dashboard_Menu'


import './Check_schedule.css'
import { view_chekup_detail, viewpatient } from '../services/Apiservice'
import { useNavigate } from 'react-router-dom'


const Check_schedule = () => {

  const navigate = useNavigate();


  const [patient_detail, setpatient_deatil] = useState([])

  const [checkup_detail, set_checkup_detail] = useState([])



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




  })

  return (
    <div >
      <Navbar />
      <div className="checkup_schedule">
        <div className="left-part">
          <Dashboard_Menu />
        </div>
        <div className="right-part">

          <div className="title">
            <h2>Checkup Schedule </h2>
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
  )
}

export default Check_schedule