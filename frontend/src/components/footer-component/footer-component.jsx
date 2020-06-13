import React from 'react'
import './footer-component-styles.scss'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='container bottom_border'/>
        <div className='container'>
          <ul className='footer_bottom_ul'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href={'#about_us'}>About Us</a>
            </li>
            <li>
              <a href={'#contact_us'}>Contact Us</a>
            </li>
          </ul>
          <p className='text-center'
             style={{
               marginBottom: '-14px',
               paddingBottom: '15px'
             }}
          >
            Copyright @2020 | Designed by IT18149654
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
