import React from 'react'
import { HiCheckCircle } from "react-icons/hi";
import {services} from '../../data.jsx';

function Home() {
  return (
    <div className='page-wrapper'>
    <section className='landing-wrapper'>
      <div className='landing-introduction'>
        <h1 className='landing-header'>Built on Precision. Focused on You.</h1>
        <p className='body'>
        At Pathway Precision, we provide accurate, reliable testing with professionalism and care. Whether it's drug screening, DNA testing, or document services, your results—and your experience—matter to us.
        </p>
        <button className='landing-button'>Contact Us</button>
      </div>
    </section>
    <section className='who-wrapper'>
      <div>
        <h5 className='subline'>Who we are</h5>
        <h2 className='header'>Welcome to Pathway Precision<br/> Drug & DNA Testing</h2>
        <p className='body'>
        At Pathway Precision, we are committed to providing accurate, timely, and confidential testing services designed to support individuals, families, and organizations in making informed decisions. With a focus on professionalism, care, and precision, we offer a wide range of services to meet your testing and verification needs—all in one trusted location.
        </p>
      </div>
      <div className='image'></div>
    </section>
    <section className='services-wrapper'>
      <h5 className='subline'>What we do</h5>
      <h2 className='header'>Our Services</h2>
      <div className='services-lists'>
        <ul className='services-list'>
          {
            services.slice(0,5).map((service, i) => {
              return (
                <li key={i}>
                  <HiCheckCircle className='list-icon' />
                  <span>{service}</span>
                </li>
              )
            })
          }
        </ul>
        <ul className='services-list'>
          {
            services.slice(5,10).map((service, i) => {
              return (
                <li key={i}>
                  <HiCheckCircle className='list-icon' />
                  <span>{service}</span>
                </li>
              )
            })
          }
        </ul>
        <ul className='services-list'>
          {
            services.slice(10,15).map((service, i) => {
              return (
                <li key={i}>
                  <HiCheckCircle className='list-icon' />
                  <span>{service}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
    <section className='call-wrapper'>
      <div>
        <h2 className='header'>Drug Testing Done Right</h2>
        <p className='body'>
        Experience fast, confidential drug testing with consistently accurate results you can rely on. Schedule your appointment today and ensure safety.
        </p>
      </div>
      <button className='call-button'>Schedule Now</button>
    </section>
    <section className='why-wrapper'>
      <div className='image'></div>
      <div>
        <h5 className='subline'>Why choose us</h5>
        <h2 className='header'>Setting the Standard in Testing & Verification</h2>
        <p className='body'>
        We combine professionalism with a personal approach to provide a stress-free experience for every client. Our trained staff ensures every test is performed with accuracy and care, and all information is handled with the utmost confidentiality. Whether you're visiting us for workplace testing, personal DNA results, or official document services, we are here to guide you every step of the way.
        </p>
      </div>
    </section>
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

export default Home
