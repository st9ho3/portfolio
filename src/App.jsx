import ShowcaseSection from "./sections/ShowcaseSection"
import Hero from "./sections/Hero"
import NavBar from './components/NavBar'
import FeatureCards from "./sections/FeatureCards"
import LogoSection from "./components/LogoSection"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />    
    <Contact />
    <Footer />
    </>
  )
}

export default App
