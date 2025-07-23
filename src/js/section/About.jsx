import IconCode from '../../asset/icon/code.svg'
import IconSchool from '../../asset/icon/school.svg'
import IconSuitcase from '../../asset/icon/suitcase.svg'
import '../../css/section/about.css'

export default function About() {
  return (
    <section className="s2-sec-about">
      <div className="about-me">
        <div className="top">
          <div className="summary">
            <h2>summary about myself</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste in, obcaecati molestiae amet architecto explicabo itaque tempora similique odit quae debitis suscipit
            quas officia beatae laudantium hic laborum ratione accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste in, obcaecati molestiae amet architec
            to explicabo itaque tempora similique odit quae debitis suscipit quas officia beatae laudantium hic laborum ratione accusamus.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="experience">
            <h2>previous experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste in, obcaecati molestiae amet architecto explicabo itaque tempora similique odit quae debitis suscipit</p>
          </div>
          <div className="education">
            <h2>education</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste in, obcaecati molestiae amet architecto explicabo itaque tempora similique odit quae debitis suscipit</p>
          </div>
        </div>
      </div>
    </section>
  )
}
