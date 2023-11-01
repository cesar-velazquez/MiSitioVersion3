import React, { useEffect, useRef, useState } from 'react'
import ScrollReveal from 'scrollreveal';
import { useForm } from 'react-hook-form';
import emailjs, { sendForm } from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();

    const SendEmail = (data) => {
        emailjs.sendForm('service_xe77o2d', 'template_bzcvttj', form.current, 'dHdulfhsOYul4kPWH')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                // setIsShowModal(true);
            })
            .catch((error) => {
                console.log(error.text);                                  
                // setIsShowModal(false);
                console.log("error")
            });
    }

    const submit = (data) => {
        SendEmail(data)
        console.log(data)
    }




    const [isClick, setIsClick] = useState(false)
    const [email, setEmail] = useState(false)
    const [message, setMessage] = useState(false)



    // const handleClickInput = () => {
    document.addEventListener("mouseup", function (e) {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message")

        if (name.contains(e.target)) {
            setIsClick(true)
        }
        else {
            setIsClick(false)
        }

        if (email.contains(e.target)) {
            setEmail(true)
        } else {
            setEmail(false)
        }

        if (message.contains(e.target)) {
            setMessage(true)
        } else {
            setMessage(false)
        }

    })
    // }

    useEffect(() => {
        ScrollReveal().reveal('.Contactme', {
            duration: 2000,
            origin: 'left',
            distance: '300px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false,
        })
    }, [])
    return (
        <main
            id='contact'
            className='text-white pb-8 Contactme '>
            <section className='sm:grid sm:grid-cols-2 sm:gap-6  ' >
                <article className='grid px-4 ' >
                    <h1 className='p-4 border 
                    border-black w-[min(100%,_450px)] grid m-auto 
                    justify-start items-center text-3xl sm:text-5xl
                    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
                    rounded-2xl ' >
                        <span className='text-center py-4 sm:font-bold' >Hablemos!</span>
                        <span className=' text-xl sm:text-2xl text-center sm:font-medium '>
                            Preguntame cualquier cosa o simplemente saluda...
                        </span> </h1>
                </article>

                <article className='px-4 mt-8 min-h-[450px] h-[500px] grid ' >
                    <form
                    ref={form}
                        onSubmit={handleSubmit(submit)}
                        className='p-4  pt-12 w-[min(100%,_300px)] grid items-center m-auto 
                        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
                    rounded-xl h-[100%] gap-8 shadow-2xl shadow-black text-black
                    text-xs '
                        action="">
                        <section className='grid gap-4 py-4 '>
                            <div
                                id='name'
                                className='grid gap-2 m-auto w-[95%] p-4 bg-black/30 rounded-2xl '>
                                <label
                                    className='text-white'

                                    htmlFor="first_name">Ingresa un nombre</label>
                                <input
                                    className={`rounded-md text-white py-3 px-2 bg-black/30
                                    border border-black outline-none
                                    ${isClick && "shadow-md shadow-blue-600 "} `}
                                    name='first_name'
                                    id='first_name'
                                    type="text"
                                    placeholder='Escribe tu nombre'
                                    {...register("first_name", {
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Longitud excedida, maximo 15 caracteres"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Es demasiado corto el nombre"
                                        },
                                    })} />
                                {errors.first_name && <p className='text-red-600 text-center m-auto font-semibold rounded-md p-2 w-[200px]
                                bg-black'>{errors.first_name.message}</p>}
                            </div>

                            <div
                                id='email'
                                className='grid gap-2 m-auto w-[95%] p-4 bg-black/30 rounded-2xl '>

                                <label
                                    className='text-white'
                                    htmlFor="email_i">Escribe tu email</label>
                                <input
                                    className={`rounded-md text-white py-3 px-2 bg-black/30
                                    border border-black outline-none
                                    ${email && "shadow-md shadow-green-600 "} `}
                                    id='email_i'
                                    type="email"
                                    placeholder='Escribe tu correo'
                                    {...register("email_i", {
                                        required: {
                                            value: true,
                                            message: "Es requerido su email"
                                        },
                                        pattern: {
                                            value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                                            message: "esriba un email valido"
                                        }
                                    })} />
                                    {errors.email_i && <p className='text-red-700 text-center m-auto font-semibold rounded-3xl w-[200px] bg-white/40'>{errors.email_i.message}</p>}
                            </div>

                            <div
                                id='message'
                                className='w-[95%] p-4 grid gap-2 m-auto bg-black/30 rounded-2xl
                            '>
                                <label
                                    className='text-white'
                                    htmlFor="messagge">
                                    Escribeme
                                </label>
                                <textarea
                                    className=
                                    {`resize-none rounded-md min-h-[100px] py-3 px-2 bg-black/30
                                    border border-black outline-none text-white
                                    ${message && "shadow-md shadow-fuchsia-600 "} `}
                                    id="message"
                                    name='message'
                                    placeholder='Mensaje'
                                    {...register("message", {
                                        required: {
                                            value: true,
                                            message: "Escriba su mensaje"
                                        },
                                        minLength: {
                                            value: 7,
                                            message: "Es demasiado corto el nombre"
                                        }
                                    })
                
                                    }>
                                    {errors.message && <p className='text-red-700 text-center m-auto font-semibold rounded-3xl w-[200px] bg-white/40'>{errors.message.message}</p>}
                                </textarea>
                            </div>
                            <input className='border rounded-md w-[100px] m-auto
                        hover:bg-gray-700 hover:text-white transition hover:scale-105
                        duration-700 text-white '
                        type='submit' value={'Enviar'}  />
                        </section>

                    </form>
                </article>
            </section>
        </main>
    )
}

export default Contact