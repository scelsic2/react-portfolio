import './index.css'
import { useState, useEffect } from "react";

function Footer (props) {
    console.log(props)

    return(
        <footer>
            <nav>
                <a href='https://github.com/scelsic2'>Github</a>
                <a href='https://www.linkedin.com/in/cassandra-scelsi-b89047b/'>LinkedIn</a>
                <a href='https://codepen.io/scelsic2'>Codepen</a>
            </nav>
        </footer>
    )
}

export default Footer