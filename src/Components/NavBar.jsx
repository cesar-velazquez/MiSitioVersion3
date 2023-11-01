import { IconMenu2 } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        ScrollReveal().reveal('.navbar', {
            duration: 2000,   
            origin: 'bottom', 
            distance: '2px', 
            easing: 'cubic-bezier(0.5, 0, 0, 1)', 
            reset: true,      
        })
}, [])
return (
    <header className='z-50 bg-gray-900 text-white font-bold p-4 flex justify-between items-center fixed w-[min(100%,_1200px)]
        navbar '>
        <nav className='text-2xl '>        
            <a href="#About">Cv <span className='text-red-600 text-2xl' >.</span></a>
        </nav>
        <nav>
            <div className='md:hidden'>
                <button
                    onClick={handleOpen}>
                    {
                        isOpen ?
                            <i className='bx bx-x bx-spin text-2xl border-2 w-[40px] aspect-square
                                flex justify-center items-center rounded-3xl relative z-10 
                                transition-all duration-1000'></i>
                            :
                            <IconMenu2 />
                    }
                </button>
            </div>
            {
                isOpen && (
                    <div className='absolute top-0 bottom-0 right-0 w-[210px]
                        md:hidden
                        bg-gray-900 min-h-screen transition duration-1000
                        p-8 grid justify-center items-center '>
                        <ul className='grid gap-4'>
                            {/* <div className='bg-red-800 p-4 '> */}
                            <div className='grid gap-4'>
                                <li className='hover:scale-105'><a href="#contact">Contáctame</a></li>
                                <li className='hover:scale-105'><a href="#project">Proyectos</a></li>
                                <li className='hover:scale-105'><a href="#formation">Formación</a></li>
                                <li className='hover:scale-105'><a href="#skills">Habilidades</a></li>
                            </div>
                            <div className='flex gap-4 justify-center '>
                                <li><a href="https://github.com/cesar-velazquez" target="_blank">
                                    <i className='bx bxl-github w-[40px] text-3xl aspect-square border rounded-full 
                                            flex justify-center items-center  '></i></a></li>
                                <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank">
                                    <i className='bx bxl-linkedin w-[40px] text-3xl aspect-square border rounded-full 
                                            flex justify-center items-center  '></i></a></li>
                            </div>
                            {/* </div> */}
                        </ul>
                    </div>
                )
                // :
                // (
                //     <div className=''>
                //     </div>
                // )
            }
            <div>
                <ul className='hidden md:block'>
                    <div className='flex gap-2'>
                        <div className='flex gap-2 '>
                            <li><a href="#contact">Contáctame</a></li>
                            <li><a href="#project">Proyectos</a></li>
                            <li><a href="#formation">Formación</a></li>
                            <li><a href="#skills">Habilidades</a></li>
                        </div>
                        <span> | </span>
                        <div className='flex gap-2 animate-pulse'>
                            <li className='hover:scale-110'><a href="https://github.com/cesar-velazquez" target="_blank"><i className='bx bxl-github'></i></a></li>
                            <li className='hover:scale-110'><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    </header>
)
}

export default NavBar