import Header from './Header'
import AboutMe from './About-Me';
import Contact from './Contact'
import Resume from './Resume'

import './index.css'

import { useState, useEffect } from "react";
import Portfolio from './Portfolio';

const Layout = () => {
    const [ view, setView] = useState('about-me');

    const showView = () => {
        switch (view) {
          case 'about-me':
            return <AboutMe />
          case 'portfolio':
            return <Portfolio />   
          case 'contact':
            return <Contact />
          case 'resume':
            return <Resume />
        }
      };

    return <>
        <Header showTheView={setView}/>
        { showView() }
    </>
}

export default Layout