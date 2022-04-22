import React, {useState}from 'react'
import "./Signup.css"

export default function Signup() {

  const[email, setEmail]=useState('')
  const[psw, setPsw]=useState('')
  const[psw2, setPsw2]=useState('')

  function handleEmail(e){
    setEmail(e.target.value)
    
  }

  function handlePsw(e){
    setPsw(e.target.value)
    
  }
  function handlePsw2(e){
    setPsw2(e.target.value)
    
  }
  

  
  

  return<>
   <form  style={{border:"1px solid #ccc"}}>
    <div className="form-container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label><b>Email</b></label>
    <input type="text" value={email} onChange={handleEmail}
     placeholder="Enter Email"required/>

    <label><b>Password</b></label>
    <input type="password" value={psw} onChange={handlePsw}
     placeholder="Enter Password" required/>

    <label><b>Repeat Password</b></label>
    <input type="password" value={psw2} onChange={handlePsw2} 
    placeholder="Repeat Password" required/>

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
