import './App.css'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Skills from './Components/Skills'

function App() {

  return (
    <>
    {/* bg-[url(/imgs/fondoweb.jpg)] bg-cover bg-no-repeat */}
      <main className="bg-gray-800 min-h-screen ">
        <section className="max-w-[1200px] mx-auto ">
        <NavBar/>
        <About/>
        <Skills/>
        </section>
      </main>
    </>
  )
}

export default App
