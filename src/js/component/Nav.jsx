import iconMenu from '../../asset/icon/menu.svg'
import iconCross from '../../asset/icon/cross.svg'
import imgProfile from '../../asset/img/profile.jpeg'
export default function Nav({isNavOpen, setOpen}) {
  

  return (
    <>
      <div className="side-nav" style={{transform: isNavOpen ? 'translateX(0)' : 'translateX(150%)'}}>
              <img className="menu i" src={iconCross} alt="Menu-Cancel" onClick={() => setOpen(!isNavOpen)} />
        <div className="profile">
          <img src={imgProfile} alt="profile image" />
        </div>
        <ul>
          <li>my work</li>
          <li>about me</li>
          <li>connect</li>
          <div className="wrap">
          </div>
        </ul>
      </div>

      
      <nav>
        <div className="nav-nav">
          <ul>
            <li>LinenDev</li>
          </ul>

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
