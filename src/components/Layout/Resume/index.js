import './index.css'
import DownloadLink from "react-download-link";
import resume from '../../../assets/files/resume.pdf'

function Resume(props) {
    console.log(props)
    
    return(
        <>
        ( <div className='resume-container'>
            <div className='prof'>
                <h3>Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>MERN Stack</li>
                </ul>
                <DownloadLink
                    label="Download Resume"   
                    filename="resume.pdf"
                    exportFile={() => "My cached data"}
/>
            </div>
        </div>)
       </>
    )
}

export default Resume