import React from 'react'
import "../Styles/footerStyles.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-by'> 
      <p>Powered by Ignacio Carrabs</p> </div>
      <img className='footer-logo' src="/images/DH.png" alt="" width={100} />
        <div>
          <a href="/#"> <img className='footer-icons' src="/images/ico-facebook.png" alt="" /> </a>
          <a href="/#"> <img className='footer-icons' src="/images/ico-whatsapp.png" alt="" /> </a>
          <a href="/#"> <img className='footer-icons' src="/images/ico-tiktok.png" alt="" /> </a>
          <a href="/#"> <img className='footer-icons' src="/images/ico-instagram.png" alt="" /> </a>
        </div>
    </footer>
  )
}

export default Footer
