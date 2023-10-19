import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Formation from './Components/Formation'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <>
    {/* bg-[url(/imgs/fondoweb.jpg)] bg-cover bg-no-repeat */}
      <main className="bg-gray-800 min-h-screen font-Poppins ">
        <section className="max-w-[1200px] mx-auto ">
        <NavBar/>
        <About/>
        <Skills/>
        <Formation/>
        <Projects/>
        <Contact/>
        </section>
      </main>
    </>
  )
}

export default App
