import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'


function LoginScreen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className='login-screen'>
        <div className='loginscreen-background'> 
            <img className='loginscreen-logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            alt="netflix-logo"/>
        <button onClick={() => setSignIn(true)} className='loginscreen-button'>
            Sign In
        </button>
        <div className='loginscreen-gradiant'/>
        </div>
         <div className='loginscreen-body'>
            { signIn ? (
                <SignUpScreen/>
            ) : (
                <>
                <h1>Unlimited files, TV programes and more.</h1>    
                <h2>Watch anywhere, Connect at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className='loginscreen-input'>
                    <form>
                        <input type='email' placeholder='Email Address'/>
                        <button onClick={() => setSignIn(true)} className='loginscreen-getstarted'>GET STARTED</button>
                    </form>
                </div>
            </>
            )}   
        </div> 
    </div>
  )
}

export default LoginScreen