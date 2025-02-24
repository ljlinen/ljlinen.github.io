import '../../css/section/work.css'
import WorkCard from "../component/WorkCard";
import imgDesktopBaking from '../../asset/img/work/bakingtutoring pc.jpg'
import imgMobileBaking from '../../asset/img/work/bakingtutoring mobile.jpg'
import imgMobileMailtoteam from '../../asset/img/work/mailtoteam mobi.jpg'
// import imgDesktopBankroll from '../../asset/img/work/bankroll pc.jpg'
import imgMobileDrivingchool from '../../asset/img/work/drivingschool mobi.jpg'
import imgProdFFS from '../../asset/img/work/prodffs.png'
import imgProdFFSPC from '../../asset/img/work/prodffspc2.png'
import imgMelo from '../../asset/img/work/melodrift.png'
import imgMeloPc from '../../asset/img/work/melodriftpc.png'
import imgNovel from '../../asset/img/work/novel.png'
import imgNovelPc from '../../asset/img/work/novelpc.png'
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
      title: "Audio Hosting & Streaming Plartform",
      description: "",
      technologies: "reactjs honojs cloudflare-kv cloudflare-R2",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcMobile: imgMelo,
      imageSrcDesktop: imgMeloPc,
      site: 'https://melodrift.pages.dev/',
      links: ["desktop", "mobile", "private repo", "visit site"],
      repo: undefined
  },
    {
      title: "Instrumental Ecormmerce Site",
      description: "",
      technologies: "reactjs honojs cloudflare-kv cloudflare-R2",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcMobile: imgProdFFS,
      imageSrcDesktop: imgProdFFSPC,
      site: 'https://prodffs.pages.dev/',
      links: ["desktop", "mobile", "private repo", "visit site"],
      repo: undefined
  },
  {
    title: "Novel Sharing Website",
    description: "",
    technologies: "reactjs honojs cloudflare-kv cloudflare-R2",
    iconSrc: "./src/icon/expand.svg",
    clrDominant: '#0E0C22',
    imageSrcMobile: imgNovel,
    imageSrcDesktop: imgNovelPc,
    // site: 'https://prodffs.pages.dev/',
    links: ["desktop", "mobile", "private repo"],
    repo: undefined
  },
  {
      title: "Gmail & Facebook intergration WebApp",
      description: "A webapp that intergrates fcebook and gmail apis to allow page messages to be recieved via gmail.",
      technologies: "html css javascript mysql expressjs nodejs ",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#fff',
      imageSrcMobile: imgMobileMailtoteam,
      links: ["mobile", "git repo"],
      repo: 'https://github.com/ljlinen/mailtoteam'
  },
  //   {
  //     title: "Personal Finance Stats WebApp",
  //     description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
  //     technologies: "html css javascript nodejs expressjs",
  //     iconSrc: "./src/icon/expand.svg",
  //     clrDominant: '#000',
  //     imageSrcDesktop: imgDesktopBankroll,
  //     links: ["desktop", "git repo"],
  //     repo: 'https://github.com/ljlinen/bankroll'
  // },
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
      
        {
          // Array.from({ length: Math.ceil(data.length / 2) }, (_, i) => (
            <div className="s1-div-main-work" /* key={i} */>
            <div className="s1-div-worklist">
              {
                // data.slice(i * 2, i * 2 + 2)
                data.map((item, i) => (
                <WorkCard 
                  key={i} 
                  data={item} 
                  i={i}
                  currentCard={currentCard} 
                  currentImgWrap={currentImgWrap} 
                  setCurrentCard={setCurrentCard} setCurrentImgWrap={setCurrentImgWrap} />
                ))
              }
            </div>
            </div>
          // ))
        }
    </section>
  )
}
