import './index.css'

function Contact(props) {
    console.log(props)
    
    return(
        <>
        ( <div className='contact-container'>
            <div className='contact-me'>
            <h3>Contact Me</h3>
            <input type='text' name='name' placeholder='Name'></input>
            <input type='email' name='email' placeholder='Email'></input>
            <textarea name='message' placeholder='Message' rows={5}></textarea>
            <input type='submit'></input>
            </div>
        </div>)
       </>
    )
}

export default Contact