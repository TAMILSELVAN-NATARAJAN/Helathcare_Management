import React from 'react'


import { adddoctor } from '../../services/Apiservice'


import { useNavigate } from "react-router-dom";

import './Add_doctor.css'

const Add_doctor = () => {
   const navigate = useNavigate();


   const handleadd_doctor=(e)=>{
      e.preventDefault();
      adddoctor(e.target)
      .then(res=>{
         if(res == '200'){
            navigate('/Admin_dashboard')
         }

        
      })

   }

   




  return (
       <div className="Add_doctor">
                 <div className="title">
                    <h2>Add Doctor</h2>
                 </div>
                 <div className="form">
                    <form  onSubmit={handleadd_doctor}>
                             
                             <div className="input-group">
                                <span>Doctor Name :</span>
                                <input type="text" name='name' />
                             </div>
                             <div className="input-group">
                                <span>Mobile No :</span>
                                <input type="text" name='mobile_no' />
                             </div>
                             <div className="input-group">
                                <span>Email Id :</span>
                                <input type="text" name='email_id' />
                             </div>
                             <div className="input-group">
                                <span>gender :</span>
                                <input type="text" name='gender' />
                             </div>
                             <div className="input-group">
                                <span>Blood Group :</span>
                                <input type="text" name='blood_group' />
                             </div>


                             <div className="input-group">
                                <span>Qualification :</span>
                                <input type="text" name='qualification' />
                             </div>


                             <div className="input-group">
                                <span>Age :</span>
                                <input type="text" name='age' />
                             </div>


                             <div className="input-group">
                                <span>Specialist :</span>
                                <input type="text" name='specialist' />
                             </div>


                             <div className="input-group">
                                <span>Country :</span>
                                <input type="text" name='country' />
                             </div>


                             <div className="input-group">
                                <span>State :</span>
                                <input type="text" name='state' />
                             </div>


                             <div className="input-group">
                                <span>District :</span>
                                <input type="text" name='district' />
                             </div>


                             <div className="input-group">
                                <span>Town :</span>
                                <input type="text" name='town' />
                             </div>
                             
                             <div className="input-group">
                                <span>Password :</span>
                                <input type="text" name='password'  Value='HTM@121' readOnly/>
            
                             </div>

                             <div className="submit">
                                <input type="submit" value='Add '/>
                             </div>


                    </form>
                 </div>
       </div>
  )
}

export default Add_doctor