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
import { useTranslation } from 'react-i18next'
import i18n from './i18n.js';
import { Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio.jsx'
import ContactMe from './Pages/ContactMe.jsx'
import MySkills from './Pages/MySkills.jsx'
import MyFormation from './Pages/MyFormation.jsx'
import MyProjects from './Pages/MyProjects.jsx'

function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark')
  const [isEnglish, setIsEnglish] = useState('es')

  const { t } = useTranslation();

  const handleChangeLanguage = () => {
    if (isEnglish === 'en') {
      setIsEnglish('es');
      i18n.changeLanguage('es');
    } else {
      setIsEnglish('en');
      i18n.changeLanguage('en');
    }
  }


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
      <main className="bg-gray-800
      dark:bg-[#f5eedd]
      min-h-screen font-Poppins relative 
      transition-colors duration-1000">

        <section className='fixed hidden lg:block z-10 h-[400px] w-[180px] 
          top-[10%] rounded-l rounded-3xl transition-all duration-700  '>
          <div className='grid items-center top-[50%] translate-y-[30%]  gap-4'>

            <section className='h-[50px] w-[40px] hover:w-[150px]  cursor-pointer bg-blue-600 
            transition-all duration-700'>
              <div className='flex bg-blue-300
              absolute h-[50px] left-[-110px] hover:left-0 pl-4 transition-all duration-700  
              w-[50px] hover:w-[84%]  '>
                <a className='flex items-center gap-[0px] hover:gap-0 text-white font-bold  
                transition-all duration-700 text-xl ' href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target='_blank'>
                  <h4 className='' >Linkedin</h4>
                  <li className='bx bxl-linkedin h-[50px] w-[50px] 
                  flex items-center justify-center'></li>
                </a>
              </div>
            </section>


            <section className='h-[50px] w-[40px] hover:w-[150px]  cursor-pointer
            bg-black transition-all duration-700  '>
              <div className='flex bg-slate-900              
              absolute h-[50px] left-[-110px] hover:left-0 pl-4  transition-all duration-700  
              w-[50px] 
              hover:w-[85%]
                '>
                <a className='flex items-center gap-[15px]  text-white font-bold  
                transition-all duration-1000 text-xl hover:gap-0 '
                  href="https://github.com/cesar-velazquez" target='_blank'>
                  <h4 className='' >Github</h4>
                  <li className='bx bxl-github h-[50px] w-[50px] 
                  flex items-center justify-center'></li>
                </a>
              </div>
            </section>

            <section className='h-[50px] w-[40px] hover:w-[100px]  cursor-pointer bg-red-600 
            transition-all duration-700 '>
              <div className='flex hover:bg-red-900 
                            absolute h-[50px] left-[-50px] hover:left-0 pl-4 transition-all 
                            duration-1000 w-[50px] hover:w-[100px]'>
                <a className='flex items-center gap-[0px] hover:gap-0 text-white font-bold  
                transition-all duration-700 text-xl '
                  href="/cv/CVA césar velazquez.pdf" target='_blank'>
                  <h4 className='' >Cv</h4>
                  <li className='bx bx-download h-[50px] w-[50px] 
                  flex items-center justify-center'></li>
                </a>
              </div>
            </section>

            <section className='h-[50px] w-[40px] hover:w-[120px]  cursor-pointer
            bg-orange-500 transition-all duration-700  '>
              <div className='flex bg-orange-600
                            absolute h-[50px] left-[-80px] hover:left-0 pl-4 transition-all duration-700  
              w-[50px] hover:w-[120px]  '>
                <a className='flex items-center gap-[0px] hover:gap-0 text-white font-bold  
                transition-all duration-700 text-xl '
                  rel="noopener noreferrer" href="mailto:velazquezortizcesar@gmail.com" target='_blank' >
                  <h4 className='' >Email</h4>
                  <li className='bx bx-envelope h-[50px] w-[50px] 
                  flex items-center justify-center'></li>
                </a>
              </div>
            </section>

          </div>
        </section>

        <section className='flex'>
          <section className='bg-gray-800 duration-1000 transition-colors max-w-[900px] 
          m-auto dark:bg-[#f5eedd] ' >
          <section className='bg-black dark:bg-[#f2d48e] sm:pt-0 sm:mt-20 sm:mb-20 rounded-2xl '>

            <section className="max-w-[1200px] mx-auto ">
              <NavBar isDark={isDark} handleChangeMode={handleChangeMode}
                handleChangeLanguage={handleChangeLanguage} isEnglish={isEnglish} t={t} />


              <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/contact' element={<ContactMe />} />
                <Route path='/Skills' element={<MySkills />} />
                <Route path='/Formation' element={<MyFormation />} />
                <Route path='/Projects' element={<MyProjects />} />
              </Routes>
              {/* <Footer /> */}
            </section>

            {/* <section className='bg-red-400 max-w-[900px] ' > */}
          </section>
        </section>
        </section>

      </main>
    </>
  )
}

export default App
