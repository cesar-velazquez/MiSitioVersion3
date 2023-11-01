import React, { useEffect } from 'react'
import '../Components/css/Formation.css'
import ScrollReveal from 'scrollreveal';

const Formation = () => {

    useEffect(() => {
        ScrollReveal().reveal('.formation', {
            duration: 3000,
            origin: 'left',
            distance: '300px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true,
        })
    }, [])
    return (
        <main 
        id='formation'
        className='pb-14 text-white  ' >
            <div className='text-white flex justify-center items-center p-4 py-6 mt-8 mb-6 '>
                <div>
                    <img className='bx-spin duration' src="/imgs/Diagonal.png" alt="" />
                </div>

                <div>
                    <p className=' px-4 '>Experiencia Profesional</p>
                    <h1 className='text-2xl font-bold text-center px-4'>Formación</h1>
                </div>
            </div>

            <section className='grid gap-12 sm:grid sm:grid-cols-2 sm:mx-4
            sm:bg-[url(/imgs/Cuadrado.png)] bg-no-repeat bg-center formation  '>


                <article className=' grid m-auto bg-gray-950 rounded-2xl min-h-[700px] '>
                    <h1 className='text-white text-2xl text-center pt-4 ' >Educación</h1>
                    <article className='flex gap-4 pb-12 pt-4  '>
                        <div className='ml-8 w-[3px] bg-rose-600 h-[500px] relative' >
                            <div className='absolute top-[-10px] left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                            <div className='absolute top-[50px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute top-[255px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute top-[434px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute bottom-0 left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                        </div>

                        <section className='grid gap-5'>
                            <article className='relative'>
                                <i className='bx bxs-graduation pl-4 text-white text-2xl pt-4'></i>
                                <p className='px-4 '>2015 - 2021</p>
                                <div>
                                    <img className='absolute top-[75px] w-[50px] animate-pulse '
                                        src="./elipse.png" alt="Animate" />
                                </div>
                                <h1 className='py-2 my-3 text-white border-[1px] border-gray-500 px-4 mx-4 text-center 
                                rounded-xl h-[66px] grid justify-center items-center bg-black relative '
                                >Instituto Tecnológico Superior de Xalapa</h1>
                            </article>

                            <article className='block relative'>
                                <i className='bx bxs-graduation pl-4 text-white text-2xl pt-4'></i>
                                <p className='px-4 '>2021 - 2022</p>

                                <div>
                                    <img className='absolute top-[75px] w-[50px] animate-pulse '
                                        src="./elipse.png" alt="Animate" />
                                </div>

                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center 
                                rounded-xl bg-black relative '>Bootcamp Alura </h1>
                            </article>

                            <article className='relative'>
                                <i className='bx bxs-graduation pl-4 text-white text-2xl pt-4'></i>
                                <p className='px-4 '>2023 - Actualmente</p>

                                <div>
                                    <img className='absolute top-[75px] w-[50px] animate-pulse '
                                        src="./elipse.png" alt="Animate" />
                                </div>

                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center 
                                rounded-xl bg-black relative '>Bootcamp Academlo </h1>
                            </article>
                        </section>
                    </article>
                </article>
                {/* -------------------------------------------------------------------------------------------------------- */}
                <article className='grid m-auto bg-gray-950 rounded-2xl min-h-[700px] '>
                    <h1 className='text-white text-2xl text-center pt-4 ' >Experiencia</h1>
                    <article className='flex gap-4 pb-12 pt-4 '>
                        <div className='ml-8 w-[3px] bg-rose-600 h-[500px] relative' >
                            <div className='absolute top-[-10px] left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                            <div className='absolute top-[50px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute top-[344px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute bottom-0 left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                        </div>

                        <section className='grid gap-5 '>
                            <article className='relative'>
                                <i className='bx bxs-briefcase-alt-2 text-white pl-4 text-2xl pt-4'></i>
                                <p className='px-4 '> 2021 - 2021</p>
                                <div>
                                    <img className='absolute top-[75px] w-[50px] animate-pulse '
                                        src="./elipse.png" alt="Animate" />
                                </div>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl 
                                grid justify-center items-center max-w-[357.52px] h-[160px] bg-black
                                relative'>
                                    Becario en Universidad de Xalapa en el área de Coordinación de Tecnologías de la Información.
                                </h1>
                            </article>

                            <article className='relative'>
                                <i className='bx bxs-briefcase-alt-2 text-white pl-4 text-2xl pt-4'></i>
                                <p className='px-4 '>2021 - 2023</p>
                                <div>
                                    <img className='absolute top-[75px] w-[50px] animate-pulse '
                                        src="./elipse.png" alt="Animate" />
                                </div>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl 
                                grid justify-center items-center max-w-[357.52px] h-[160px] bg-black
                                relative'>
                                    Soporte técnico en el área de Coordinación de Tecnologías de la Información.
                                </h1>
                            </article>
                        </section>
                    </article>
                </article>


            </section>

        </main>
    )
}

export default Formation