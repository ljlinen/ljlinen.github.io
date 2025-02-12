/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { useState } from "react"
import iconExpand from '../../asset/icon/expand.svg'
import iconCollaps from '../../asset/icon/collaps.svg'


export default function WorkCard({ data, i, currentCard, setCurrentCard }) {
  const [liText, setLiText] = useState();
  const [isCurrentCard, SetIsCurrentCard] = useState();

  const refWorkCard = useRef(null)
  const refImgMobile = useRef(null)
  const refImgDesktop = useRef(null)
  const refSwitchBorder = useRef(null)
  i = parseInt(i)


  useEffect(() => {
    console.log(i, liText);
  }, [liText])


  useEffect(() => {
    if(currentCard) {
      if(currentCard?.current === refWorkCard.current) {
        SetIsCurrentCard(true)
      } else {
        SetIsCurrentCard(false)
      }
    } else if(i  === 0) {
      SetIsCurrentCard(true)
    } else {
      SetIsCurrentCard(false)
    } 
    console.log(refSwitchBorder.current.previousElementSibling.previousElementSibling.scrollWidth);
    
  }, [currentCard, i])

  useEffect(() => {

    if(liText === 'mobile') {
      const mobileLi = refSwitchBorder.current.previousElementSibling.previousElementSibling;
      refSwitchBorder.current.style.transform = `translateX(${mobileLi.offsetLeft - 4}px)`
      refSwitchBorder.current.style.width = `${mobileLi.scrollWidth}px`
    }
    if(liText === 'desktop') {
      const desktopLi = refSwitchBorder.current.parentElement.firstElementChild
      refSwitchBorder.current.style.transform = `translateX(0px)`
      refSwitchBorder.current.style.width = `${desktopLi.scrollWidth}px`
    }

    if(!liText) {
      if(refImgDesktop?.current && refImgMobile?.current) {
        setLiText('desktop')
      } else if(refImgDesktop?.current) {
        setLiText('desktop')
      } else if(refImgMobile?.current) {
        setLiText('mobile')
      }
    }
  }, [liText])


  const handleClick = () => {
    setCurrentCard(refWorkCard)
  }

  const handleScrollForUl = (e) => {
    
    const scrollTop = e.target.scrollTop
    const ul =     refSwitchBorder.current.parentElement
    if (scrollTop > 2) {
      ul.style.opacity = 0;
    } else {
      ul.style.opacity = .7;
    }
  }

  const handleSetText = (item) => {
    if(!(item === 'git repo')) setLiText(item)
  }


  return (
    <div ref={refWorkCard} className={isCurrentCard ? "s1-div-work-p" : "s1-div-work-p s1-div-work-p-inactive"} onClick={handleClick}>
      <div className="s1-div-iconandpwrap">
        <h3>
          <span className="s1-span-workIndex">{i + 1}</span>
          {data?.title}
        </h3>
        <img src={isCurrentCard ? iconExpand : iconCollaps} alt="expand icon" />
      </div>

      <p className="s1-p-hidden">
        {data?.description}
      </p>

      <p>{data?.technologies}</p>

      <div className={isCurrentCard ? "s1-div-imgwrap" : "s1-div-imgwrap s1-div-imgwrap-hidden"}>
        <ul className="s1-ul-pcormob">
          {
            data?.links ?
              data.links.map((item, i) => {
                return <li  className={liText === item ? 'li-active' : 'li-inactive'} key={i} onClick={() => handleSetText(item)}>
                  {
                    item === 'git repo' ?
                      <a href={data?.repo} target='_blank' className="a-repo">{item}</a> :
                      item === 'mobile' && !data?.imageSrcDesktop ?
                        <>{item}</> :
                        item === 'desktop' ?
                          <>{item}</> :
                          <>{item}</>
                  }
                </li>
              }) : null
          }
          <div className="wrap" ref={refSwitchBorder}></div>
        </ul>
        <div className="s1-img-workimg" style={{ width: liText === 'mobile' ? '50%' : '100%' }}  onScroll={handleScrollForUl}>
          {
            data?.imageSrcDesktop ?
              <img className={liText === 'desktop' ? 'img-active' : 'img-inactive'} ref={refImgDesktop}  src={data?.imageSrcDesktop} alt="desktop-view" /> :
              null
          }

          {
            data?.imageSrcMobile ?
              <img className={liText === 'mobile' ? 'img-active' : 'img-inactive'} ref={refImgMobile} src={data?.imageSrcMobile} alt="mobile-view" /> :
              null
          }
        </div>
      </div>
    </div>
  )
}
