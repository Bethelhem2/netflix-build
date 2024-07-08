import React from 'react'
import "./ProfileScreen.css"
import Nav from "../../components/nav/Nav"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from "../../firebase"

function ProfileScreen() {  
    const user = useSelector(selectUser);



  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit profile</h1>
            <div className='profileScreen__info'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuv_89dQV4F_8TqeGgd2YfxGlN3I5vllGxb3jfJu7cg&s" alt="avatar image"/>
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                    <h3>Plans</h3>


                        <button onClick={() => auth.signOut()}className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
