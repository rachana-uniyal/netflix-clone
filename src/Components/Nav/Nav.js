import './Nav.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Nav() {

  const [show, handleShow] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    })
    return ()=>{
        window.removeEventListener("scroll",window)
    }
  },[])

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img 
        onClick={()=>navigate("/")}
        className='nav-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix logo"
        />
        <img
        onClick={()=>navigate("/profile")}
        className='nav-avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix avatar" />
    </div>
  )
}

export default Nav