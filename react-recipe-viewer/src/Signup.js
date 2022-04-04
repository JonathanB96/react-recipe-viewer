import React from 'react'
import "./Signup.css"

export default function Signup() {
  return<>
   <form  style={{border:"1px solid #ccc"}}>
    <div className="form-container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label><b>Email</b></label>
    <input type="text" placeholder="Enter Email"required/>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" required/>

    <label><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" required/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"margin-bottom":"15px"}}/> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      
      <button type="submit" className="signupbtn">Sign Up</button>
      <button type="button" className="cancelbtn">Cancel</button>
    </div>
  </div>
</form> 
  
  
  </>
}
