import IconGithub from '../../asset/icon/github.svg'
import IconMenu from '../../asset/icon/burger-menu-svgrepo-com.svg'
import IconCross from '../../asset/icon/cross.svg'
import IconExpand from '../../asset/icon/expand.svg'
import IconCollaps from '../../asset/icon/collaps.svg'
import IconDontWorryItsDynamic from '../../asset/icon/dontworryitsdynamic.svg'
import imgProfile from '../../asset/img/profile.jpg'
import { scrollToElement } from '../utils/scrollToElement'
import '../../css/component/nav.css'
import { useEffect, useState } from 'react'
import useAnimate from '../hook/useAnimate'

export default function Nav({ isNavOpen, setOpen, isTitleInView }) {
  
  const [focusProfile, setFocusProfile] = useState()
  const [Age, setAge] = useState()
  const year = new Date().getFullYear()
  const month = new Date().getMonth()

  const handleSideNavItemCick = (classTocrollTo) => {
    scrollToElement(classTocrollTo);
    setOpen(false);
  }

  const handleCloseNav = () => {
    setOpen(!isNavOpen)
    isNavOpen && setFocusProfile(false)
  }


  useEffect(() => {
    const monthsLeft = month - (7 - 1);
    const age = year - 2001;

    if (monthsLeft < 0)
      setAge({ age: `${age - 1}`, message: ` turning ${age} in ${monthsLeft ^ -1} ${(monthsLeft ^ -1) < 2 ? 'Month' : 'Months'}` });
    else if (monthsLeft === 0)
      setAge({ age: `${age}`, message: ` it's my birth month!` });
    else
      setAge({ age: `${age}`, message: ` ` });
  }, [month, year])

  return (
    <>
      <div className={isNavOpen ? "side-nav" : 'side-nav side-nav-open'}>
        <div className="side-nav-inner" style={{ transform: isNavOpen ? 'translateX(0)' : 'translateX(150%)' }}>
          <IconCross className="menu i" onClick={handleCloseNav} />
          <div className={focusProfile ? "profile-main profile-main-focus" : "profile-main"} >
            <ul className='profile-ul'>
              <IconDontWorryItsDynamic className='itsdynamic-note' />
              <li>Age: <span>{Age?.age}</span><span style={{ fontFamily: 'accent', fontWeight: 900, marginLeft: 2 }}>{Age?.message}</span></li>
              <li>Type Speed: <span>26WPM</span></li>
              <li>Style: <span>{"Minimalistic"}</span></li>
              <li>Height: <span>{"5'9"}</span></li>
            </ul>
            <div className={"profile"} onClick={() => setFocusProfile(!focusProfile)}>
              <img src={imgProfile} alt="profile image" />
              {
                focusProfile ?
                  <IconCollaps className='expand-collaps-icon' /> :
                  <IconExpand className='expand-collaps-icon' />
              }
            </div>
          </div>

          <ul className='nav-ul'>
            <li onClick={() => handleSideNavItemCick('.s1-sec-work')}><span></span>my work<span></span></li>
            <li onClick={() => handleSideNavItemCick('.s2-sec-about')}><span></span>about me<span></span></li>
            <li onClick={() => handleSideNavItemCick('.footer')}><span></span>connect<span></span></li>
            <li onClick={() => handleSideNavItemCick('.s3-sec-cv')}><span></span>my cv<span></span></li>
            <div className="wrap"></div>
          </ul>
        </div>
      </div>

      <nav>
        <div className={isTitleInView ? 'logo' : 'logo hide'}>
          <p>S. Moloto</p>
          <p>dev Portfolio</p>
        </div>
        <div className={`ul-text-icons ${!isTitleInView ? 'minimized' : ''}`}>
          <ul className='ul-text'>
            <li onClick={() => handleSideNavItemCick('.s1-sec-work')}>my work</li>
            <li onClick={() => handleSideNavItemCick('.s2-sec-about')}>about me</li>
            <li onClick={() => handleSideNavItemCick('.footer')}>connect</li>
          </ul>
          <ul className='ul-icons'>
            <li>
              <a href="https://github.com/ljlinen/">
                <IconGithub style={{padding: 5}} />
              </a>
            </li>
            <li>
              <IconMenu onClick={() => setOpen(!isNavOpen)} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
