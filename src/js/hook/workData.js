import imgDesktopBaking from '../../asset/img/work/bakingtutoring pc.jpg'
import imgMobileBaking from '../../asset/img/work/bakingtutoring mobi.jpg'
import imgDesktopInterstella from '../../asset/img/work/interstella pc.jpg'
import imgMobileInterstella from '../../asset/img/work/interstella mobi.jpg'
import imgMobileMailtoteam from '../../asset/img/work/mailtoteam mobi.jpg'
// import imgDesktopBankroll from '../../asset/img/work/bankroll pc.jpg'
import imgMobileDrivingchool from '../../asset/img/work/drivingschool mobi.jpg'
import imgProdFFS from '../../asset/img/work/prodffs.png'
import imgProdFFSPC from '../../asset/img/work/prodffspc.png'
import imgMelo from '../../asset/img/work/melodrift.png'
import imgMeloPc from '../../asset/img/work/melodriftpc.png'
import imgNovel from '../../asset/img/work/novel.png'
import imgNovelPc from '../../asset/img/work/novelpc.png'

export default function workData() {

  const workData = [
  {
      title: "Interstella Portfolio & Appointment Booking Website",
      description: "",
      technologies: "react nodejs javascript",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcDesktop: imgDesktopInterstella,
      imageSrcMobile: imgMobileInterstella,
      site: 'https://ljlinen.github.io/interstella/',
      links: ["desktop", "mobile", "git repo", "visit site"],
      repo: 'https://github.com/ljlinen/interstella'
  },
    {
      title: "Audio Streaming Plartform",
      description: "",
      technologies: "reactjs honojs cloudflare-kv cloudflare-R2",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcMobile: imgMelo,
      imageSrcDesktop: imgMeloPc,
      site: 'https://melodrift.pages.dev/',
      links: ["desktop", "mobile", "git repo", "visit site"],
      repo: 'https://github.com/ljlinen/melodrift'
  },
    {
      title: "Instrumental Selling Website",
      description: "",
      technologies: "reactjs honojs cloudflare-kv cloudflare-R2",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcMobile: imgProdFFS,
      imageSrcDesktop: imgProdFFSPC,
      site: 'https://prodffs.pages.dev/',
      links: ["desktop", "mobile", "(private repo)", "visit site"],
      repo: undefined
  },
  {
      title: "Baking Program Website",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcDesktop: imgDesktopBaking,
      imageSrcMobile: imgMobileBaking,
      links: ["desktop", "mobile", "git repo"],
      repo: 'https://github.com/ljlinen/bakingtutoring'
  },
  // {
  //   title: "Novels Sharing Website",
  //   description: "",
  //   technologies: "reactjs honojs cloudflare-kv cloudflare-R2",
  //   iconSrc: "./src/icon/expand.svg",
  //   clrDominant: '#0E0C22',
  //   imageSrcMobile: imgNovel,
  //   imageSrcDesktop: imgNovelPc,
  //   // site: 'https://prodffs.pages.dev/',
  //   links: ["desktop", "mobile", "(private repo)"],
  //   repo: undefined
  // },
  {
      title: "Send Email Via Gmail Api",
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
  return workData
}
