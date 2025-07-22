import { useState } from 'react'
import '../../css/section/header.css'
import IconWork from '../../asset/icon/work.svg'
import imgBackground from '../../asset/img/profile.png'
import Nav from '../component/Nav'
import { scrollToElement } from '../utils/scrollToElement'
import InputButton from '../element/InputButton'
import CurrentSectionIndicator from '../component/CurrentSectionIndicator'

export default function Header() {
  const [isNavOpen, setOpen] = useState(false)


  return (
    <>
      <Nav isNavOpen={isNavOpen} setOpen={setOpen} />
      <CurrentSectionIndicator />
      <header>
        <div className="hero-shape" style={{ backgroundColor: 'hsl(var(--clr-40), 20%)', bottom: '-30vh', left: '-5vw', zIndex: 4 }}>
        </div>
        <div className="body">
          <div className="achievements">
            <div>
              <h2><span>9+</span> Projects</h2>
              <p>across frontend, backend, and mobile development.</p>
            </div>
            <div>
              <h2><span>2</span> Years of</h2>
              <p>of practical, hands-on development experience.</p>
            </div>
            <div>
              <h2>dual-taught</h2>
              <p>Combined IT studies with self-driven learning.</p>
            </div>
          </div>
          <div className="intro">
            <h1>A JavaScript Developer & Problem Solver</h1>
            <p>A versatile fullstack developer blending foundational IT education, independent learning, and consistent freelance experience delivering real solutions for small business clients.</p>
            <InputButton className="btn-my-work" value={"see what i've built"}
              handle={() => scrollToElement('.s1-sec-work')} color={'var(--clr-10-2)'}
              style={{ display: 'flex', gap: 15 }}>
              <IconWork color="var(--clr-10-2)" />
            </InputButton>
          </div>
        </div>
      </header>
    </>
  )
}
