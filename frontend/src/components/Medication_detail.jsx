import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Dashboard_Menu from './Dashboard_Menu'

import { useNavigate } from 'react-router-dom';



import './Medication_detail.css'
import { get_medicalrecord, viewpatient } from '../services/Apiservice';


const Medication_detail = () => {

  const navigate = useNavigate();
  const [medicalrecords, setmedicalrecords] = useState([])
  const [patientdetail, setpatient_deatil] = useState([])


  useEffect(() => {

    const login = localStorage.getItem('LOGIN')
    if (login > 0) {

    } else {
      navigate('/')

    }

    viewpatient(login)
    .then(res=>{
      setpatient_deatil(res)
     
    })



    get_medicalrecord()
      .then(res => {
        setmedicalrecords(res);
      })

    

  })
  



  return (
    <div >
      <Navbar />
      <div className="Medication_detail">
        <div className="left-part">
          <Dashboard_Menu />
        </div>
        <div className="right-part">

          <div className="title">
            <h2>Medication detail </h2>
          </div>

          <div className="table">
            <table>

              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Tablet Name</th>
                <th>Noon</th>
                <th>Time</th>
                <th>Dose</th>
              </tr>


              {medicalrecords.filter((medicines) => {
                return medicines.patient_id == patientdetail.id 
              }).map(medicine => {
                return <tr>
                  <td>{medicine.patient_id}</td>
                  <td>{medicine.patient_name}</td>
                  <td>{medicine.date}</td>
                  <td>{medicine.medicine_name}</td>
                  <td>{medicine.noon}</td>
                  <td>{medicine.time}</td>
                  <td>{medicine.dose}</td>

                </tr>

              })}












            </table>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Medication_detail