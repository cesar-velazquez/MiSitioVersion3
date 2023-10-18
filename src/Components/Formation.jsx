import React from 'react'

const Formation = () => {
    return (
        <main className='pb-14 text-white ' >
            <div className='text-white grid justify-center p-4 '>
                <p className=' px-4 '>Experiencia Profesional</p>
                <h1 className='text-2xl font-bold text-center px-4'>Formación</h1>
            </div>

            <section className='grid gap-12 sm:grid sm:grid-cols-2 sm:mx-4'>
                <article className=' grid m-auto'>
                    <h1 className='text-white pl-4 text-2xl my-4 ' >Escuela</h1>
                    <article className='flex gap-4 '>
                        <div className='ml-8 w-[3px] bg-rose-600 h-[450px] relative' >
                            <div className='absolute top-[-10px] left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                            <div className='absolute top-[50px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute top-[212px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute top-[351px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute bottom-0 left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                        </div>
                        <section>
                            <article>
                                <i className='bx bxs-graduation pl-4 text-white text-2xl pt-4'></i>
                                <p className='px-4 '>2015 - 2021</p>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl '>Instituto Tecnológico Superior de Xalapa</h1>
                            </article>

                            <article>
                                <i className='bx bxs-graduation pl-4 text-white text-2xl pt-4'></i>
                                <p className='px-4 '>2021 - 2022</p>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl '>Bootcamp Alura </h1>
                            </article>

                            <article>
                                <i className='bx bxs-graduation pl-4 text-white text-2xl pt-4'></i>
                                <p className='px-4 '>2023 - Actualmente</p>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl '>Bootcamp Academlo </h1>
                            </article>
                        </section>
                    </article>
                </article>

                <article className='grid m-auto'>
                    <h1 className='text-white pl-4 text-2xl my-4 ' >Experiencia</h1>
                    <article className='flex gap-4 '>
                        <div className='ml-8 w-[3px] bg-rose-600 h-[450px] relative' >
                            <div className='absolute top-[-10px] left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                            <div className='absolute top-[50px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute top-[240px] left-[-9px] w-[20px] aspect-square border-4 bg-black/80 rounded-full '></div>
                            <div className='absolute bottom-0 left-[-9px] w-[20px] aspect-square bg-rose-600 rounded-full '></div>
                        </div>

                        <section>
                            <article>
                                <i className='bx bxs-briefcase-alt-2 text-white pl-4 text-2xl pt-4'></i>
                                <p className='px-4 '> 2021 - 2021</p>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl max-w-[357.52px] '>
                                    Becario en Universidad de Xalapa en el área de Coordinación de Tecnologías de la Información.
                                </h1>
                            </article>

                            <article>
                                <i className='bx bxs-briefcase-alt-2 text-white pl-4 text-2xl pt-4'></i>
                                <p className='px-4 '>2021 - 2023</p>
                                <h1 className='py-2 my-3 text-white border px-4 mx-4 text-center rounded-xl max-w-[357.52px] '>
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