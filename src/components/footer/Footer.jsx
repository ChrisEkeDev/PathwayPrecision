import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from 'react-icons/ti'

function Footer() {
  return (
    <footer className='footer-wrapper'>
          <section className='footer-contact'>
            <FaUser />
            <p>123 Fake Street, Fake City, ST 12345</p>
            <p>contact@precisiondnd.com</p>
            <p>(800) 630-9926</p>
          </section>
          <section>
            <ul className="footer-links">
              <li><a><TiSocialFacebookCircular /></a></li>
              <li><a><TiSocialInstagramCircular /></a></li>
              <li><a><TiSocialLinkedinCircular /></a></li>
            </ul>
          </section>
    </footer>
  )
}

export default Footer
