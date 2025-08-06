import { useEffect, useState } from 'react'
import '../../css/section/header.css'
import IconWork from '../../asset/icon/work.svg'
import Nav from '../component/Nav'
import { scrollToElement } from '../utils/scrollToElement'
import InputButton from '../element/InputButton'
import CurrentSectionIndicator from '../component/CurrentSectionIndicator'
import useAnimate from '../hook/useAnimate'

export default function Header() {
  const [isNavOpen, setOpen] = useState(false)
  const [ref, isInView] = useAnimate({ threshold: 0, root: null, rootMargin: '-20% 0px 0px 0px' })
  const [refTitle, isTitleInView] = useAnimate({ threshold: 0, root: null, rootMargin: '-30% 0px 0px 0px' })

  return (
    <>
      <Nav isNavOpen={isNavOpen} setOpen={setOpen} isTitleInView={isTitleInView} />
      <CurrentSectionIndicator />
      <header>
        <div className="hero-shape" style={{ backgroundColor: 'hsl(var(--clr-40), 11%)', bottom: '-30vh', left: '-5vw', zIndex: 4 }}>
        </div>
        <div className="body">
          <div className="achievements">
            <div ref={ref} className={`achievement ${isInView ? 'show' : ''}`}>
              <h2><span>6+</span> Projects</h2>
              <p>across frontend, backend, and mobile development.</p>
            </div>
            <div className={`achievement ${isInView ? 'show' : ''}`}>
              <h2 className='two'><span>2</span> Years</h2>
              <p>of practical, hands-on development experience.</p>
            </div>
            <div className={`achievement ${isInView ? 'show' : ''}`}>
              <h2 className='three'>dual-taught</h2>
              <p>Combined IT studies with self-driven learning.</p>
            </div>
          </div>
          <div className="intro">
            <h1 ref={refTitle}>A Fullstack Developer & Problem Solver</h1>
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
