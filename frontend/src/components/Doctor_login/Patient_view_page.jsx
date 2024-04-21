

import Doctor_navbar from './Doctor_navbar'
import Doc_dashboard_menu from './Doc_dashboard_menu'

import User_icon from '../../Assets/images/user_icon.png'
import { FaAnglesRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

import './Patient_view_page.css'


import Admin_dashboard from '../Admin_login/Admin_dashboard'
import { useEffect, useState } from 'react'
import { viewpatient, addmedicalrecord, add_healthissue, add_checkup_detail,  view_chekup_detail } from '../../services/Apiservice'

const Patient_view_page = ({ }) => {

   const today = new Date();
   const month = today.getMonth() + 1;
   const year = today.getFullYear();
   const date = today.getDate();

   const current_date = date + "-" + month + '-' + year;

   const navigate = useNavigate();

   const [patient_detail, setpatient_deatil] = useState([])
   const [checkup_detail, set_checkup_detail] = useState([])


   useEffect(() => {
      const id = localStorage.getItem('Doctor_patient_view')
      viewpatient(id)
         .then(res => {
            setpatient_deatil(res)
         })

      view_chekup_detail()
         .then(res => {
            set_checkup_detail(res)
           
         })

   })


   const addmedical = (e) => {
      e.preventDefault();
      // console.log(e.target.date.value);
      addmedicalrecord(e.target)
         .then(res => {
            console.log("ok")

            if (res === '200') {
               navigate('/Medical_records')
            }

         })



   }

   const addissue = (e) => {
      e.preventDefault();
      

      add_healthissue(e.target)
         .then(res => {
         
            if (res == '200') {
               alert('Added sucessfully')
               navigate('/patient_view_page')

            }
         })




   }

   const add_chekup = (e) => {
      e.preventDefault();

      add_checkup_detail(e.target)
         .then(res => {
            if (res == '200') {
               alert('Added sucessfully')
               navigate('/patient_view_page')

            }
         })

   }


   return (
      <div className='Patient_view_page'>
         <Doctor_navbar />
         <div className="container">
            <div className="left-part">
               <Doc_dashboard_menu />

            </div>

            <div className="right-part" >
               <div className="container">

                  <div className="left-part">
                     <div className="title">
                        <h2>Patient Detail </h2>
                     </div>
                     <table>
                        <tr>
                           <th>Name</th>
                           <td>:</td>
                           <td>{patient_detail.name}</td>
                        </tr>
                        <tr>
                           <th>Email id </th>
                           <td>:</td>
                           <td>{patient_detail.email_id}</td>
                        </tr>
                        <tr>
                           <th>Phone No </th>
                           <td>:</td>
                           <td>{patient_detail.mobile_no}</td>
                        </tr>
                        <tr>
                           <th>Age </th>
                           <td>:</td>
                           <td>{patient_detail.age}</td>
                        </tr>
                        <tr>
                           <th>Sex </th>
                           <td>:</td>
                           <td>{patient_detail.gender}</td>
                        </tr>
                        <tr>
                           <th>Country </th>
                           <td>:</td>
                           <td>{patient_detail.country}</td>
                        </tr>
                        <tr>
                           <th>State </th>
                           <td>:</td>
                           <td>{patient_detail.state}</td>
                        </tr>
                        <tr>
                           <th>District </th>
                           <td>:</td>
                           <td>{patient_detail.district}</td>
                        </tr>
                        <tr>
                           <th>Town </th>
                           <td>:</td>
                           <td>{patient_detail.town}</td>
                        </tr>

                     </table>

                  </div>

                  <div className="right-part">

                     <div className="medical_record">
                        <div className="title">
                           <h2> Add Medical Record</h2>
                        </div>
                        <div className="form">
                           <form onSubmit={addmedical}>

                              <div className="input-group">
                                 <span>Patinet ID :</span>
                                 <input type="text" name="patient_id" id="" value={patient_detail.id} readOnly />
                              </div>
                              <div className="input-group">
                                 <span>Patient Name :</span>
                                 <input type="text" name="name" id="" value={patient_detail.name} readOnly />
                              </div>
                              <div className="input-group">
                                 <span>Date :</span>
                                 <input type='date' name="date" id="" />
                              </div>

                              <div className="input-group">
                                 <span>Medicine Name :</span>
                                 <input type="text" name="medicine_name" id="" />
                              </div>
                              <div className="input-group">
                                 <span>Noon :</span>
                                 <input type="text" name="noon" id="" />
                              </div>
                              <div className="input-group">
                                 <span>Time :</span>
                                 <input type="time" name="time" id="" />
                              </div>
                              <div className="input-group">
                                 <span>Dose :</span>
                                 <input type="text" name="dose" id="" />
                              </div>
                              <div className="submit">

                                 <input type="submit" value="Submit" />
                              </div>





                           </form>
                        </div>
                     </div>

                     <div className="issue">
                        <div className="title">
                           <h2>Add Health issue</h2>
                        </div>

                        <div className="form">
                           <form onSubmit={addissue}>

                              <div className="input-group" style={{display:"none"}}>
                                 <span>Patient ID :</span>
                                 <input type="text" name='patient_id' value={patient_detail.id} readOnly />
                              </div>
                              <div className="input-group">
                                 <span>Name :</span>
                                 <input type="text" name='name' value={patient_detail.name} readOnly />
                              </div>
                              <div className="input-group" style={{display:"none"}}>
                                 <span>Mobile NO :</span>
                                 <input type="text" name='mobile_no' value={patient_detail.mobile_no} readOnly />
                              </div>
                              <div className="input-group">
                                 <span>Date</span>
                                 <input type="text" name='date' value={current_date} readOnly />
                              </div>
                              <div className="input-group">
                                 <span>Health Issue</span>
                                 <input type="text" name='health_issue' />
                              </div>
                              <div className="input-group">
                                 <span>Issue Rate</span>
                                 <input type="text" name='issue_rate' />
                              </div>
                              <div className="input-group">
                                 <span>BP</span>
                                 <input type="text" name='Bp' />
                              </div>
                              <div className="input-group">
                                 <span>Sugar</span>
                                 <input type="text" name='sugar' />
                              </div>
                              <div className="input-group">
                                 <span>Condition</span>
                                 <input type="text" name='condition' />
                              </div>

                              <div className="submit">
                                 <input type="submit" value="Submit" />
                              </div>

                           </form>
                        </div>

                     </div>

                  </div>
               </div>

               <div className="chekup_detail">
                  <div className="title">
                     <h1>Chekup list</h1>
                  </div>


                  <div className="form">
                     <form    onSubmit={add_chekup}>
                        <div style={{ display: "none" }}>
                           <input type="text" name="patient_id" id="" value={patient_detail.id} readOnly />
                           <input type="text" name="name" id="" value={patient_detail.name} readOnly />
                           <input type="text" name="mobile_no" id="" value={patient_detail.mobile_no} readOnly />
                        </div>
                        <h3>Add Chekup  :</h3>

                        <div className="input-group">
                           <span>Date :</span>
                           <input type="date" name="date" id="" />
                        </div>

                        <div className="input-group">
                           <span>Time :</span>
                           <input type="time" name="time" id="" />
                        </div>

                        <div className="input-group">
                           <span>Status :</span>
                           <select name="status" id="">
                              <option value="Compulasary">Compulasary</option>
                              <option value="optional">Optional</option>
                           </select>
                        </div>

                        <div className="submit">
                           <input type="submit" value="Add" />
                        </div>

                     </form>
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

                        {checkup_detail.filter((pat)=>{
                           return pat.patient_id == patient_detail.id
                        }).map(patient=>{
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

export default Patient_view_page