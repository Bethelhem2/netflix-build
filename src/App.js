import React, { useEffect } from 'react';
import HomeScreen from './screens/homescreen/HomeScreen';
import "./App.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginScreen from "../src/screens/loginScreen/LoginScreen";
import { auth } from "./firebase"
import { login, logout, selectUser } from "./features/userSlice"
import { useDispatch, useSelector } from "react-redux"
import ProfileScreen from "./screens/profileScreen/ProfileScreen"


function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in 
        dispatch( 
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        // Logged out
        dispatch(logout())
      }
    });
    return unSubscribe;
  }, [dispatch]);
 
  return (
      <div className="app">
        <BrowserRouter >
        {!user ? (
          <LoginScreen/>
        ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen/>} />
          <Route path='/'  element={<HomeScreen/>} /> 
       </Routes>
        )}
      </BrowserRouter>
      </div>
  );
}

export default App;
