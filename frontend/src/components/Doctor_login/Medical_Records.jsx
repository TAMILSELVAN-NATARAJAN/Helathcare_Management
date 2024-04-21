import React, { useEffect, useState } from 'react'

import Doctor_navbar from './Doctor_navbar'
import Doc_dashboard_menu from './Doc_dashboard_menu'

import { get_medicalrecord } from '../../services/Apiservice';
import { useNavigate } from 'react-router-dom';

import './Medical_Records.css'

const Medical_Records = () => {


    const navigate = useNavigate();
    const[medical_search,setmedical_search]=useState('')
    const [medicalrecords, setmedicalrecords] = useState([])
  
  
    useEffect(() => {
  
      const Dlogin = localStorage.getItem('DLOGIN')
      if (Dlogin > 0) {
  
      } else {
        navigate('/');
      }
  
  
      get_medicalrecord()
        .then(res => {
          setmedicalrecords(res);
        })
  
    })


    return (
        <div className='Patient_list'>
            <Doctor_navbar />
            <div className="container">
                <div className="left-part">
                    <Doc_dashboard_menu />

                </div>

                <div className="right-part">

                    <div className="title">
                        <h2>Medical Records</h2>
                        <div className="search">
                            <input type="text" placeholder='search id' onChange={(e)=>setmedical_search(e.target.value)} />
                        </div>
                    </div>

                    <div className="table">
                        <table>

                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Medicine Name</th>
                                <th>Noon</th>
                                <th>Time</th>
                                <th>Dose</th>
                            </tr>

                            {medicalrecords.filter((medicines) => {
                                return medical_search === '' ?
                                    medicines : medicines.patient_id.includes(medical_search)
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

export default Medical_Records