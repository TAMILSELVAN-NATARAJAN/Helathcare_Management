import React, { useEffect, useState } from 'react'

import './Admin_dashboard.css'

import { FaUserDoctor } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaUserShield } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";

import Logo from '../../Assets/images/Logo.png'
import User_icon from '../../Assets/images/user_icon.png'
import User_img from '../../Assets/images/user_img.png'


import { json, useNavigate } from "react-router-dom";


import {getpatientlist, viewpatient,getdoctorlist, Deletedoctor, deletepatient} from '../../services/Apiservice'

import './Admin_dashboard.css'

const Admin_dashboard = () => {

    const navigate =useNavigate();
    
      
    const [patient_search, set_patient_search]=useState('')
    const [doctor_search, set_doctor_search]=useState('')

   
   

    const [Patientlist,setPatientlist]=useState([]);
    const [Doctorlist,setDoctorlist]=useState([]);

    // ............patient list------------
    useEffect(()=>{
        getpatientlist()
        .then(res=>{ 
            setPatientlist(res)
        })
        // .................doctor-list.................
   
        getdoctorlist()
        .then(res=>{
                 setDoctorlist(res)
        })

        // ---------------admin auth==========
       const admin =localStorage.getItem('Admin')
      if(admin == "awsedrftgyhujikolp")
      {
        
      }else{
        navigate('/');
      }
     

    },[])





    // ----------------------------------

    const Patient_view_page = (id)=>{
        localStorage.setItem('patient_view_page', id);
        navigate('/Ad_patient_view')
    };

    const Doctor_view_page = (id)=>{
        localStorage.setItem('doctor_view_page', id);
        navigate('/Ad_doctor_view')
    };


    const Delete_doctor=(e,id)=>{
        e.preventDefault();
        let pass =prompt("Enter password.....");
        if (pass == 121){
            Deletedoctor(id)
        .then(res=>{
            setDoctorlist(Doctorlist.filter(doctor=>
              doctor.id !== id
            ))
        })
        }else{
            alert("Password error");
        }

    }

    const Delete_patient=(e,id)=>{
        e.preventDefault();

        let pass =prompt("Enter password.....");
        if (pass == 121){
            deletepatient(id)
            .then(res=>{
                setPatientlist(Patientlist.filter(patient=>patient.id !== id))
            })
        }else{
            alert("Password error");
        }
       

    }

    const admin_logout=()=>{

        localStorage.setItem('Admin', 'error');
        navigate('/')

    }




    return (
        <div className='Admin_dashboard'>
            <div className="search-box">
            <div className="logo">
                        <a href="/"><img src={Logo}alt="" /> </a>
                        <a href=""><h2>HealTec-Me</h2></a>
                     </div>
                <div className="search">
                    <p><CiSearch /></p>
                    <input type="text" name="" id="" onChange={(e)=>{set_patient_search(e.target.value)}
                    } placeholder='Search Patient' />
                </div>

                <div className="profile">
                    <div className="notification">
                        <a href=""><IoMdNotifications /></a>
                    </div>
                    <div className="user">
                        <div className="img">
                            <img src={User_icon} alt="" />
                        </div>
                        <div className="content">
                            <h2>Dr.Tamizh</h2>
                            <p>Founder</p>
                        </div>
                       <div className="logout">
                        <a href="" onClick={admin_logout} >log out</a>
                       </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="left-part">
                    <div className="overview">
                        <div className="title">
                            <h2>Overview</h2>
                        </div>
                        <div className="boxes">

                            <div className="box">
                                <div className="icon">
                                    <p style={{ 'color': 'green' }}><FaUserDoctor /></p>
                                </div>
                                <div className="content">
                                    <h1>78</h1>
                                    <h4>Doctors</h4>
                                </div>
                            </div>

                            <div className="box">
                                <div className="icon">
                                    <p><IoIosPeople /></p>
                                </div>
                                <div className="content">
                                    <h1>78</h1>
                                    <h4>Staffs</h4>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <p style={{ 'color': 'yellow' }}><FaUserShield /></p>
                                </div>
                                <div className="content">
                                    <h1>78</h1>
                                    <h4>Patients</h4>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <p style={{ 'color': 'blue' }}><GiMedicines /></p>
                                </div>
                                <div className="content">
                                    <h1>78</h1>
                                    <h4>Pharmacies</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Patient-list">

                        <div className="title">
                            <h2>Patient list</h2>
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
                                    <th colSpan={2}>Action</th>
                                </tr>


                                {Patientlist.filter((patient)=>{
                                    return patient_search.toLowerCase() === ''?
                                    patient : patient.name.toLowerCase().includes(patient_search)
                                }).map(Patientlist =>{
                                     return <tr>
                                     <td>{Patientlist.id}</td>
                                     <td>{Patientlist.name}</td>
                                     <td>{Patientlist.mobile_no}</td>
                                     <td>{Patientlist.age}</td>
                                     <td>{Patientlist.gender}</td>
                                     <td>14/12/2023</td>
                                     <td><a href='' onClick={()=>{Patient_view_page(Patientlist.id)}}>View</a></td>
                                     <td><a href="" onClick={(e)=>{Delete_patient(e,Patientlist.id)}}>Delete</a></td>
 
                                 </tr>

                                })}


                               
                               
                               





                            </table>
                        </div>

                    </div>


                </div>
                <div className="right-part">
                    <div className="doctor-list">

                        <div className="title">
                            <h2>Doctor  list</h2>
                            <div className="search">
                                <a href="/Add_doctor">Add</a>
                                <input type="text" name="" id="" onChange={(e)=>{
                                    set_doctor_search(e.target.value)
                                }} placeholder='Search'/>
                            </div>
                        </div>

                         <div className="doctor-names">
                                       
                                <div className="container">


                                {Doctorlist.filter((doctor)=>{
                                    return doctor_search.toLowerCase() === ''?
                                    doctor :doctor.Doctor_name.toLowerCase().includes(doctor_search)
                                }).map(Doctorlist =>{
                                     return  <div className="box">
                                     <div className="img">
                                         <img src={User_img} alt="" />
                                     </div>
                                     <div className="content">
                                         <h3>{Doctorlist.Doctor_name}</h3>
                                         <p>{Doctorlist.Doctor_specialist}</p>
                                     </div>

                                     <div className="action">
                                              <a href="" onClick={()=>{
                                                Doctor_view_page(Doctorlist.id)
                                              }}>View</a>
                                              <a href="" onClick={(e)=>{Delete_doctor(e,Doctorlist.id)

                                              }}>Delete</a>
                                     </div>
                                 </div>
                                })}


                                   

                                   
                         


                                </div>

                         </div>


                    </div>



                </div>


            </div>

        </div>
    )
}

export default Admin_dashboard