import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

import { useNavigate } from "react-router-dom";


import './Book_appointment.css'
import { viewpatient,getdoctorlist,Bookappointment } from '../services/Apiservice'

const Book_appointment = () => {

    const navigate = useNavigate();


    const [patientdetail, setpatient_deatil] = useState([])
    const [Doctorlist,setDoctorlist]=useState([]);

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


     getdoctorlist()
        .then(res=>{
                 setDoctorlist(res)
                 
        })

    }, [])

     const book_now=(e)=>{
       
        e.preventDefault();   
        Bookappointment(e.target)
        .then(res=>{

        
            if(res == '200')
            {
                alert("Booked")
                navigate('/Appointment_status')
            }
        })

        



     }



    return (


        <div className='Book_appointment'>
            <Navbar />
            <div className="appointment">
                <form  onSubmit={book_now}>
                    <div className="general-details">
                        <p>General Details</p>

                        <div className="input-group">
                            <label>Patient ID  : </label>
                            <input type="text" name="patient_id" id=""  value={patientdetail.id} readonly />
                        </div>
                        <div className="input-group">
                            <label>Your Name : </label>
                            <input type="text" name="name" id=""  value={patientdetail.name} readonly />
                        </div>

                        <div className="input-group">
                            <label> Email : </label>
                            <input type="Email" name="email_id" id="" value={patientdetail.email_id} readonly  />
                        </div>

                        <div className="input-group">
                            <label>Phone No : </label>
                            <input type="text" name="mobile_no" id=""value={patientdetail.mobile_no} readonly />
                        </div>
                        




                    </div>

                    <div className="booking-details">
                        <p>Booking Details</p>

                        <div className="section1">

                            <div className="input-group">
                                <label >Location : </label>
                                <select name="location" id="" required>
                                    
                                    <option value="Chennai">Chennai</option>
                                    <option value="pondicherry">pondicherry</option>
                                    <option value="villupuram">villupuram</option>
                                   <option value="Salem">Salem</option>
                                </select>
                            </div>

            

                            <div className="input-group">
                                <label > Doctor Name : </label>

                                <select name="doctor_name" id="" size={1} required>
                                    
                                      {Doctorlist.map(doctor=>{

                                        return  <option value={doctor.Doctor_name} >{doctor.Doctor_name}</option>
                                      })}

                                   

                                </select>

                            </div>

                            <div className="input-group">
                                <label>Symtoms : </label>
                                <textarea name="symtoms" id="" cols="30" rows="2" required></textarea>
                            </div>

                        </div>

                        <div className="section2">

                            <div className="input-group">
                                <label> Date : </label>
                                <input type="date" name="date" id="" required/>
                            </div>
                            <div className="input-group">
                                <label> Time : </label>
                                <input type="time" name="time" id="" required/>

                            </div>

                            <div className="input-group">
                            <label>Alternate Phone No : </label>
                            <input type="text" name="al_mobile_no" id="" required placeholder='Mobile Number ' />
                            
                        </div>

                            <div className="submit">
                                <a href="" onClick={()=>window.location.reload()}>Reset</a>
                                <input type="submit"  value="Book Now"/>
                            </div>

                         

                        </div>






                    </div>






                </form>

            </div>





        </div>
    )
}

export default Book_appointment