import React, { useEffect } from 'react'
import '../Components/css/About.css'
import ScrollReveal from 'scrollreveal';
import { t } from 'i18next'

const About = () => {

    const Contactme = () =>{                
        window.location.href = 'mailto:velazquezortizcesar@gmail.com';
    }

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
        // xl:pt-0 xl:grid xl:grid-cols-3 xl:h-[600px]
        <main
            id='About'
            className='pt-16 p-4 text-white            
    dark:text-black dark:duration  
        about
        '>
            {/* xl:grid-cols-1  */}
            <section className='grid  grid-cols-2 pb-8 xl:w-[1200px] 
            '>
                <section className='grid gap-1 m-auto h-[300px] p-5 
                sm:w-[280px] sm:gap-4
                sm:mx-auto sm:text-xl sm:border sm:rounded-2xl sm:h-[300px] sm:p-4
                md:w-[350px] relative                
                '>
                    <div>
                        <img className='animate-zoomInOut  absolute top-0 left-1 -translate-x-1/2 ' src="./animate.png" alt="" />
                    </div>
                    <h1 className='text-sm grid  ' >{t('Greeting')}
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
                        <section className='text-sm m-auto z-20 relative '>
                            <a className='border-2 border-red-600 text-center text-red-600 
                        font-semibold p-2 hover:bg-red-600 hover:text-gray-800 text-[10px]
                        sm:text-[.75rem]
                        transition-colors duration-700  '  href="/cv/CVA césar velazquez.pdf"
                                target='_blank'>{t('Download')} <i className='bx bxs-download dark:hover:text-yellow-200 hover:text-blue-500 '></i> </a>
                        </section>
                    </article>
                </section>

                {/* xl:hidden */}
                <section className='opacity-100 h-[300px] sm:h-[300px] md:h-[500px] relative '>
                    <div className='h-[100%] w-[100%] relative'>
                        <div className='w-[130px] aspect-square bg-gray-900 dark:bg-gray-800 rounded-full 
                        absolute left-[54%] -translate-x-1/2 top-[56%] -translate-y-[85%] 
                md:w-[250px] md:left-[52%] '></div>
                        <img className='h-[100%] flex items-center m-auto relative  ' src="/imgs/opcion2.png" alt="Photo" />
                    </div>
                </section>

            </section>

            {/* <section className='hidden xl:block h-[400px] relative  '>
                <div className=' h-[100%] flex items-start '>
                    <div className='w-[230px] aspect-square bg-gray-900 dark:bg-gray-800 rounded-full
                    absolute left-[50%] -translate-x-[45%] top-[10%] '></div>
                    <img className=' h-[100%] w-[75%] flex justify-center m-auto items-center relative ' src="/imgs/opcion2.png" alt="Photo" />                    
                </div>
            </section> */}


            {/* xl:grid xl:justify-center xl:p-10
            xl:bg-[url(/imgs/frame.png)] xl:border-none 
            xl:bg-no-repeat xl:bg-contain bg-center xl:m-0 xl:h-[500px] */}
            <section className=' py-4 my-4 border block mx-auto text-left w-[min(100%,650px)] p-4
            rounded-3xl 
            
            dark:border-black 
            '>
                {/* xl:text-center xl:px-8 xl:h-[80%] xl:items-center xl:m-auto */}
                <section className='grid   gap-2  
                '>
                    <h1 className='text-sm text-[1rem]  text-center font-semibold p-1 '>{t('Greeting2')}</h1>
                    <p className='text-sm text-[1rem] '>{t('Greeting3')}</p>
                    <p className='text-sm text-[1rem] ' >{t('Greeting4')}
                        <a className='px-1 duration '
                            rel="noopener noreferrer"
                            onClick={Contactme}
                            href='#'                            
                            target='_blank'>
                            <i className='bx-tada cursor-pointer hover:scale-105 bx bx-envelope bg-red-500 p-1 rounded-3xl mx-[3px] 
                            hover:bg-black hover:text-red-500 transition-colors duration-1000 mt-2 ' ></i>
                        </a>
                    </p>
                    {/* <p className='text-sm text-[1rem] ' >{t('Greeting5')}</p> */}
                </section>
            </section>
        </main>
    )
}

export default About