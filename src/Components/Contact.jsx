import React from 'react'
const Contact = () => {
    return (
        <main className='text-white pb-8 '>
            {/* <h1 className='text-center my-8 text text-2xl '>Contactame</h1> */}
            <section className='sm:grid sm:grid-cols-2 sm:gap-6 ' >
                <article className='grid px-4 ' >
                    <h1 className='p-4 border border-black w-[min(100%,_450px)] grid m-auto 
                    justify-start items-center text-3xl sm:text-5xl
                    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
                    ' >
                        <span className='text-center py-4 sm:font-bold' >Hablemos!</span>
                        <span className=' text-xl sm:text-2xl text-center sm:font-medium '>
                            Preguntame cualquier cosa o simplemente saluda...
                        </span> </h1>
                </article>

                <article className='px-4 mt-8 min-h-[450px] h-[500px] grid ' >
                    <form
                        className='p-4  pt-12 w-[min(100%,_300px)] grid items-center m-auto 
                        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
                    rounded-xl h-[100%] gap-8 shadow-2xl shadow-black animate-pulse hover:animate-none text-black  '
                        action="">
                        <div className='grid gap-2 '>
                            <label
                                className='text-white'
                                htmlFor="">Ingresa un nombre</label>
                            <input
                                className='rounded-md '
                                name='name'
                                type="text"
                                placeholder='Escribe tu nombre' />
                        </div>

                        <div className='grid gap-2'>
                            <label
                                className='text-white'
                                htmlFor="">Escribe tu email</label>
                            <input
                                className='rounded-md'
                                name='email'
                                type="email"
                                placeholder='Escribe tu correo' />
                        </div>

                        <div className='grid gap-2'>
                            <label 
                            className='text-white'
                            htmlFor="">
                                Escribeme
                            </label>
                            <textarea
                                className='rounded-md min-h-[100px] '
                                name=""
                                placeholder='Mensaje'>
                            </textarea>
                        </div>

                        <button className='border rounded-md w-[100px] m-auto
                        hover:bg-gray-700 hover:text-white transition hover:scale-105
                        duration-700 text-white '>Enviar</button>
                    </form>
                </article>
            </section>
        </main>
    )
}

export default Contact