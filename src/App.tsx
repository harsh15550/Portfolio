import './App.css'
import HeroSection from './Components/Herosection'
import HeaderSection from './Components/HeaderSection'
import AboutMe from './Components/AboutMe'
import ProjectsSection from './Components/ProjectsSection'
import SkillsSection from './Components/SkillsSection'
import EducationSection from './Components/EducationSection'
import GetInTouch from './Components/GetInTouch'

function App() {

  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutMe />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <GetInTouch />
    </>
  )
}

export default App
