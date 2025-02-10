import WorkCard from "../component/WorkCard";
import imgDesktopBaking from '../../asset/img/work/bakingtutoring pc.jpg'
import imgMobileBaking from '../../asset/img/work/bakingtutoring mobile.jpg'
import imgMobileMailtoteam from '../../asset/img/work/mailtoteam mobi.jpg'
import imgDesktopBankroll from '../../asset/img/work/bankroll pc.jpg'
import imgMobileDrivingchool from '../../asset/img/work/drivingschool mobi.jpg'
import { useState } from "react";

export default function MyWork() {
  const [currentCard, setCurrentCard] = useState();
  const [currentImgWrap, setCurrentImgWrap] = useState();
  // Work Data
const data = [
  {
      title: "Baking Tutoring Company",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcDesktop: imgDesktopBaking,
      imageSrcMobile: imgMobileBaking,
      links: ["desktop", "mobile", "git repo"],
      repo: 'https://github.com/ljlinen/bakingtutoring'
  },
  {
      title: "Gmail & FB API WebApp",
      description: "A webapp that intergrates fcebook and gmail apis to allow page messages to be recieved via gmail.",
      technologies: "html css javascript mysql expressjs nodejs ",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#fff',
      imageSrcMobile: imgMobileMailtoteam,
      links: ["mobile", "git repo"],
      repo: 'https://github.com/ljlinen/mailtoteam'
  },
    {
      title: "Personal Finance Stats WebApp",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#000',
      imageSrcDesktop: imgDesktopBankroll,
      links: ["desktop", "git repo"],
      repo: 'https://github.com/ljlinen/bankroll'
  },
  {
      title: "Driving School Info Site",
      description: "An information website for a driving school company.",
      technologies: "html css javascript nodejs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: 'blue',
      imageSrcMobile: imgMobileDrivingchool,
      links: ["mobile", "git repo"],
      repo: 'https://github.com/ljlinen/drivingschool'
  }
  // Add more objects as needed
];

  return (
    <section className="s1-sec-work">
      <div className="desc-main">
        <h2>My Work</h2>
        
        <p className="desc">below are some of the projects I worked on.
          i have replaced some of the clients&apos; personal info.
        </p>
      </div>
      
      <div className="s1-div-main-work">
        <div className="s1-div-worklist">
          {
            data.map((item, i) => {
              return  <WorkCard 
                        key={i} 
                        data={item} 
                        i={i}
                        currentCard={currentCard} 
                        currentImgWrap={currentImgWrap} 
                        setCurrentCard={setCurrentCard} setCurrentImgWrap={setCurrentImgWrap} />
            })
          }
        </div>
      </div>
    </section>
  )
}
