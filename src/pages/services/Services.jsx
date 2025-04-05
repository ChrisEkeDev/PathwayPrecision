import React from 'react'
import { HiCheckCircle } from "react-icons/hi";
import {services} from '../../data.jsx';

function About() {
  return (
    <div className='page-wrapper'>
      <section  className='our-services-wrapper'>
        <div className='our-services-introduction'>
          <h1 className='landing-header'>Your Trusted Source for<br/> Testing & Verification</h1>
          <p className='body'>
          Discover a full range of professional services designed to bring clarity, compliance, and peace of mind. At Pathway Precision, we offer everything from drug and DNA testing to fingerprinting, notary services, and more—all delivered with accuracy, efficiency, and care. Explore how our solutions are built to support your personal and professional needs.
          </p>
        </div>
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
      <section className='our-service-wrapper'>
        <div>
          <h5 className='subline'>Who we are</h5>
          <h2 className='header'>Comprehensive Drug and Alcohol Testing</h2>
          <p className='body'>
          Whether you're an employer ensuring a safe workplace or an individual requiring personal testing, we offer a full suite of drug and alcohol screening services. Our options include DOT and non-DOT drug testing, urine testing, and hair follicle testing, tailored to meet regulatory standards and personal requests. We also provide breath alcohol testing for immediate, accurate detection of alcohol levels in the system.
          </p>
        </div>
        <div className='image'></div>
      </section>
      <section className='our-service-wrapper'>
        <div className='image'></div>
        <div>
          <h5 className='subline'>Who we are</h5>
          <h2 className='header'>DNA Testing Services You Can Trust</h2>
          <p className='body'>
          Our DNA testing services offer dependable answers when it matters most. We specialize in legal and non-legal DNA testing, including paternity, maternity, and family relationship testing. For expectant parents, we also offer early gender DNA testing, giving you a sneak peek at your baby’s gender as early as 7 weeks into pregnancy. Looking for a more memorable moment? Our gender reveal services help you celebrate this milestone with creativity and joy.
          </p>
        </div>
      </section>
      <section className='our-service-wrapper'>
        <div>
          <h5 className='subline'>Who we are</h5>
          <h2 className='header'>Fingerprinting and Background Checks</h2>
          <p className='body'>
          Pathway Precision provides fast, secure fingerprinting services for employment, licensing, adoption, and other personal or legal requirements. Our comprehensive background checks support hiring decisions, tenant screenings, and more, delivering critical information with discretion and reliability.
          </p>
        </div>
        <div className='image'></div>
      </section>
      <section className='our-service-wrapper'>
        <div className='image'></div>
        <div>
          <h5 className='subline'>Who we are</h5>
          <h2 className='header'>Professional Document Services</h2>
          <p className='body'>
          We are proud to offer notary signing services for important documents that require legal witnessing. Our certified notary agents are available to help with real estate closings, affidavits, power of attorney, and other official paperwork. We also offer I-9 employment verification services, ensuring your business remains compliant with federal employment regulations.
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

export default About
