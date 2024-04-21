import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Dashboard_Menu from './Dashboard_Menu'

import Webcam from 'react-webcam'

import './Patient_video.css'

const Patient_video = () => {
    
    const [camera,setcamera]=useState(false)

    const handle_camera =()=>{
        camera?setcamera(false):setcamera(true)

    }


  return (
    <div >
      <Navbar />
      <div className="Medication_detail">
        <div className="left-part">
          <Dashboard_Menu />
        </div>
        <div className="right-part">
            <div className="c-btn">
                <button onClick={handle_camera}>{camera?"OFF":"ON"}</button>
            </div>

            <div className="webcam">
            {/* <Webcam/> */}
            {camera?<Webcam/>:"CAMERA OFF"}
            </div>

       
        </div>
      </div>


    </div>
    
  )
}

export default Patient_video