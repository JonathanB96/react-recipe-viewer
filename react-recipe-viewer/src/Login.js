import React,{useState} from 'react'
import "./Login.css"
import avatar from "./avatar.png"

export default function Login(){

  const[name, setName]=useState('')
  const[psw, setPsw]=useState('')

  function handleName(e){
    setName(e.target.value)
  }
  function handlePsw(e){
    setPsw(e.target.value)
  }
  
  
    return <>
  
  <form className='form-group'>
          <h2>Login</h2>
          <div class="imgcontainer"><img src={avatar} className="avatar" alt='avatar'/>
  
          </div>
          <div className="form-container">
             <label for="uname">
                 <strong>Username</strong></label>
                 <input type="text" value={name} onChange={handleName}
                  name="uname" placeholder="Enter Username"/>
              <label for="psw"><strong>Password</strong></label>
              <input type="password" value={psw} onChange={handlePsw}
              name="psw" placeholder="Enter Password"/>
              <button  className="btn btn-succes" type="submit">Login</button>
             
          
          </div>
          <div className="container" style={{background: "#f1f1f1"}}><button  type="button" class="cnlbutton">Cancel</button>
              <span> Forgot <a href="#">password?</a></span></div>
  
    </form>
  
           
  </>
    
  }
  