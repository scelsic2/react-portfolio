import { Link, NavLink } from 'react-router-dom';
import './index.css'

function Header (props) {
    console.log(props)
    return(
        <header>
            <h1>Cassandra Scelsi</h1>
            <nav>
                <NavLink exact='true' activeclassname='active' class='link' to='/aboutme'>
                    <h4 class='h4nav'>About Me</h4>   
                </NavLink>

                <NavLink exact='true' activeclassname='active' class='link' to='/portfolio'>
                    <h4 class='h4nav'>Portfolio</h4>   
                </NavLink>
                
                <NavLink exact='true' activeclassname='active' class='link' to='/contact'>
                    <h4 class='h4nav'>Contact</h4>   
                </NavLink>

                <NavLink exact='true' activeclassname='active' class='link' to='/resume'>
                    <h4 class='h4nav'>Resume</h4>   
                </NavLink>

            </nav>
        </header>
    )
}

export default Header