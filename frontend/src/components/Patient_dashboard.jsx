import React, { useEffect } from 'react'

import Navbar from './Navbar'
import Dashboard_Menu  from './Dashboard_Menu'

import './Patient_dashboard.css'
import { json ,useNavigate} from 'react-router-dom'

const Patient_dashboard = () => {
  const navigate =useNavigate();


  useEffect(()=>{
    const LOGIN = JSON.parse(localStorage.getItem('LOGIN'));

    if (LOGIN > 0)
    {

    }else{
      navigate('/')
    }


  })


  const logout = ()=>{
    localStorage.setItem('LOGIN', '-2')
    navigate('/');
  }







  return (
    <div className='patient_dashboard'>
      <Navbar/>
      <div className="container">
        <div className="left-part">
            <Dashboard_Menu/>

        </div>

        <div className="right-part">
            <div className="welcome">
                <h1>WELCOME</h1>
                <h3>HealTec-Me</h3>

                <div className="log_out">
              <a href="" onClick={logout}>Log out</a>
            </div>
            </div>
            
                
        </div>

      </div>


    </div>
  )
}

export default Patient_dashboard;