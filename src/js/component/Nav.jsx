import IconGithub from '../../asset/icon/github.svg'
import IconMenu from '../../asset/icon/burger-menu-svgrepo-com.svg'
import IconCross from '../../asset/icon/cross.svg'
import IconExpand from '../../asset/icon/expand.svg'
import IconCollaps from '../../asset/icon/collaps.svg'
import IconLogo from '../../asset/icon/logo.svg'
import IconDontWorryItsDynamic from '../../asset/icon/dontworryitsdynamic.svg'
import imgProfile from '../../asset/img/profile.jpg'
import { scrollToElement } from '../utils/scrollToElement'
import '../../css/component/nav.css'
import { useEffect, useState } from 'react'

export default function Nav({ isNavOpen, setOpen, isTitleInView }) {
  
  const [focusProfile, setFocusProfile] = useState()
  const [isDomLoaded, setDomLoaded] = useState()
  const [showNav, setShowNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  // Initial load animation
  useEffect(() => {
    setShowNav(true);
    const timeout = setTimeout(() => setInitialLoad(false), 1500); // 1s initial load
    return () => clearTimeout(timeout);
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        // scrolling down
        setShowNav(false);
      } else if(currentY <= 150) {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
  
  useEffect(() => {
    setDomLoaded(true)
  }, [])


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
            <li onClick={() => handleSideNavItemCick('.s3-sec-cv')}><span></span>resume<span></span></li>
            <div className="wrap"></div>
          </ul>
        </div>
      </div>

      <nav>
        <div className={isTitleInView ? 'logo' : 'logo hide'}>
          <IconLogo />
          <span>
            <p>Moloto</p>
            <p>dev</p>
          </span>
        </div>
        <div className={`ul-text-icons ${initialLoad ? 'initial' : 'min-max'}`} style={{boxShadow: showNav ? 'rgb(0 0 0 / 16%) 4px 14px 26px 0px' : 'rgb(0 0 0 / 0) 4px 18px 0px 0px', backgroundColor: 'transparent'}}>
          <ul className={`ul-text ${initialLoad ? 'initial' : 'min-max'}`} style={{opacity: showNav ? .8 : 0, pointerEvents: 'none'}}>
            <li onClick={() => handleSideNavItemCick('.s1-sec-work')}>my work</li>
            <li onClick={() => handleSideNavItemCick('.s2-sec-about')}>about me</li>
            <li onClick={() => handleSideNavItemCick('.footer')}>connect</li>
          </ul>
          <ul className={`ul-icons ${isDomLoaded ? 'show' : ''}`}>
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
