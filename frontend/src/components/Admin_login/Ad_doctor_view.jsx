import React, { useEffect, useState } from 'react'

import User_icon from '../../Assets/images/user_icon.png'

import './Ad_doctor_view.css'
import { editdoctor, viewdoctor } from '../../services/Apiservice'

//doctor_view_page



const Ad_doctor_view = () => {



    const [Doctor_detail,setdoctor_deatil]=useState([])
    

   useEffect(()=>{
     const page =JSON.parse(localStorage.getItem('doctor_view_page'));
   //   setview_page(page)
   

     viewdoctor(page)
      .then(res=>{ 
      setdoctor_deatil(res)
      })
     
        
  },[])


  const edit_doctor=(e,id)=>{
    e.preventDefault();
    

    editdoctor(e.target,id)
    .then(res=>{
        setdoctor_deatil(res.data);
      

        if(res.status == 200){
            alert("Edited...")
        }
    })


  }




    return (
        <div className='Ad_doctor_view'>

            <div className="container">
                <div className="right-part">
                    

                    <div className="left-part">
                    <div className="title">
                        <h2>Doctor detail </h2>
                    </div>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_name}</td>
                            </tr>
                            <tr>
                                <th>Email id </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_email_id}</td>
                            </tr>
                            <tr>
                                <th>Mobile No </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_mobile_no}</td>
                            </tr>
                            <tr>
                                <th>Gender </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_gender}</td>
                            </tr>
                            <tr>
                                <th>Blood Group </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_blood_group}</td>
                            </tr>
                            <tr>
                                <th>Age </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_age}</td>
                            </tr>
                            <tr>
                                <th>Qualification : </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_Qualification}</td>
                            </tr>

                            <tr>
                                <th>Specialist : </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_specialist}</td>
                            </tr>


                            <tr>
                                <th>Country </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_country}</td>
                            </tr>
                            <tr>
                                <th>State </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_state}</td>
                            </tr>
                            <tr>
                                <th>District </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_district}</td>
                            </tr>
                            <tr>
                                <th>Town </th>
                                <td>:</td>
                                <td>{Doctor_detail.Doctor_town}</td>
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
                        <h3>Edit</h3>
                    </div>
                    <div className="form">
                        <form method='put' onSubmit={(e)=>{edit_doctor(e,Doctor_detail.id)}} >

                            <div className="input-group">
                                <span>Name :</span>
                                <input type="text" name='name' defaultValue={Doctor_detail.Doctor_name} />
                            </div>
                            <div className="input-group">
                                <span>Email id :</span>
                                <input type="text" name='email_id' defaultValue={Doctor_detail.Doctor_email_id}/>
                            </div>
                            <div className="input-group">
                                <span>Mobile No :</span>
                                <input type="text" name='mobile_no' defaultValue={Doctor_detail.Doctor_mobile_no} />
                            </div>
                            <div className="input-group">
                                <span>Gender :</span>
                                <input type="text" name='gender'defaultValue={Doctor_detail.Doctor_gender} />
                            </div>
                            <div className="input-group">
                                <span>Blood Group :</span>
                                <input type="text" name='blood_group' defaultValue={Doctor_detail.Doctor_blood_group} />
                            </div>
                            <div className="input-group">
                                <span>Age :  </span>
                                <input type="text" name='age' defaultValue={Doctor_detail.Doctor_age}/>
                            </div>
                            <div className="input-group">
                                <span>Qulification :  </span>
                                <input type="text" name='Doctor_Qulification' defaultValue={Doctor_detail.Doctor_Qualification} />
                            </div>
                            <div className="input-group">
                                <span>Specialist :  </span>
                                <input type="text" name='Doctor_specialist' defaultValue={Doctor_detail.Doctor_specialist}/>
                            </div>
                            <div className="input-group">
                                <span>Country :</span>
                                <input type="text" name='country' defaultValue={Doctor_detail.Doctor_country}/>
                            </div>
                            <div className="input-group">
                                <span>State :</span>
                                <input type="text" name='state'  defaultValue={Doctor_detail.Doctor_state}/>
                            </div>
                            <div className="input-group">
                                <span>District :</span>
                                <input type="text" name='district' defaultValue={Doctor_detail.Doctor_district}/>
                            </div>
                            <div className="input-group">
                                <span>Town :</span>
                                <input type="text" name='town' defaultValue={Doctor_detail.Doctor_town}/>
                                <input type="text" name='Doctor_password' value={Doctor_detail.Doctor_password} readOnly style={{display:'none'}} />

                            </div>


                            <input type="submit" value='Save' />


                        </form>
                    </div>
                </div>





            </div>



        </div>
    )
}

export default Ad_doctor_view