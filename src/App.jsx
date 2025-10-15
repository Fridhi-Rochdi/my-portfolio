import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import MainContent from "./components/MainContent/MainContent"
import Contact from "./components/Contact/Contact"
import Project from "./components/Projects/Project"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/footer"
import ThreeBackground from "./components/ThreeBackground/ThreeBackground"


const App = () => {
  return (
    <>
      <ThreeBackground />
      <div className='container'>
        <section className="hero-section" id="#hero"><Hero /></section>
      
        <section id="#Services"><Services /></section>
        <section id="#MainContent"><MainContent/></section>
        
        
        <section id="Project "><Project/></section>
        <section id="contact"><Contact /></section>

        <section><Footer /></section> 
        <section><Navbar /></section>
        
        
      

      </div>
    </>
  )
}

export default App