import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/Herosection'
import HeaderSection from './Components/HeaderSection'
import AboutMe from './Components/AboutMe'
import ProjectsSection from './Components/ProjectsSection'
import SkillsSection from './Components/SkillsSection'
import EducationSection from './Components/EducationSection'
import GetInTouch from './Components/GetInTouch'

function App() {
  const [count, setCount] = useState(0)

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
