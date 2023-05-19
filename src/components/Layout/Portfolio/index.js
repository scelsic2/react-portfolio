import './index.css'
import password from '../../../assets/images/password.jpg'
import quiz from '../../../assets/images/quiz.jpg'
import weather from '../../../assets/images/weather.jpg'
import fido from '../../../assets/images/fido.jpg'
import sote from '../../../assets/images/sote.png'
import note from '../../../assets/images/note.jpg'

import { useState, useEffect } from "react";
import '../Header/index'

function Portfolio(props) {
    console.log(props)
    
    return(
        <>
        ( <div className='portfolio-container'>

            <div className='app-container'>
                <div className='app-photo'>
                    <h4>Password Randomizer</h4>
                    <a href='https://scelsic2.github.io/password-generator/'><img src={password} alt='password app screenshot' /></a>
                </div>
                <div className='links'>
                    <a href='https://scelsic2.github.io/password-generator/'>Password Generator App</a>
                    <a href='https://github.com/scelsic2/password-generator'>Password Generator Repo</a>
                </div>
            </div>

            <div className='app-container'>
                <div className='app-photo'>
                    <h4>Code Quiz</h4>
                    <a href='https://scelsic2.github.io/code-quiz/'><img src={quiz} alt='quiz app screenshot' /></a>
                </div>
                <div className='links'>
                    <a href='https://scelsic2.github.io/password-generator/'>Code Quiz App</a>
                    <a href='https://github.com/scelsic2/code-quiz'>Code Quiz Repo</a>
                </div>
            </div>

            <div className='app-container'>
                <div className='app-photo'>
                    <h4>Weather App</h4>
                    <a href='https://scelsic2.github.io/weather-app/'><img src={weather} alt='weather app screenshot' /></a>
                </div>
                <div className='links'>
                    <a href='https://scelsic2.github.io/weather-app/'>Weather or Not App</a>
                    <a href='https://github.com/scelsic2/weather-app'>Weather or Not Repo</a>
                </div>
            </div>

            <div className='app-container'>
                <div className='app-photo'>
                    <h4>Fido Facts</h4>
                    <a href='https://scelsic2.github.io/fido-facts/'><img src={fido} alt='fido app screenshot' /></a>
                </div>
                <div className='links'>
                    <a href='https://scelsic2.github.io/fido-facts/'>Fido Facts App</a>
                    <a href='https://github.com/scelsic2/fido-facts'>Fido Facts Repo</a>
                </div>
            </div>

            <div className='app-container'>
                <div className='app-photo'>
                    <h4>Slide Off The Earth</h4>
                    <a href='https://warm-inlet-30953.herokuapp.com/'><img src={sote} alt='sote app screenshot' /></a>
                </div>
                <div className='links'>
                    <a href='https://warm-inlet-30953.herokuapp.com/'>Slide Off The Earth App</a>
                    <a href='https://github.com/AuTangen/Slide_Off_The_Earth'>Slide Off The Earth Repo</a>
                </div>
            </div>

            <div className='app-container'>
                <div className='app-photo'>
                    <h4>Note Taker</h4>
                    <a href='https://warm-sands-72135.herokuapp.com'><img src={note} alt='note app screenshot' /></a>
                </div>
                <div className='links'>
                    <a href='https://warm-sands-72135.herokuapp.com'>Note App</a>
                    <a href='https://github.com/scelsic2/notes-app'>Note Repo</a>
                </div>
            </div>

        </div>)
       </>
    )
}

export default Portfolio