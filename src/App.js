import React, { useState } from 'react'


export default function App() {
    const [showContactForm, setShowContactForm] = useState(false)

    return (
        <div className='main'>
            {/* if showContactForm is false, show the home page */}
            {!showContactForm && <HomePage setShowContactForm={setShowContactForm} />}
            {/* if showContactForm is true, show the contact form */}
            {showContactForm && <ContactForm />}

        </div>
    )
}

function HomePage({ setShowContactForm }) {
    return (
        <div className='main'>


            {/* FULL SCREEN IFRAME HERE */}
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w-3TtY2z4VQ?autoplay=1&amp;start=240" title="YouTube video player" frameborder="0"></iframe>

            <div className='content'>
                <button onClick={() => setShowContactForm(true)}>CLICK HERE FOR PROFESSIONAL TREE SERVICE</button>
            </div>

        </div>
    )
}

function ContactForm() {
    return (
        <div className='contact-form'>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message' rows='5' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}
