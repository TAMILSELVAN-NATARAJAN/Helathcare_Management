import Navbar from './Navbar'

import homeimage from "../Assets/images/home_doctor.png"
import ourservice_img from '../Assets/images/our_service.jpg'
import chooseus_img from '../Assets/images/chooseus.jpg'
import Logo from '../Assets/images/Logo.png'

import Facebook_img from '../Assets/images/facebook.webp'
import insta_icon from '../Assets/images/insta_icon.png'
import twitter_icon from '../Assets/images/twitter_icon.jpg'
import u_tube_icon from '../Assets/images/u-tube_icon.png'

import profile1 from '../Assets/images/profiles/profile1.jpg'
import profile2 from '../Assets/images/profiles/profile2.avif'
import profile3 from '../Assets/images/profiles/profile3.png'
import profile4 from '../Assets/images/profiles/profile4.avif'

import "./Home.css"



import { MdDesignServices } from "react-icons/md";
import { PiHandHeartThin } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { MdSpatialAudio } from "react-icons/md";


import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { json, useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Home() {

    const navigate =useNavigate();

    const form = useRef();
    useEffect(()=>{
        localStorage.setItem('Admin', '0')
  
    })

 const Schedule_appointment=(e)=>{
    const LOGIN = JSON.parse(localStorage.getItem('LOGIN'));
     e.preventDefault();
   

    if(LOGIN > 0)
    {
        navigate('/Book_Appointment')
    }else{
        navigate('/Patient_login')
    }

  



 }



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nyqr1gi', 'template_y2rnyod', form.current, {
        publicKey: '2agq-WsmVqiiXvmaH',
      })
      .then(
        () => {
          alert('Message sent sucessfully..')
        },
        (error) => {
          alert('FAILED...Try again');
          console.log('FAILED...', error.text);
        },
      );
  };



  


    const adminlogin =()=>{
        let pass =prompt('Enter password');

        if (pass == 121)
        {
            localStorage.setItem('Admin', 'awsedrftgyhujikolp')
            navigate('/Admin_dashboard')

        }else{
            localStorage.setItem('Admin', '043')
            alert("Pass Word Error...");
        }

    }


    return (
        <div className="Home">
            <Navbar />
            <div className="home_container">
                <div className="important-news">
                    <p><marquee behavior="" direction="">
                    Prioritize your health with regular check-ups and screenings. 🩺 Stay active, eat well, and get enough sleep. 💪 Don't ignore symptoms – seek medical help when needed. 🚑 Remember, prevention is key to a healthier future! 🌟 </marquee></p>
                </div>
                <div className="left-part">
                    <h1>Feel better about <br /> Finding <span>Healthcare</span></h1>
                    <p>Discover peace of mind in your healthcare journey with our trusted services. From expert guidance to personalized care, we're here to ensure every step leads to your improved well-being.</p>
                    <a href="" onClick={(e)=>Schedule_appointment(e)} className='btn'>Schedule an Appointment</a>
                    <br></br>

                </div>
                <div className="right-part">
                    <div className="img">
                        <img src={homeimage} alt="" />
                    </div>
                </div>

            </div>

            <div className="section1" id='contact'>
                <div className="boxes" >

                    <div className="content">
                        <p><MdDesignServices /></p>
                        <h3>Access to Care</h3>
                        <p>Ensuring that individuals have access to affordable and timely healthcare services regardless of their socioeconomic status, location, or background.</p>
                    </div>

                    <div className="content">
                        <p><MdDesignServices /></p>
                        <h3>Emergency Preparedness</h3>
                        <p>Preparedness for emergencies ensures continuous healthcare services, safeguarding communities' health and safety during public health crises and natural disasters.</p>
                    </div>


                    <div className="content">
                        <p><MdDesignServices /></p>
                        <h3>Health Information Technology</h3>
                        <p>Utilizing electronic health records (EHRs), telemedicine, and other technologies to improve communication, efficiency, and coordination of care among healthcare providers.</p>
                    </div>
                </div>

                <div className="form" id='health'>
                    <h1>Connect with Us</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-group">
                            <label htmlFor="">Your Name :</label>
                            <input type="text" name="user_name" id="" placeholder='Enter your name ' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Your Email :</label>
                            <input type="Email" name="user_email" id="" placeholder='Email id  ' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Message :</label>
                            <input type="text" name="message" id="" placeholder='Message ' />
                        </div>
                        <div className="submit-btn">
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>


            </div>

            <div className="section2" id='service'>
                <div className="left-part">
                    <h2>Benefits for Improving Your Health <br /> </h2>
                </div>

                <div className="right-part">
                    <p>Improving your health yields a multitude of benefits, from enhanced quality of life to reduced healthcare costs. Our healthcare management services are designed to support your journey towards better health outcomes. By optimizing operations, streamlining processes, and implementing evidence-based practices, we help you achieve improved patient satisfaction, increased efficiency, and better financial performance. </p>
                </div>
            </div>
            <div className="section3">

                <div className="left-part">
                    <div className="img">
                        <p></p>
                        <img src={ourservice_img} alt="" />
                    </div>
                </div>

                <div className="right-part">
                    <div className="title">
                        <h3>Our Service</h3>
                        <h1>Virtual Service</h1>
                        <p>Our healthcare management services encompass a comprehensive range of solutions <br /> tailored to meet the diverse  needs of healthcare organizations. From strategic planning <br /> and financial management to operational  optimization and regulatory compliance, <br /> we deliver expert guidance and support to help you achieve your goals and enhance patient care.</p>
                    </div>
                    <div className="start-btn">
                        <a href="">Start chat</a>
                    </div>
                    <div className="types-care">
                        <h4>Primary care</h4>
                        <h4>Urgent care</h4>
                    </div>
                </div>






            </div>

            <div className="section4 chooseus">
                <div className="left-part">

                    <div className="title">
                        <h1>Why choose Us</h1>
                        <p>Choose us because we prioritize your health and well-being above all else. Our dedicated team of healthcare professionals is committed to providing you with personalized care and support every step of the way.</p>

                    </div>
                    <div className="title-content">
                        <div className="block">
                            <p> <PiHandHeartThin /> </p>
                            <div className="content">
                                <h2>Continuity of Care</h2>
                                <p>Whether you need ongoing management for a chronic condition or periodic check-ups, we are here to provide consistent and reliable care to help you maintain optimal health and well-being.</p>
                            </div>
                        </div>
                        <div className="block">
                            <p> <MdSpatialAudio /></p>
                            <div className="content">
                                <h2>Patient-Centered Approach</h2>
                                <p>Your health and satisfaction are our top priorities, and we strive to involve you in every decision regarding your care, empowering you to take control of your health.</p>
                            </div>
                        </div>
                        <div className="block">
                            <p> <LuHeartHandshake /> </p>
                            <div className="content">
                                <h2>Personalized Care</h2>
                                <p>We believe in treating each patient as an individual, tailoring our approach to meet your unique needs and preferences.</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="right-part">
                    <div className="img">
                        <img src={chooseus_img} alt="" />
                    </div>
                </div>

            </div>

            <div className="section5 spl-doctor">
                <div className="title">
                    <h1>Our Special Doctor</h1>

                </div>
                <div className="content">
                    <p>Our specialized healthcare team comprises experts in various fields, dedicated to providing tailored care for every patient. From consultations to treatments, we offer personalized solutions to address your unique health needs. With state-of-the-art facilities and compassionate professionals, we're committed to guiding you through every step of your health journey.</p>
                    <div className="btn">
                        <p><FaArrowLeft /></p>
                        <p><FaArrowRight /></p>
                    </div>
                </div>


                <div className="slider swiper-wrapper">


                    <div className="profile">
                        <img src={profile2} alt="" />
                        <p>Dr.Rajendran MBBS  <br /> Eye specialist</p>
                    </div>
                    <div className="profile">
                        <img src={profile4} alt="" />
                        <p>Dr. Shilpa Ghosh  <br /> Dermatologists</p>
                    </div>
                    <div className="profile">
                        <img src={profile1} alt="" />
                        <p>Dr. Naresh Trehan  <br /> Endocrinologists</p>
                    </div>
                    <div className="profile">
                        <img src={profile3} alt="" />
                        <p>Dr. Padmapriya  <br /> Cardiologists</p>
                    </div>



                </div>

                <div className="navigate">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>

                </div>

            </div>
            
            
 {/* ........................................................................------------------------- */}

            <div className="section6 footer">
                <div className="footer-container">

                <div className="left-part">
                     <div className="title">
                        <img src={Logo} alt="" />
                        <h2>HealTec-Me</h2>
                     </div>
                     <div className="contents">

                        <div className="column1">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Annnual cheksup</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Carrers</a></li>
                        </div>

                        <div className="column2">
                            <li><a href="#">Get A digonics</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </div>

                        <div className="column3">
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </div>
                       
                     </div>
                     <div className="admin">
                            <p><a href="" onClick={adminlogin}>Admin</a></p>
                        </div>
                    
                </div>

                 <div className="middle-part">
                     <div className="tile">
                        <h2>Top Insurances</h2>
                     </div>
                     <div className="contents">

                       <div className="column1">
                        <li><a href="#">Aentna</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Blue Shield</a></li>
                        <li><a href="#">Careers</a></li>
                       </div>
                       
                       <div className="column2">
                        <li><a href="#">Health Net</a></li>
                        <li><a href="#">Health smarth</a></li>
                        <li><a href="#">View More</a></li>
                       </div>

                     </div>
                 </div>

                 <div className="right-part">
                    <div className="title">
                        <h2>Follow Us</h2>
                    </div>
                    <div className="contents">
                        <li><a href="#"> <img src={Facebook_img} alt="" />  </a></li>
                        <li><a href="#"> <img src={insta_icon} alt="" />  </a></li>
                        <li><a href="#"> <img src={twitter_icon} alt="" />  </a></li>
                        <li><a href="#"> <img src={u_tube_icon} alt="" />  </a></li>
                    </div>

                 </div>
            



                </div>
            </div>



        </div>



    );
}

export default Home;