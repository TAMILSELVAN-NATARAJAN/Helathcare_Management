import Navbar from './Navbar'

import './Forget_pwd.css'

function Forget_pwd(){

   return(
    <div className="Forget_pwd">
    <Navbar/>
<div class="forget-container">
        <div class="title">
            <h3>Forget password?</h3>
        </div>
        <form action="">

            <div class="input-group">
                <input type="text" name="" id="" required placeholder="Enter mobile number" />
                <label for="">Enter your registered mobile number</label>
            </div>
            <div class="remembered">
                <p>Remembered your password?<a href="./Patient_login">Login</a></p>
            </div>
            <div class="submit">
                <input type="submit" value="Continue" />
            </div>
        </form>
    </div>


    </div>
   );

}

export default Forget_pwd;