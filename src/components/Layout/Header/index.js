import './index.css'

function Header (props) {
    console.log(props)
    return(
        <header>
            <h1>Cassandra Scelsi</h1>
            <nav>
                <h4>About Me</h4>
                <h4>Portfolio</h4>
                <h4>Contact</h4>
                <h4>Resume</h4>
            </nav>
        </header>
    )
}

export default Header