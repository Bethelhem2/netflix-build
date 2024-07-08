import React, { useRef, useState} from 'react'
import { auth } from "../../firebase"
import "./SignUpScreen.css"

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");


  const register = (e) => {
    e.preventDefault();
    setErrorMessage("")
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => 
      setErrorMessage(error.message)
    )
  };
  const signIn = (e) => {
    e.preventDefault();
    setErrorMessage("");
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => setErrorMessage(error.message))
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email"/>
        <input ref={passwordRef} placeholder='password' type="password"/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
        </div>
        <h4> 
          <span className='singUpScreen__gray'>New to netflix? </span>
           <span className='signUpScreen__link' onClick={register}>Sign Up now.</span></h4>
           
         </form>
         </div>
  )}
export default SignUpScreen
