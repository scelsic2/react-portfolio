// import { Link } from 'react-router-dom'
import './index.css'
import avatar from '../../../assets/images/avatar.jpg'
import { useState, useEffect } from "react";
import '../Header/index'

function AboutMe(props) {
    console.log(props)
    
    return(
        <>
        ( <div className='about-me-container'>
            <div className='about-me'>
                <div className='avatar'>
                    <img src={avatar} alt='avatar'/>
                </div>

                <div className ='bio'>
                    <p>Fullstack coding bootcamp student, soon to graduate from Rutgers.</p>
                </div>
            </div>
        </div>)
       </>
    )
}

export default AboutMe