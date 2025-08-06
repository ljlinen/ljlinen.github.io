import IconLinkedin from '../../asset/icon/linkedin.svg'
import IconMail from '../../asset/icon/mail.svg'
import IconWhatsapp from '../../asset/icon/whatsapp.svg'
import { scrollToElement } from '../utils/scrollToElement'
import '../../css/section/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="wrap-m-row">
          <div className="wrap">
            <div className='logo'>
              <p>S. Moloto</p>
              <p>Dev Portfolio</p>
            </div>
          </div>
          <div className="wrap quicklinks">
            <h3>QuickLinks</h3>
            <a onClick={() => scrollToElement('.s2-sec-about')}>
              <p>about me</p>
            </a>
            <a onClick={() => scrollToElement('.s1-sec-work')}>
              <p>my work</p>
            </a>
            <a onClick={() => scrollToElement('.s3-sec-cv')}>
              <p>resume</p>
            </a>
          </div>
      
          <div className="wrap">
            <h3>Connect</h3>
            <div className="icons">
              <a href="https://www.linkedin.com/in/ljlinen/" target="_blank">
                <IconLinkedin className="i" />
              </a>
              <a href="mailto:siphomoloto0@gmail.com" target="_blank">
                <IconMail className="i" />
              </a>
              <a href="https://wa.me/+27712024580" target="_blank">
                <IconWhatsapp className="i" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-signature">
          <p>designed and developed by S.Moloto</p>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
  </footer>
  )
}