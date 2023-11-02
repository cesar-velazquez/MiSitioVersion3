import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Formation from './Components/Formation'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import './puntero.js'
import { puntero } from './puntero.js'

function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark')

  const handleChangeMode = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    // puntero()
    isDark
    ? (document.documentElement.classList.add('dark'), localStorage.setItem('theme', 'dark'))
    : (document.documentElement.classList.remove('dark'), localStorage.setItem('theme', 'light'))
  }, [isDark]);



  return (
    <>
      {/* bg-[url(/imgs/fondoweb.jpg)] bg-cover bg-no-repeat */}
      <main className="bg-gray-800 dark:bg-[#c2baa6] min-h-screen font-Poppins relative 
      transition-colors duration-1000">
        {/* <div className='bg-green-600 min-h-[100%] '> */}
        {/* <div className='puntero '> */}
        <section className="max-w-[1200px] mx-auto ">
          <NavBar isDark={isDark} handleChangeMode={handleChangeMode} />
          <About />
          <Skills />
          <Formation />
          <Projects />
          <Contact />
          <Footer />
        </section>
        {/* </div> */}
        {/* <div className='puntero'>          
        </div> */}
      </main>
    </>
  )
}

export default App
