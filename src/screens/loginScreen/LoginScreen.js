import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from "../signUpScreen/SignUpScreen"

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        {/* <img className='loginScreen__logo' src='https://st2.depositphotos.com/17828278/47953/v/1600/depositphotos_479531066-stock-illustration-humpolec-czech-republic-march-2021.jpg' alt=''
        /> */}
<img className='loginScreen__logo' src='https://cdn.worldvectorlogo.com/logos/netflix-4.svg' alt='' />   

{/* worldvectorlogo in .svg format by clicking 'copy link address of the medium or large size picture' */}
        <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen/>
          ) : (
            <>
          <h1>
          Unlimited movies, TV shows, and more
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email or mobile number to create or restart your membership.</h3>
          <div className="loginScreen__input">
            <form>
              <input type='email' placeholder='Email'/>
              <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>
                GET STARTED
              </button>
            </form>
          </div>
          </>

          )}
          
        </div>
      </div>
     

    </div>
  )
}

export default LoginScreen
