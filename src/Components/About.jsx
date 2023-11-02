import React, { useEffect } from 'react'
import '../Components/css/About.css'
import ScrollReveal from 'scrollreveal';

const About = () => {

    useEffect(() => {
        ScrollReveal().reveal('.about', {
            duration: 3000,
            origin: 'top',
            distance: '600px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true,
        })
    }, [])
    return (
        <main
            id='About'
            className='pt-24 pb-12 p-4 text-white
        xl:grid xl:grid-cols-3 xl:h-[600px] dark:text-black dark:duration  
        about
        '>
            <section className='grid  grid-cols-2 xl:grid-cols-1 pb-8
            '>
                <section className='grid gap-1 m-auto h-[300px] p-5
                sm:w-[280px] sm:gap-4
                sm:mx-auto sm:text-xl sm:border sm:rounded-2xl sm:h-[300px] sm:p-4
                md:w-[350px] relative                
                '>
                    <div>
                        <img className='animate-zoomInOut  absolute top-0 left-1 -translate-x-1/2 ' src="./animate.png" alt="" />
                    </div>
                    <h1 className='text-sm grid  ' >Hola, mi nombre es...
                        <span className='text-lg sm:text-4xl'> César</span>
                        <span className='text-lg sm:text-4xl' >Velazquez<span className='text-lg sm:text-4xl '>.</span> </span></h1>

                    <div className='bg-red-600 h-[2px] w-[100px] max-w-[500px] '>
                    </div>

                    <article className='text-sm sm:text-2xl grid gap-4 '>
                        <ul className=' grid gap-2 relative z-50'>
                            <li className='hover:scale-105'>
                                <a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target='_blank' >| Linkedin |</a>
                            </li>
                            <li className='hover:scale-105'>
                                <a href="https://github.com/cesar-velazquez" target='_blank' > | Github | </a>
                            </li>
                        </ul>
                        <section className='text-sm m-auto'>
                            <a className='border-2 border-red-600 text-center text-red-600 
                        font-semibold p-2 hover:bg-red-600 hover:text-gray-800 text-[10px]
                        sm:text-[.75rem]
                        transition-colors duration-700  '  href="/cv/César Velazquez Ortiz CV.pdf"
                                target='_blank'>Descargar Cv <i className='bx bxs-download dark:hover:text-yellow-200 hover:text-blue-500 '></i> </a>
                        </section>
                    </article>
                </section>

                {/* <div>
                    <img className='absolute top-20 bg-rose-600 ' src="/imgs/Logo.png" alt="Logo" />
                </div> */}

                {/*menor a 1280 */}
                <section className='opacity-100 xl:hidden  h-[300px] sm:h-[300px] md:h-[500px] relative '>
                    <div className='h-[100%] w-[100%] relative'>
                        <div className='w-[130px] aspect-square bg-gray-900 dark:bg-gray-800 rounded-full 
                        absolute left-[54%] -translate-x-1/2 top-[56%] -translate-y-[85%] 
                md:w-[250px] md:left-[52%] '></div>
                        <img className='h-[100%] flex items-center m-auto relative  ' src="/imgs/opcion2.png" alt="Photo" />
                    </div>
                </section>

            </section>

            {/* mayor de 1280 */}
            <section className='hidden xl:block h-[400px] relative  '>
                <div className=' h-[100%] flex items-start '>
                    <div className='w-[230px] aspect-square bg-gray-900 dark:bg-gray-800 rounded-full
                    absolute left-[50%] -translate-x-[45%] top-[10%] '></div>
                    <img className=' h-[100%] w-[75%] flex justify-center m-auto items-center relative ' src="/imgs/opcion2.png" alt="Photo" />                    
                </div>
            </section>


            <section className=' py-4 my-4 border block mx-auto text-left w-[min(100%,650px)] p-4
            rounded-3xl xl:grid xl:justify-center xl:p-10
            xl:bg-[url(/imgs/frame.png)] xl:border-none 
            xl:bg-no-repeat xl:bg-contain bg-center xl:m-0 dark:border-black '>
                <section className='grid  gap-2 xl:w-[280px] 
                xl:text-center xl:px-8 '>
                    <h1 className='text-sm text-[1rem]  text-center font-semibold p-1 '>Hola, mucho gusto!</h1>
                    <p className='text-sm text-[1rem] '>Soy un joven apasionado por aprender y sumergirme en el mundo de las
                        tecnologías del desarrollo de software.</p>
                    <p className='text-sm text-[1rem] ' >Actualmente me encuentro capacitándome en un bootcamp y en diferentes cursos
                        de tecnología con el fin de especializarme y obtener mi primer trabajo como desarrollador.</p>
                </section>
            </section>
        </main>
    )
}

export default About