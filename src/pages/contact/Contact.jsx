import React from 'react'

function Contact() {
  return (
    <div className='page-wrapper'>
    <section className='form-wrapper'>
      <div>
        <h5 className='subline'>Contact us</h5>
        <h2 className='header'>Your Next Step Starts Here</h2>
        <p className='body'>
        No matter your needs, Pathway Precision is your partner in testing and verification services. Contact us today to schedule your appointment or to learn more about how we can support you.
        </p>
      </div>
      <form className='form'>
        <div className='input-wrapper'>
          <input className='input' name="name" placeholder='Name'/>
        </div>
        <div className='input-wrapper'>
          <input className='input' name="email" placeholder='Email'/>
        </div>
        <div className='input-wrapper'>
          <input className='input' name="phone" placeholder='Phone Number'/>
        </div>
        <div className='input-wrapper'>
          <textarea className='textarea' name="details" placeholder='Enter your details' />
        </div>
        <button className="form-button" type="submit">Submit</button>
      </form>
    </section>
    </div>
  )
}

export default Contact
