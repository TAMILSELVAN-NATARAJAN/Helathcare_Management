import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Dashboard_Menu from './Dashboard_Menu'

import { useNavigate } from "react-router-dom";


import './Disease_detail.css'
import { get_helathissue, viewpatient } from '../services/Apiservice';


const Disease_detail = () => {
  const navigate = useNavigate();

  const [health_detail, set_helath_detail] = useState([])

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

    get_helathissue()
      .then(res => {
        set_helath_detail(res)
        console.log(res);
        
      })
  }, [])

  





  return (
    <div >
      <Navbar />
      <div className="disease_detail">
        <div className="left-part">
          <Dashboard_Menu />
        </div>
        <div className="right-part">

          <div className="title">
            <h2>Health Issue </h2>
          </div>

          <div className="table">
            <table>

              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>Date</th>
                <th>Helath Issuse</th>
                <th>Rate</th>
                <th>BP</th>
                <th>Sugar</th>
                <th>Condition</th>
              </tr>

              {health_detail.filter((pat)=>{
                return pat.patient_id == patientdetail.id
               
              }).map(Patient => {
                return (<tr>
                  <td>{Patient.patient_id}</td>
                   <td>{Patient.patient_name}</td>
                   <td>{Patient.mobile_no}</td>
                   <td>{Patient.date}</td>
                   <td>{Patient.health_issue}</td>
                   <td>{Patient.issue_rate}</td>
                   <td>{Patient.Bp}</td>
                   <td>{Patient.sugar}</td>
                   <td>{Patient.condition}</td>
                </tr>)

              })}






              {/* <tr>

                <td>121</td>
                <td>Tamizhselvananb</td>
                <td>9444123712</td>
                <td>14/12/2023</td>
                <td>Cold</td>
                <td>5.6</td>
                <td>200gm</td>
                <td>55gm</td>
                <td>Normal</td>


              </tr>
 */}






            </table>
          </div>

        </div>
      </div>


    </div>


  )
}

export default Disease_detail