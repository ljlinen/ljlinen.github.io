import iconMenu from '../../asset/icon/menu.svg'
import iconCross from '../../asset/icon/cross.svg'
import imgProfile from '../../asset/img/profile.jpeg'
import { scrollToElement } from '../global/reusable'
import '../../css/component/nav.css'
import { useEffect, useState } from 'react'
export default function Nav({isNavOpen, setOpen}) {

  const [focusProfile, setFocusProfile] = useState()

  const handleSideNavItemCick = (classTocrollTo) => {
    scrollToElement(classTocrollTo);
    setOpen(!open);
  }

  useEffect(() => {
    console.log(focusProfile);
  }, [focusProfile])

  return (
    <>
      <div className={isNavOpen ? "side-nav" : 'side-nav side-nav-open'}>
        <div className="side-nav-inner" style={{transform: isNavOpen ? 'translateX(0)' : 'translateX(150%)'}}>
                <img className="menu i" src={iconCross} alt="Menu-Cancel" onClick={() => setOpen(!isNavOpen)} />
          <div className="profile-main">
            <div className={focusProfile ? "profile profile-focus" : "profile"} onFocus={() => setFocusProfile(true)} onBlur={() => setFocusProfile(true)}>
              <img src={imgProfile} alt="profile image" />
            </div>            
          </div>

          <ul>
            <li onClick={() => handleSideNavItemCick('.s1-sec-work')}><span></span>my work<span></span></li>
            <li onClick={() => handleSideNavItemCick('.about-me')}><span></span>about me<span></span></li>
            <li onClick={() => handleSideNavItemCick('.footer')}><span></span>connect<span></span></li>
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
