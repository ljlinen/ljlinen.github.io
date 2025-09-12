import { useEffect, useRef, useState } from 'react'
import '../../css/component/currentsectionindicator.css'
import useIsMounted from '../hook/useIsMounted'
export default function CurrentSectionIndicator() {

  const { isMounted } = useIsMounted()

  const [sections, setSection] = useState({
    header: { element: document.body.querySelector('header'), isVisible: true },
    work: { element: document.body.querySelector('.s1-sec-work')},
    about: { element: document.body.querySelector('.s1-sec-about')},
    resume: { element: document.body.querySelector('.s1-sec-about')}
  })

  const observer = new IntersectionObserver((entries) => {
    console.log('observed a change');
    // entries.forEach(item)
  }, {threshold: .5})

  const Observe = () => {
    console.log('running observe func');
    
    Object.values(sections).forEach((item) => {
    console.log('trying to observe');
      if(item.element) { 
        observer.observe(item.element)
        console.log('observing', item.element);
      }
    })    
  }

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', Observe)
    return () => document.removeEventListener('DOMContentLoaded', Observe)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  return (
    <div className={`current-section-indicator ${isMounted ? 'show' : ''}`}>
      <span className={sections.header.isVisible ? 'current-section' : ''}></span>
      <span className={sections.work.isVisible ? 'current-section' : ''}></span>
      <span className={sections.about.isVisible ? 'current-section' : ''}></span>
      <span className={sections.resume.isVisible ? 'current-section' : ''}></span>
    </div>
  )
}
