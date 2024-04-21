import React, { useEffect, useState } from 'react'

import Doctor_navbar from './Doctor_navbar'
import Doc_dashboard_menu from './Doc_dashboard_menu'

import Webcam from 'react-webcam'

import './Doctor_video.css'

const Doctor_video = () => {
    
    const [camera,setcamera]=useState(false)

    const handle_camera =()=>{
        camera?setcamera(false):setcamera(true)

    }


  return (
    <div className='Doctor_video'>
            <Doctor_navbar />
            <div className="container">
                <div className="left-part">
                    <Doc_dashboard_menu />

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

export default Doctor_video