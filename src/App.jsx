import Nav from "./js/component/Nav"
import About from "./js/section/About"
import CurriculumVitae from "./js/section/CurriculumVitae"
import Header from "./js/section/Header"
import MyWork from "./js/section/MyWork"
import './css/root/reset.css'
import './css/root/media-queries.css'
import './css/root/index.css'
import './css/root/style.css'
import Footer from "./js/section/Footer"

function App() {

  return (
    <>
      <Nav />
      <Header />
      <MyWork />
      <About />
      <CurriculumVitae />
      <Footer />
    </>
  )
}

export default App
