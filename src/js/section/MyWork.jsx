import '../../css/section/work.css'
import WorkCard from "../component/WorkCard";
import { useEffect, useState } from "react";
import workData from '../hook/workData';

export default function MyWork() {
  const [currentImgWrap, setCurrentImgWrap] = useState();
  const [batches, setBatches] = useState();
  const data = workData();

  useEffect(() => {
    if(data?.length) {
      const arrays = []
      const arrWork = [...data]

      for(let i = 0; i < arrWork.length; i += 3) {
        const sliced = arrWork.slice(i, i + 3)
        arrays.push(sliced)
      }

      setBatches(arrays)
    } 
    console.count('render done');
  }, [])

  useEffect(() => {
    console.log(batches);
  }, [batches])



  return (
    <section className="s1-sec-work">
      {
        batches?.length ?
        batches.map((batch, i) => {            
          return <div className="two-column" key={'batch-' + i}>
            <div className="type-lockup">
              <h2>{i === 0 ? "What I built" : "More projects"}</h2>
              <p>{i === 0 ? "Below is a collection showcasing projects i have built with practical solutions and responsive design. Mobile and desktop views can be toggled to see how each project adapts across devices." : "Projects include live demos and public GitHub repositories.Private repositories accessible on request."}</p>
            </div>
            <div className="scroll-container">
              <div className="scroll-contents">
                {
                  batch?.length ?
                  batch.map((item, j) => {
                      return <WorkCard
                        key={j}
                        data={item}
                        i={j}
                        currentImgWrap={currentImgWrap}
                        setCurrentImgWrap={setCurrentImgWrap} />
                  }) : null
                }
              </div>
            </div>
          </div>
        }) :
        <p>it seems there was not any data to render here</p>
      }
    </section>
  )
}
