/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { useState } from "react"
import iconExpand from '../../asset/icon/expand.svg'


export default function WorkCard({ data, i, currentCard, setCurrentCard, currentImgWrap, setCurrentImgWrap }) {
  const [liText, setLiText] = useState();
  const refImgWrap = useRef(null)
  const refWorkCard = useRef(null)
  i = parseInt(i)

  useEffect(() => {

  }, [currentCard])

  const handleClick = () => {
    if (currentCard?.current && currentImgWrap?.current) {
      currentImgWrap.current.style.height = 0;
      if (refImgWrap != currentImgWrap) {
        currentImgWrap.current.firstElementChild.style.opacity = 0;
      }

      refImgWrap.current.style.height = '40vh';
      refImgWrap.current.firstElementChild.style.opacity = 0.35;

      // openworktitle.classList.add('s1-div-work-p-inactive');
      // workTitle.classList.remove('s1-div-work-p-inactive');
    }

    setCurrentCard(refWorkCard)
    setCurrentImgWrap(refImgWrap)
  }

  return (
    <div ref={refWorkCard} className={currentCard?.current === refWorkCard.current ? "s1-div-work-p" : "s1-div-work-p s1-div-work-p-inactive"} onClick={handleClick}>
      <div className="s1-div-iconandpwrap">
        <h3>
          <span className="s1-span-workIndex">{i + 1}</span>
          {data?.title}
        </h3>
        <img src={iconExpand} alt="expand icon" />
      </div>

      <p className="s1-p-hidden">
        {data?.description}
      </p>

      <p>{data?.technologies}</p>

      <div className="s1-div-imgwrap" style={{ height: currentImgWrap?.current && currentImgWrap?.current === refImgWrap.current ? '40vh' : 0 }}>
        <ul className="s1-ul-pcormob" style={{ opacity: currentImgWrap?.current === refImgWrap.current ? .35 : 0 }}>
          {
            data?.links ?
              data.links.map((item, i) => {
                return <li key={i} style={{ color: (item === 'mobile' && !data?.imageSrcDesktop) || (item === 'desktop') ? 'var(--clr-40)' : 'unset' }} onClick={() => setLiText(item)}>
                  {
                    item === 'git repo' ?
                      <a href={data?.repo} target='_blank' className="a-repo">{item}</a> :
                      item === 'mobile' && !data?.imageSrcDesktop ?
                        <>{item}</> :
                        item === 'desktop' ?
                          <>{item}</> :
                          <>item</>
                  }
                </li>
              }) : null
          }
          <div className="wrap"></div>
        </ul>
        <div className="s1-work-workimg" style={{ width: !data.imageSrcDesktop ? '50%' : 'unset' }}>
          {
            data?.imageSrcDesktop ?
              <img src={data?.imageSrcDesktop} alt="desktop-view" /> :
              null
          }

          {
            data?.imageSrcMobile ?
              <img src={data?.imageSrcMobile} alt="mobile-view" style={{ opacity: data?.imageSrcDesktop ? 0 : 'unset', height: data?.imageSrcDesktop ? 0 : liText === 'mobile' ? 'initial' : 'unset' }} /> :
              null
          }
        </div>
      </div>
    </div>
  )
}
