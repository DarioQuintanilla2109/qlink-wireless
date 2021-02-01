import React from 'react'
import logo from '../images/qlinkPhoto.jpeg'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div classname='footerContent'>
          <div className='f1'>
            <h5>Helpful Links</h5>
            <ul className='list1'>
              <li id='firstLI'>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
              <li>
                <a href='#'>My Q Link / Login</a>
              </li>
              <li>
                <a href='#'>Sign Up</a>
              </li>
              <li>
                <a href='#'>Upload Proof</a>
              </li>
              <li>
                <a href='#'>Check Status</a>
              </li>
              <li>
                <a href='#'>Activate</a>
              </li>
              <li>
                <a href='#'>Coverage</a>
              </li>
              <li>
                <img src={logo} />
              </li>
            </ul>
          </div>
          <div className='f1'>
            <h5>Lifeline Programs</h5>
            <ul className='list1'>
              <li id='firstLI'>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>About Lifeline</a>
              </li>
              <li>
                <a href='#'>Enroll for Lifeline</a>
              </li>
              <li>
                <a href='#'>Lifeline Plans</a>
              </li>
              <li>
                <a href='#'>Lifeline Features</a>
              </li>
              <li>
                <a href='#'>How Do I Qualify</a>
              </li>
              <li>
                <a href='#'>FAQs / Help Center</a>
              </li>
            </ul>
          </div>
          <div className='f3'>
            <h5>Get Connected</h5>
            <ul className='list1'>
              <li id='firstLI'>
                <i className='fab fa-facebook fa-2x'></i>
                <a
                  href='https://www.facebook.com/qlinkwireless'
                  target='_blank'
                >
                  Like us on Facebook
                </a>
              </li>
              <li>
                <i className='fab fa-twitter fa-2x'></i>
                <a href='http://www.twitter.com/qlinkwireless' target='_blank'>
                  Follow Us on Twitter!
                </a>
              </li>
              <li>
                <i className='fab fa-instagram fa-2x'></i>
                <a
                  href='https://www.instagram.com/qlinkwireless/'
                  target='_blank'
                >
                  Hang Out With Us On Instagram
                </a>
              </li>
              <li>
                <i className='far fa-comments fa-2x'></i>
                <a href='https://blog.qlinkwireless.com/' target='_blank'>
                  See What We Have To Say
                </a>
              </li>
              <li>
                <i className='fas fa-info-circle fa-2x'></i>
                <a href='/members/chat/login.aspx' target='_blank'>
                  Get Help Here
                </a>
              </li>
            </ul>
          </div>
          <div className='f4'>
            <h5>Testimonials</h5>
            <ul className='list1'>
              <li id='firstLI'>
                "I love my phone from Q Link Wireless because it is easy to use
                and now I will never be without a phone. Thanks Q Link!"
              </li>
              <li>
                "Q Link's service never lets me down. They sent me an excellent
                phone which I love and I have never had a problem. I use my
                phone to make appointmnents and stay connected with my work,
                friends and family."
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
