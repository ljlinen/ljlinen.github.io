import Header from "../section/Header"
import MyWork from "../section/MyWork"
import About from "../section/About"
import CurriculumVitae from "../section/CurriculumVitae"
import Footer from "../section/Footer"
import '../../css/root/reset.css'
import '../../css/root/media-queries.css'
import '../../css/root/index.css'
import '../../css/root/style.css'

function Home () {
  return (
    <>
      <Header />
      <MyWork />
      <About />
      <CurriculumVitae />
      <Footer />
    </>
  )
}

export default Home;