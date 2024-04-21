import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import Forget_pwd from './components/Forget_pwd'
import Home from './components/Home'
import Patient_login from './components/Patient_login';
import Sign_up from './components/Sign_up';
import Dashboard_Menu from './components/Dashboard_Menu';
import Book_appointment from './components/Book_appointment';
import Patient_dashboard from './components/Patient_dashboard';
import Check_schedule from './components/Check_schedule'
import Appointment_status from './components/Appointment_status'
import History_records from './components/History_records'
import Disease_detail from './components/Disease_detail'
import Medication_detail from './components/Medication_detail'
import Patient_video from './components/Patient_video'
import Doctor_dashboard from './components/Doctor_login/Doctor_dashboard'
import Doctor_Appointment from './components/Doctor_login/Doctor_Appointment'
import Patient_list from './components/Doctor_login/Patient_list'
import Patient_view_page from './components/Doctor_login/Patient_view_page'
import Medical_Records from './components/Doctor_login/Medical_Records'
import Admin_dashboard from './components/Admin_login/Admin_dashboard'
import Ad_patient_view from './components/Admin_login/Ad_patient_view'
import Add_doctor from './components/Admin_login/Add_doctor'
import Ad_doctor_view from './components/Admin_login/Ad_doctor_view'
import Doctor_login from './components/Doctor_login/Doctor_login'
import Doctor_video from './components/Doctor_login/Doctor_video'
import Errorpage from './components/Errorpage'



import { BrowserRouter,createBrowserRouter,Routes,Route } from 'react-router-dom';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
   <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/Patient_login' element={<Patient_login/>}/>
    <Route path='/Forget_pwd' element={<Forget_pwd/>}/>
    <Route path='/Sign_up' element={<Sign_up/>}/>
    <Route path='/Dashboard_Menu' element={<Dashboard_Menu/>}/>
    <Route path='/Book_appointment' element={<Book_appointment/>}/>
    <Route path='/Checkup_schedule' element={<Check_schedule/>}/>
    <Route path='/Patient_dashboard' element={<Patient_dashboard/>}/>
    <Route path='/Appointment_status' element={<Appointment_status/>}/>
    <Route path='/History_records' element={<History_records/>}/>
    <Route path='/Disease_detail' element={<Disease_detail/>}/>
    <Route path='/Medication_detail' element={<Medication_detail/>}/>
    <Route path='/Doctor_dashboard' element={<Doctor_dashboard/>}/>
    <Route path='/Doctor_Appointment' element={<Doctor_Appointment/>}/>
    <Route path='/Patient_list' element={<Patient_list/>}/>
    <Route path='/Patient_view_page' element={<Patient_view_page />}/>
    <Route path='/Medical_Records' element={<Medical_Records/>}/>
    <Route path='/Admin_dashboard' element={<Admin_dashboard/>}/>
    <Route path='/Ad_patient_view' element={<Ad_patient_view/>}/>
    <Route path='/Add_doctor' element={<Add_doctor/>}/>
    <Route path='/Ad_doctor_view' element={<Ad_doctor_view/>}/>
    <Route path='/Doctor_login' element={<Doctor_login/>}/>
    <Route path='/Patient_video' element={<Patient_video/>}/>
    <Route path='/Doctor_video' element={<Doctor_video/>}/>





    <Route path='*' element={<Errorpage/>}/>

    </Routes>




</BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
