import Navbar from './Navbar'

import Signup_img from '../Assets/images/signup.jpg'

import './Sign_up.css'

import { useNavigate } from "react-router-dom";

import { addpatient } from '../services/Apiservice'

function Sign_up() {

  const navigate = useNavigate();

  const handleaddpatient = (e) => {
    e.preventDefault();

    addpatient(e.target)
      .then(res => {
        if (res === '200') {
          navigate("/Patient_login")

        }

      })

  }





  return (
    <div className="Sign_up">
      <Navbar />
      <div class="signup-container">
        <div class="left-side">
          <img src={Signup_img} alt="" />
        </div>
        <div class="right-side">
          <div class="title">
            <h3>Registration</h3>
          </div>



          <form method='post' onSubmit={handleaddpatient} >
            <div class="input-group">
              <label for="name">Name </label>
              <span>:</span>
              <input type="text" name="name" id="" placeholder="Enter your name " required />
            </div>
            <div class="input-group">
              <label for="">Mobile No </label>
              <span>:</span>
              <input type="text" name="mobile_no" id="" placeholder="Enter mobile number" required />
            </div>
            <div class="input-group">
              <label for="">Email id </label>
              <span>:</span>
              <input type="text" name="email_id" id="" placeholder="email id" required />
            </div>


            <div className="input-group">
              <label >Gender : </label>
              <select name="gender" id="" required>
                <option value="null" selected="selected">please select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>

              </select>
            </div>
            <div className="input-group">
              <label >Blood group : </label>
              <select name="blood_group" id="" required>
                <option value="null" >please select Blood</option>
                <option value="A">A</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B">B</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB">AB</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O">O</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>


            <div class="input-group">
              <label for=""> Age </label>
              <span>:</span>
              <input type="text" name="age" id="" placeholder="xxxxxx" required />
            </div>
            <div class="input-group">
              <label for=""> Country </label>
              <span>:</span>
              <input type="text" name="country" id="" placeholder="xxxxxx" required />
            </div>
            <div class="input-group">
              <label for=""> State </label>
              <span>:</span>
              <input type="text" name="state" id="" placeholder="xxxxxx" required />
            </div>
            <div class="input-group">
              <label for=""> District </label>
              <span>:</span>
              <input type="text" name="district" id="" placeholder="xxxxxx" required />
            </div>
            <div class="input-group">
              <label for=""> Town </label>
              <span>:</span>
              <input type="text" name="town" id="" placeholder="xxxxxx" required />
            </div>
            <div class="input-group">
              <label for=""> Password </label>
              <span>:</span>
              <input type="text" name="password" id="" placeholder="xxxxxx" required />
            </div>


            <div class="remembered">
              <p>Already a member? click <a href="/Patient_login">here</a> to login</p>
            </div>
            <div class="submit">
              <input type="submit" value="register" />
            </div>
          </form>

        </div>

      </div>

    </div>
  )

}

export default Sign_up;