/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { useState } from "react"
import IconNext from '../../asset/icon/chevron-up.svg'
import IconPrev from '../../asset/icon/chevron-up.svg'


export default function WorkCard({ data, i }) {
  const [liText, setLiText] = useState();
  const [scrollPos, setScrollPos] = useState({ top: true, bottom: undefined });


  const scrollImgRef = useRef(null)
  const refWorkCard = useRef(null)
  const refImgMobile = useRef(null)
  const refImgDesktop = useRef(null)
  const refMobiLi = useRef(null)
  const refDeskLi = useRef(null)
  const refSwitchBorder = useRef(null)
  i = parseInt(i)

  useEffect(() => {

    if(liText === 'mobile') {
      const mobileLi = refMobiLi.current
      refSwitchBorder.current.style.transform = `translateX(${mobileLi.offsetLeft - 4}px)`
      refSwitchBorder.current.style.width = `${mobileLi.scrollWidth}px`
    }
    if(liText === 'desktop') {
      const desktopLi = refDeskLi.current
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

  useEffect(() => {
    if(scrollImgRef?.current) {
      scrollImgRef.current.scrollTop = '800px'
    }
    
    const el = scrollImgRef.current;
    if (!el) return;

    function onScroll() {
      setScrollPos({
        top: el?.scrollTop === 0,
        bottom: el && el.scrollTop + el.clientHeight >= el.scrollHeight - 1,
      }); 
      console.log('set b and t: ', el?.scrollTop === 0, el && el.scrollTop, '+', el.scrollHeight, '>=', el.scrollHeight - 1);
    }

    el.addEventListener('scroll', onScroll);
    onScroll()

    return () => el.removeEventListener('scroll', onScroll);
  }, [])


  const handleScrollForUl = (e) => {
    
    const scrollTop = e.target.scrollTop
    const ul = refSwitchBorder.current.parentElement
    if (scrollTop > 2) {
      ul.style.opacity = 0;
    } else {
      ul.style.opacity = .7;
    }
  }

  const handleSetText = (item) => {
    if(!(['git repo', '(private repo)', 'visit site'].includes(item))) setLiText(item)
  }

  const handleScrollImage = (direction) => {
    switch (direction) {
      case 'up':
        scrollImgRef?.current?.scrollTo({ top: scrollImgRef.current.scrollTop -= 300});
        break;
      case 'down':
        scrollImgRef?.current?.scrollTo({ top: scrollImgRef.current.scrollTop += 300 });
        break; 
      default:
        break;
    }
  }
  

  return (
    <div ref={refWorkCard} className="s1-div-work-p">
      <div className="s1-div-iconandpwrap">
        <h3 className="s1-span-workIndex" style={{textAlign: 'center'}}>{i + 1}</h3>
        <h3>{data?.title}</h3>
      </div>

      <p className="s1-p-hidden">
        {data?.description}
      </p>

      <ul className="tech-ul">
        {
          data.technologies.split(" ").map((item, i) => <li key={'tech' + i}>{item}</li>)
        }
      </ul>

      <div className="s1-div-imgwrap">
        <ul className="s1-ul-pcormob">
          {
            data?.links ?
              data.links.map((item, i) => {
                return <li 
                        ref={item === 'desktop' ? refDeskLi : item === 'mobile' ? refMobiLi : null}  
                        className={`${liText === item ? 'li-active' : 'li-inactive'}
                        ${
                          ['git repo', 'visit site'].includes(item)
                            ? (item === 'git repo' && data?.repo) || (item === 'visit site' && data?.site)
                              ? 'a-repo'
                              : 'a-repo a-repo-disabled'
                            : ''
                        }`
                      } 
                        key={i} onClick={() => handleSetText(item)}>

                      {
                        item === 'git repo' ?
                          <a href={data?.repo} target='_blank'>{item}</a> :
                          item === 'visit site' ?
                          <a href={data?.site} target='_blank'>{item}</a> :
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
        <div ref={scrollImgRef} className="s1-img-workimg" style={{ width: liText === 'mobile' ? '50%' : '100%' }}  onScroll={handleScrollForUl}>
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
        <div className={`scroll-buttons ${scrollPos.bottom ? 'bottom' : ''} ${scrollPos.top  ? 'top' : ''}`} >
            <IconNext onClick={() => handleScrollImage("up")} />
            <IconPrev style={{rotate: '180deg'}} onClick={() => handleScrollImage("down")} />
        </div>  
      </div>
    </div>
  )
}
