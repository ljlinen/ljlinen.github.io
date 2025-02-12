import iconLinkedin from '../../asset/icon/linkedin.svg'
import iconMail from '../../asset/icon/mail.svg'
import iconWhatsapp from '../../asset/icon/whatsapp.svg'
import { scrollToElement } from '../global/reusable'
import '../../css/section/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="wrap-m-row">
          <div className="wrap">
            <p className='logo'>LinenDev</p>
            <p style={{fontSize: '1rem'}}>copyright &copy; 2024</p>
          </div>
          <div className="wrap quicklinks">
            <h3>QuickLinks</h3>
            <a>
              <p>my work</p>
            </a>
            <a onClick={() => scrollToElement('.s1-sec-work')}>
              <p>about me</p>
            </a>
            <a onClick={() => scrollToElement('.about-me')}>
              <p>my cv</p>
            </a>
          </div>
      
          <div className="wrap">
            <h3>Connect With Me</h3>
            <div className="wrap-i">
              <a href="https://www.linkedin.com/in/ljlinen/" target="_blank">
                <img className="i" src={iconLinkedin} />
              </a>
              <a href="mailto:siphomoloto0@gmail.com" target="_blank">
                <img className="i" src={iconMail} />
              </a>
              <a href="https://wa.me/+27712024580" target="_blank">
                <img className="i" src={iconWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-signature">
          <p>site designed and developed by owner. </p>
          <p>copyright &copy; 2024</p>
        </div>
  </footer>
  )
}
