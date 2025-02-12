import iconMenu from '../../asset/icon/menu.svg'
import iconCross from '../../asset/icon/cross.svg'
import imgProfile from '../../asset/img/profile.jpeg'
import { scrollToElement } from '../global/reusable'
export default function Nav({isNavOpen, setOpen}) {

  const handleSideNavItemCick = (classTocrollTo) => {
    scrollToElement(classTocrollTo);
    setOpen(!open);
  }

  return (
    <>
      <div className={isNavOpen ? "side-nav" : 'side-nav side-nav-open'}>
        <div className="side-nav-inner" style={{transform: isNavOpen ? 'translateX(0)' : 'translateX(150%)'}}>
                <img className="menu i" src={iconCross} alt="Menu-Cancel" onClick={() => setOpen(!isNavOpen)} />
          <div className="profile">
            <img src={imgProfile} alt="profile image" />
          </div>
          <ul>
            <li onClick={() => handleSideNavItemCick('.s1-sec-work')}>my work</li>
            <li onClick={() => handleSideNavItemCick('.about-me')}>about me</li>
            <li onClick={() => handleSideNavItemCick('.footer')}>connect</li>
            <div className="wrap"></div>
          </ul>
        </div>
      </div>

      
      <nav>
        <div className="nav-nav">
            <p className='logo'>LinenDev</p>

          <ul>
            <li>
              <img className="menu i" src={iconMenu} alt="Menu" onClick={() => setOpen(!isNavOpen)} />
              <div className="wrap">
                <div className="line" style={{transform: isNavOpen ? 'translateX(-100%)' : 'translateX(100%)'}} ></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
