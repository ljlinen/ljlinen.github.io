import '../../css/section/work.css'
import WorkCard from "../component/WorkCard";
import { useState } from "react";
import workData from '../hook/workData';

export default function MyWork() {
  const [currentImgWrap, setCurrentImgWrap] = useState();
  const data = workData();

  return (
    <section className="s1-sec-work">
      <div className="hero-shape" style={{ backgroundColor: 'hsl(var(--clr-40), 20%)', top: '-20vh', left: '-5vw' }}>
      </div>
      <div className="desc-main">
        <div className="head">
          <h2>My Work</h2>
          <p className="desc">below are some of the projects I&apos;ve worked on. i may replace some of the clients&apos; personal info.
          </p>
        </div>
      </div>

      {
        <div className="s1-div-main-work" /* key={i} */>
          <div className="s1-div-worklist">
            {
              data.map((item, i) => (
                <WorkCard
                  key={i}
                  data={item}
                  i={i}
                  currentImgWrap={currentImgWrap}
                  setCurrentImgWrap={setCurrentImgWrap} />
              ))
            }
          </div>
        </div>
      }
    </section>
  )
}
