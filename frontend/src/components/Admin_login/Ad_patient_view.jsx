import React from 'react'
import  { useEffect, useState } from 'react'


import { viewpatient ,editpatient } from '../../services/Apiservice'
import './Ad_patient_view.css'

import User_icon from '../../Assets/images/user_icon.png'

const Ad_patient_view = () => {
     
     // const [view_page,setview_page]=useState()
   const [patient_detail,setpatient_deatil]=useState([])

   useEffect(()=>{
     const page =JSON.parse(localStorage.getItem('patient_view_page'));
   //   setview_page(page)

     viewpatient(page)
      .then(res=>{ 
      setpatient_deatil(res)
      })
     
        
  },[])

  const editpatientdetail=(e,id)=>{
  
  

    
   editpatient(e.target,id)
     .then(res=>{
        setpatient_deatil(res.data)

        if(res.status == 200)
        {
          alert("Edited...")
        }
    })

  }




    return (
        <div className='Ad_patient_view'>


            <div className="right-part">
                <div className="container">

                    <div className="left-part">
                      <div className="title">
                        <h2>Patient Details </h2>
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

                        <div className="img">
                            <img src={User_icon} alt="" />
                        </div>

                    </div>
                </div>

                <div className="edit-profile">
                   <div className="title">
                    <h2>Edit</h2>
                   </div>
                   <div className="form">
                    <form  onSubmit={(e)=>{editpatientdetail(e,patient_detail.id)}}>
                              
                              <div className="input-group">
                                <span>Name :</span>
                                <input type="text" name='name' Value={patient_detail.name}  />
                              </div>
                              <div className="input-group">
                                <span>Mobile No :</span>
                                <input type="text" name='mobile_no'  defaultValue={patient_detail.mobile_no} />
                              </div>
                              <div className="input-group">
                                <span>Email id :</span>
                                <input type="text" name='email_id'  defaultValue={patient_detail.email_id} />
                              </div>
                              <div className="input-group">
                                <span>Gender :</span>
                                <input type="text" name='gender'  defaultValue={patient_detail.gender} />
                              </div>
                              <div className="input-group">
                                <span>Blood Group :</span>
                                <input type="text" name='blood_group'  defaultValue={patient_detail.blood_group} />
                              </div>
                              <div className="input-group">
                                <span>Age :  </span>
                                <input type="text" name='age'  defaultValue={patient_detail.age} />
                              </div>
                              <div className="input-group">
                                <span>Country :</span>
                                <input type="text" name='country'  defaultValue={patient_detail.country} />
                              </div>
                              <div className="input-group">
                                <span>State :</span>
                                <input type="text" name='state'  defaultValue={patient_detail.state} />
                              </div>
                              <div className="input-group">
                                <span>District :</span>
                                <input type="text" name='district'  defaultValue={patient_detail.district} />
                              </div>
                              <div className="input-group">
                                <span>Town :</span>
                                <input type="text" name='town'  defaultValue={patient_detail.town} />
                                <input type="text" name='password' value={patient_detail.password} readOnly style={{display:'none'}} />
                              </div>

                               
                               <input type="submit"  value='Save'/>


                    </form>
                   </div>
                </div>





            </div>
        </div>
    )
}

export default Ad_patient_view