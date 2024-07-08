import React from 'react'
import "../footer/Footer.css"


function Footer() {
  return (
    <div className='outerWrapper'>
        <p>Questions? Contact us.</p>
      <div className='inernal__wrapper'>
      
        <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>

        </ul>
        <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>

        </ul>
        <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>

            

        </ul>
        <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
        </ul>
       
      </div>
      <div >
        
        <select className='choose__language'>
    <option value="option1">English</option>
  </select>
      </div>
    </div>
  )
}

export default Footer
