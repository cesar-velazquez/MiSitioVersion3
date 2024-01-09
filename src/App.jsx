import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import './puntero.js'
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
    {/* bg-gray-800 */}
      <main className=" bg-[url(/imgs/Nocheestrellada.jpg)] bg-cover bg-no-repeat bg-center dark:bg-none
      dark:bg-[#f5eedd]
      min-h-screen font-Poppins relative 
      transition-colors duration-1000">

        <section className='fixed hidden lg:block z-10 h-[380px] w-[180px] 
          top-[10%] rounded-l rounded-3xl transition-all duration-700 shadow-xl shadow-white dark:shadow-black   '>
          <div className='grid items-center top-[50%] translate-y-[30%]  gap-4 '>

            <section className='h-[50px] w-[40px] hover:w-[150px]  cursor-pointer bg-blue-600 
            transition-all duration-700 '>
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
                            duration-700 w-[50px] hover:w-[100px]'>
                <a className='flex items-center gap-[0px] hover:gap-0 text-white font-bold  
                transition-all duration-1000 text-xl '
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
                transition-all duration-1000 text-xl '
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
          <section className='bg-[url(/imgs/Nocheestrellada.jpg)] dark:bg-none duration-1000 transition-colors max-w-[900px] 
          m-auto dark:bg-[#f5eedd] z-50
          ' >


            <section className='bg-black dark:bg-[#f2d48e] 
            sm:pt-0 sm:mt-20 sm:mb-20 rounded-2xl relative mx-2 '>

              <div className='animate-wiggleIn '>
                <img className='absolute top-[-3.8rem] w-[60px] aspect-square left-[47%] -translate-x-1/2 ' src="/imgs/Figures/startL.svg" alt="Start Left" />
                <img className='z-10 absolute top-[-3.8rem] w-[60px]  aspect-square left-1/2 -translate-x-1/2  ' src="/imgs/Figures/startMiddle.svg" alt="Start Middle" />
                <img className='absolute top-[-3.8rem] w-[60px] aspect-square right-[40%] -translate-x-1/2 ' src="/imgs/Figures/startR.svg" alt="Start Right" />
              </div>

              {/* FIGURAS bg-[url()] */}
              <section className='left-1/2 -translate-x-1/2
              fixed top-0  w-[1350px] -z-10 aspect-square hidden xl:block '>
                {/* Tema Obscuro */}
                <div className='dark:hidden '>
                  <img className='absolute w-[250px] aspect-square right-[-4px] top-[25rem] animate-bounceIn ' src="/imgs/Figures/astro.svg" alt="Astronauta" />
                  <img className='absolute top-[4rem] left-[7.5rem] w-[100px] aspect-square animate-bounceIn ' src="/imgs/Figures/circleBlack.svg" alt="Moon" />                  
                  <img className=' absolute top-[40rem] left-[-18rem] animate-wiggleIn ' src="/imgs/Figures/cubicBlack.svg" alt="Cubo Black" />
                </div>
                {/* Tema Claro */}
                <div className='hidden dark:block bg-red-100 '>
                  <img className=' absolute top-[40rem] left-[-18rem] animate-pulseIn ' src="/imgs/Figures/cubic.svg" alt="Cubo" />
                  <img className=' absolute top-[5rem] right-3 h-[150px] aspect-square animate-jump-inIn ' src="/imgs/Figures/circleglass.svg" alt="Circle Yellow" />
                  <img className='absolute top-8 left-[3rem] h-[300px] -z-50' src="/imgs/Figures/start1.1.svg" alt="start" />
                  <img className=' absolute bottom-[25rem] right-4 h-[200px] aspect-square animate-jumpIn ' src="/imgs/Figures/cubicY.svg" alt="Cubic" />

                </div>
              </section>              
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
              </section>
            </section>
          </section>
        </section>

      </main>
    </>
  )
}

export default App
