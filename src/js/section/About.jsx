import IconCode from '../../asset/icon/code.svg'
import IconSchool from '../../asset/icon/school.svg'
import IconSuitcase from '../../asset/icon/suitcase.svg'
import '../../css/section/about.css'

export default function About() {
  return (
    <section className="about-me">
        <h2>about me</h2>
        <p className="desc">Find basic information about my career journey and my educational background.</p>

        <div className="wrap">
          <div className="about-p">
            <div>
              <h3>Skills</h3>
              <IconCode />
            </div>

            <ul className="b">
              <li>Frontend <span>77%</span></li>
              <li>Backend <span>56%</span></li>
            </ul>

            <p>I possess strong skills in HTML, CSS, JavaScript for frontend. For backend development, i have experience using Node.js, Express and MySQL for database. Additionally, I am proficient in React Native for developing mobile applications. Finally, Git and Figma as my bonus skills.</p>
          </div>

          <div className="about-p">
            <div>
              <h3>Education</h3>
              <IconSchool />
            </div>

            <ul className="b">
              <li>HC in IT <span>NQF5</span></li>
              <li>Matric NSC</li>
            </ul>

            <p>I currently hold a higher cirtificate in information technology as my highest education level acquired. Due to lack of finance, i am currently unable to further my studies. Although i do plan on doing so as soon as i am financially stable.</p>
          </div>

          <div className="about-p">
            <div>
              <h3>Experience</h3>
              <IconSuitcase />
            </div>

            <ul className="b">
              <li>Walker&apos;s Multimedia <span>1 month</span></li>
              <li>Hlelo&apos;s Internet Cafe <span>3 months</span></li>
            </ul>

            <p>I have worked part time jobs at two of my local internet cafe&apos;s as a software troubleshooter, where i helped fix mobile devices. I do however acknowledge the lack of experience i need in some fields</p>
          </div>
        </div>
      </section>
  )
}
