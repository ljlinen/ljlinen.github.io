import { useEffect, useRef, useState } from 'react'
import '../../css/section/header.css'
import Nav from '../component/Nav'
import { scrollToElement } from '../global/reusable'

export default function Header() {
  const [isNavOpen, setOpen] = useState(false)
  const refcroller = useRef(null);

  useEffect(() => {
    const scroller = refcroller.current
    if(refcroller) {
      const scrollcontent = Array.from(scroller.children)

      scrollcontent.forEach((content) => {
        let clonedcontent = content.cloneNode(true);
        scroller.appendChild(clonedcontent);
      })
    }
  }, [])

  return (
    <>
    <Nav isNavOpen={isNavOpen} setOpen={setOpen} />
    <header>
      <div className="loader">
        <p>Loading...</p>
      </div>

      <div className='banner'>
        <div className="intro">
          <div className="wrapper-1">
            <h1>Sipho&apos;s portfolio</h1>
            <p>&apos;A web and software developer specialising in JavaScript.&apos;</p>
            <input className="btn-my-work" type="button" value="my work" onClick={() => scrollToElement('.s1-sec-work')} />
          </div>
        </div>

        <div className="work-p scroll-container">
          <div className="work-p-wrap design scroll-content" ref={refcroller}>
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
