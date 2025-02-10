import { useState } from 'react'
import '../../css/section/header.css'
import Nav from '../component/Nav'
export default function Header() {
  const [isNavOpen, setOpen] = useState(false)
  return (
    <>
    <Nav isNavOpen={isNavOpen} setOpen={setOpen} />
    <header style={{filter: isNavOpen ? 'blur(3px)' : 'none'}}>
      <div className="loader">
        <p>Loading...</p>
      </div>

      <div className='banner'>
        <div className="intro">
          <div className="wrapper-1">
            <h1>Linen&apos;s portfolio</h1>
            <p>&apos;A web and software developer specialising in JavaScript.&apos;</p>
            <input className="btn-my-work" type="button" value="my work"></input>
          </div>
        </div>

        <div className="work-p scroll-container">
          <div className="work-p-wrap design scroll-content">
            <p>JavaScript</p>
            <p>Frontend</p>
            <p>Nodejs</p>
            <p>Backend</p>
            <p>Expressjs</p>
            <p>ReactNative</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>MySQL</p>
            <p>Git</p>
            <p>Figma</p>
            <p>Aws</p>
            <p>Linux</p>
            <p>Ubuntu</p>
            <p>Server</p>
            <p>MySQLServer</p>
          </div>
        </div>
      </div>
    </header>
  </>
  )
}
