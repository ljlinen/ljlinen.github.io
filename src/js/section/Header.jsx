import { useEffect, useState } from 'react'
import '../../css/section/header.css'
import IconWork from '../../asset/icon/work.svg'
import imgDeveloper from '../../asset/img/profilepixelated.webp'
import imgHired from '../../asset/img/hired.webp'
import gifCat from '../../asset/gif/cat.webp'
import Nav from '../component/Nav'
import { scrollToElement } from '../utils/scrollToElement'
import InputButton from '../element/InputButton'
import CurrentSectionIndicator from '../component/CurrentSectionIndicator'
import useAnimate from '../hook/useAnimate'
import useIsMounted from '../hook/useIsMounted'

export default function Header() {
  const { isMounted } = useIsMounted()
  const [isNavOpen, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(!(document.body.clientWidth > 550))
  const [isTitleWordBroke, setIsTitleWordBroke] = useState(document.body.clientWidth < 850)

  const [imagesLoaded, setImagesLoaed] = useState({
    hired: false,
    developer: false
  })

  const [ref, isInView] = useAnimate(
    isMobile ? 
    { threshold: 0, root: null, rootMargin: '-15% 0px 0px 0px' } :
    { threshold: 0, root: null, rootMargin: '-20% 0px 0px 0px' }
  )
  const [refTitle, isTitleInView] = useAnimate({ threshold: 0, root: null, rootMargin: '-30% 0px 0px 0px' })

  useEffect(() => {
    const checkViewPort = () => {
      setIsMobile(!(document.body.clientWidth > 550))
      setIsTitleWordBroke(document.body.clientWidth < 850)
    }
    window.addEventListener('resize', checkViewPort)
  }, [])
  

  return (
    <>
      <Nav isNavOpen={isNavOpen} setOpen={setOpen} isTitleInView={isTitleInView} />
      {
        !isMobile
        ? <CurrentSectionIndicator />
        : null
      }
      <header>
        <div className="body">
          <div className={isMobile ? "achievements" : "achievements desktop"}>
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
            <h1 className={isMounted ? 'show' : ''} ref={refTitle}>
              <span>
                <span className="fullstack-wrap">
                  A 
                  <span className='sta-wrap'>
                    <img src={gifCat} alt="cat" loading='lazy' />
                    {'\u00A0Full'}
                  </span>
                  stack
                </span>
                {isTitleWordBroke ? 'Developer' : '\u00A0Developer'}
              </span>
              {
                !isMobile ?
                <span>& Problem Solver</span> :
                null
              }
            </h1>
            <p className={isMounted ? 'show' : ''}>A versatile fullstack developer blending foundational IT education, independent learning, and consistent freelance experience delivering real solutions for small business clients.</p>
            <InputButton className={isMounted ? "btn-my-work show" : "btn-my-work"} value={"see what i've built"}
              handle={() => scrollToElement('.s1-sec-work')} color={'var(--clr-10-2)'}
              style={{ display: 'flex', gap: 15 }}>
              <IconWork color="var(--clr-10-2)" />
            </InputButton>
          </div>
        </div>
        <div className="background">
          <img className={imagesLoaded?.developer ? 'show' : ''} src={imgDeveloper} loading='lazy' onLoad={() => setImagesLoaed(p => ({...p, developer: true}))} />
          <img className={imagesLoaded?.hired ? 'show' : ''} src={imgHired} loading='lazy' onLoad={() => setImagesLoaed(p => ({...p, hired: true}))} />
        </div>
      </header>
        <a className={`linkedin-link ${isMounted ? 'show' : ''}`} href="www.linkedin.com/in/ljlinen">
          <p>www.linkedin.com/in/ljlinen</p>
        </a>
    </>
  )
}
