import { useEffect, useRef, useState } from 'react'
import '../../css/component/currentsectionindicator.css'
export default function CurrentSectionIndicator() {

  const [sections, setSection] = useState({
    header: { element: document.body.querySelector('header'), isVisible: true },
    work: { element: document.body.querySelector('.s1-sec-work')},
    about: { element: document.body.querySelector('.s1-sec-about')},
    resume: { element: document.body.querySelector('.s1-sec-about')}
  })

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    // entries.forEach(item)
  }, {threshold: .5})

  useEffect(() => {
    Object.values(sections).forEach((item) => {
      if(item.element) { 
        observer.observe(item.element)
      }
    })
  }, [sections])

  
  return (
    <div className='current-section-indicator'>
      <span className={sections.header.isVisible ? 'current-section' : ''}></span>
      <span className={sections.work.isVisible ? 'current-section' : ''}></span>
      <span className={sections.about.isVisible ? 'current-section' : ''}></span>
      <span className={sections.resume.isVisible ? 'current-section' : ''}></span>
    </div>
  )
}
