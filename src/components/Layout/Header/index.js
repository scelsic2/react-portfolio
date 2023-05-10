import './index.css'
import { useState, useEffect } from "react";
import AboutMe from '../About-Me/index'

function Header (props) {
    console.log(props)

    const { toggleAboutMe } = props

    return(
        <header>
            <h1>Cassandra Scelsi</h1>
            <nav>
                <a 
                    className={props.page === 'about-me' ? 'active' : ''}
                    href="#aboutme"
                    onClick={() => props.showTheView('about-me')}>About Me</a>
                <a 
                    className={props.page === 'portfolio' ? 'active' : ''}
                    href="#portfolio"
                    onClick={() => props.showTheView('portfolio')}>Portfolio</a>
                <a 
                    className={props.page === 'contact' ? 'active' : ''}
                    href="#contact"
                    onClick={() => props.showTheView('contact')}>Contact</a>
                <a 
                    className={props.page === 'resume' ? 'active' : ''}
                    href="#resume"
                    onClick={() => props.showTheView('resume')}>Resume</a>
            </nav>
        </header>
    )
}

export default Header