import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

export default function Header() {

    function updatemenu() {
        if (document.getElementById('responsive-menu').checked == true) {
          document.getElementById('menu').style.borderBottomRightRadius = '0';
          document.getElementById('menu').style.borderBottomLeftRadius = '0';
        }else{
          document.getElementById('menu').style.borderRadius = '5px';
        }
      }
      
  return <>
  <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onClick={updatemenu}/><label></label>
  <ul>
    <li> <NavLink
        to="/"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Home
      </NavLink>
      </li>
    <li> <NavLink 
        to="/signup"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Sign Up
      </NavLink></li>
    <li><NavLink
        to="/login"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Login
      </NavLink></li>
    <li> <NavLink
        to="/addrecipe"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Add recipe
      </NavLink></li>
  </ul>

    
     
      
     




  <div style={{float :"right",
"margin-right": "10%", }}><h1 style={{color:"#fff"}}>//Recipe Viewer</h1></div>
 </nav>
  </>
}
