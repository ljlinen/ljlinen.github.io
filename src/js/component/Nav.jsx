import IconMenu from '../../asset/icon/menu.svg'
import IconCross from '../../asset/icon/cross.svg'
import IconExpand from '../../asset/icon/expand.svg'
import IconCollaps from '../../asset/icon/collaps.svg'
import IconDontWorryItsDynamic from '../../asset/icon/dontworryitsdynamic.svg'
import imgProfile from '../../asset/img/profile.jpeg'
import { scrollToElement } from '../global/reusable'
import '../../css/component/nav.css'
import { useEffect, useState } from 'react'
export default function Nav({isNavOpen, setOpen}) {

  const [focusProfile, setFocusProfile] = useState()
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const [Age, setAge] = useState()


  const handleSideNavItemCick = (classTocrollTo) => {
    scrollToElement(classTocrollTo);
    setOpen(!isNavOpen);
  }

  const handleCloseNav = () => {
    setOpen(!isNavOpen)
    isNavOpen && setFocusProfile(false)
  }


  useEffect(() => {
    const monthsLeft = month - (7-1)
    const age = year - 2001

    console.log('month is ', month);''
      if(monthsLeft < 0)
        setAge({age: `${age - 1}`, message:  ` ${age} in ${monthsLeft ^ -1} Months`})
      else if(monthsLeft === 0)
        setAge({age: `${age}`, message:  ` it's my birth month!`})
      else
        setAge({age: `${age}`, message:  ` `})
  }, [month, year])

  useEffect(() => {
    console.log(focusProfile);
  }, [focusProfile])

  return (
    <>
      <div className={isNavOpen ? "side-nav" : 'side-nav side-nav-open'}>
        <div className="side-nav-inner" style={{transform: isNavOpen ? 'translateX(0)' : 'translateX(150%)'}}>
                <IconCross className="menu i" onClick={handleCloseNav} />
          <div className={focusProfile ? "profile-main profile-main-focus" : "profile-main"} >
            <ul className='profile-ul'>
              <IconDontWorryItsDynamic className='itsdynamic-note' />
              <li>Age: <span>{Age?.age}</span><span style={{textDecoration: 'underline'}}>{Age?.message}</span></li>
              <li>Type Speed: <span>26WPM</span></li>
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
            <li onClick={() => handleSideNavItemCick('.about-me')}><span></span>about me<span></span></li>
            <li onClick={() => handleSideNavItemCick('.footer')}><span></span>connect<span></span></li>
            <div className="wrap"></div>
          </ul>
        </div>
      </div>

      
      <nav>
        <div className="nav-nav">
            <p className='logo'>Sipho&apos;s Portfolio</p>

          <ul>
            <li>
              <IconMenu className="menu i" onClick={() => setOpen(!isNavOpen)} />
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
