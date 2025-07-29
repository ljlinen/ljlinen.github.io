import IconCode from '../../asset/icon/code.svg'
import IconSchool from '../../asset/icon/school.svg'
import IconSuitcase from '../../asset/icon/suitcase.svg'
import IconAbout from '../../asset/icon/profile.svg'
import '../../css/section/about.css'

export default function About() {
  return (
    <section className="s2-sec-about">
      <div className="about-me">
        <div className="top">
          <h2>About me and my journey</h2>
          <div className="about">
            <div className="head">
              <h3>summary about myself</h3>
              <IconAbout />
            </div>
            <div className="summary-and-projects-count">
              <div className="summary">
                <p>I&apos;m a full-stack and mobile developer with 2 years of hands-on experience across 6+ projects, focused on user experience, performance optimization, and responsive design. Skilled in delivering lightweight, accessible applications across web and mobile using modern frontend and backend technologies like React, React Native, Node.js, Hono.js, etc.
                </p>
              </div>
              <div className="projects-count">
                <h3>5+<span>Frontend projects</span></h3>
                <h3>3+<span>Backend projects</span></h3>
                <h3>1<span>mobile projects</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="experience">
            <div className='head'>
              <h3>current experience</h3>
              <IconSuitcase />
            </div>
            <div className="texts">
              <div className="texts-wrap">
                <div className="titles">
                  <p>Freelancer</p>
                  <p>Fullstack developer</p>
                </div>
                <p>2023 - Present</p>
              </div>
              <div className="texts-wrap">
                <div className="titles">
                  <p>Work Intergrated Learning Intern</p>
                  <p>LLM Trade and Projects</p>
                </div>
                <p>2023 - 2023</p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className='head'>
              <h3>education</h3>
              <IconSchool />
            </div>
            <div className="texts">
              <div className="texts-wrap">
                <div className="titles">
                  <p>Ricfield Graduate Institute of Technology</p>
                  <p>Higher Certificate In infomation Technology</p>
                </div>
                <p>NQF 5</p>
              </div>
              <div className="texts-wrap">
                <div className="titles">
                  <p>Hlonipha Secondary School</p>
                  <p>Grade 12 National Senior Sertificate</p>
                </div>
                <p>NQF 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="competencies">
        <div className="skills-and-steck">
          <div className="wrap">
            <div className="head">
              <h3>Competencies</h3>
              <IconCode />
            </div>
            <p>API Integrationp</p>
            <p>Responsive Design</p>
            <p>Team Collaboration</p>
            <p>Adaptable</p>
            <p>UI/UX Optimization</p>
          </div>
          <div className="wrap">
            <div className='head'>
              <h3>tech stack</h3>
              <IconCode />
            </div>
            <div className="stack">
              <p>JavaScript</p>
              <p>Nodejs</p>
              <p>React</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Expressjs</p>
              <p>Honojs</p>
              <p>React Native</p>
              <p>Expo</p>
              <p>CloudFlare Workers</p>
              <p>NPM</p>
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
