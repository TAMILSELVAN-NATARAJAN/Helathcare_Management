
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


import Doctor_navbar from './Doctor_navbar'
import Doc_dashboard_menu from './Doc_dashboard_menu'



import './Patient_list.css'
import { getpatientlist } from '../../services/Apiservice';

const Patient_list = () => {
    const navigate = useNavigate();

    const [Patientlist,setPatientlist]=useState([]);
    const [patient_search, set_patient_search]=useState('')



    useEffect(() => {

        const Dlogin = localStorage.getItem('DLOGIN')
        if (Dlogin > 0) {

        } else {
            navigate('/');
        }
        getpatientlist()
        .then(res=>{ 
            setPatientlist(res)
        })

    })

    const Patient_view_page = (id)=>{
        localStorage.setItem('Doctor_patient_view', id);
        navigate('/patient_view_page');
    };


    // --------------------------------------------------
    return (
        <div className='Patient_list'>
            <Doctor_navbar />
            <div className="container">
                <div className="left-part">
                    <Doc_dashboard_menu />

                </div>

                <div className="right-part">

                    <div className="title">
                        <h2>Patient list</h2>
                        <div className="search">
                            <input type="text" placeholder='Search id'onChange={(e)=>{set_patient_search(e.target.value)}} />
                        </div>
                    </div>

                    <div className="table">
                        <table>

                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Register Date</th>
                                <th>Action</th>
                            </tr>

                         
                            {Patientlist.filter((patient)=>{
                                    return patient_search === ''?
                                    patient : patient.id == patient_search
                                }).map(Patientlist =>{
                                     return <tr>
                                     <td>{Patientlist.id}</td>
                                     <td>{Patientlist.name}</td>
                                     <td>{Patientlist.mobile_no}</td>
                                     <td>{Patientlist.age}</td>
                                     <td>{Patientlist.gender}</td>
                                     <td>14/12/2023</td>
                                     <td><a href='' onClick={()=>{Patient_view_page(Patientlist.id)}}>View</a></td>
                                 </tr>

                                })}









                        </table>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Patient_list