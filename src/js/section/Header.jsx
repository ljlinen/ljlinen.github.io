import { useState } from 'react'
import '../../css/section/header.css'
import IconWork from  '../../asset/icon/work.svg'
import imgBackground from '../../asset/img/design-deck-nzIMNRAB-TI-unsplash.jpg'
import gifCoding from '../../asset/gif/coding.gif'
import Nav from '../component/Nav'
import { scrollToElement } from '../global/reusable'
import InputButton from '../element/InputButton'

export default function Header() {
  const [isNavOpen, setOpen] = useState(false)


  return (
    <>
      <Nav isNavOpen={isNavOpen} setOpen={setOpen} />
      <header>
        <div className="hero-shape" style={{backgroundColor: 'var(--clr-40)', bottom: '-30vh', left: '-5vw', zIndex: 4}}>
        </div>
        <div className="loader">
          <p>Loading...</p>
        </div>
        <div className="body">
          <div className="achievements">
            <div>
              <h2>Over 9</h2>
              <p>Websites Created</p>
            </div>
            <div>
              <h2>2 Years</h2>
              <p>Hands-on Experience</p>
            </div>
              <div>
              <h2>Self taught</h2>
              <p>Passionently Learning</p>
            </div>
          </div>
          <div className="intro">
                <h1>JavaScript Dev & Problem Solver</h1>
                <p>I&apos;m a web and software developer specializing in JavaScript, creating dynamic, high-performance websites and applications tailored to your needs</p>
                <InputButton
                  className="btn-my-work" value={"see what i've built"}
                  handle={() => scrollToElement('.s1-sec-work')} color={'var(--clr-10-2)'}
                  style={{display: 'flex', gap: 15}}>
                  <IconWork color="var(--clr-10-2)" />
                </InputButton>
          </div>
        </div>
      </header>
    </>
  )
}
