import { IconMenu2 } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

const NavBar = ({ handleChangeMode, isDark, handleChangeLanguage }) => {
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
        navbar dark:bg-[#F5ECD7] dark:border-b dark:border-black transition-colors duration-1000 '>
            <nav className='text-2xl dark:text-black flex items-center gap-4 '>
                <Link to={'/'} >Cv <span className='text-red-600 text-2xl' >.</span></Link>
                <div className='flex items-center gap-4'>
                    <li className='hidden md:block list-none' onClick={handleChangeMode}>
                        {
                            isDark ?
                                <i className='cursor-pointer bx bx-moon bx-tada duration'></i>
                                :
                                <i className='cursor-pointer bx bx-sun text-yellow-500 bx-spin duration'></i>
                        }
                    </li>
                    <button onClick={handleChangeLanguage}
                        className='hidden md:block hover:bg-black hover:text-white border 
                                    border-black rounded-xl px-2 py-1 transition-colors 
                                    duration-700 text-sm '>{t('buttonChange')}</button>
                </div>
            </nav>
            <nav>
                <div className='md:hidden'>
                    <button
                        onClick={handleOpen}>
                        {
                            isOpen ?
                                <i className='bx bx-x bx-spin text-2xl border-2 w-[40px] aspect-square
                                flex justify-center items-center rounded-3xl relative z-10 
                                transition-all duration-1000 dark:text-black dark:border-black '></i>
                                :
                                // < IconMenu2 />
                                <i className='bx bx-menu dark:text-black text-[1.5rem] '></i>
                        }
                    </button>
                </div>
                {
                    isOpen && (
                        <div className='absolute top-0 bottom-0 right-0 w-[210px]
                        md:hidden
                        bg-gray-900 min-h-screen transition-colors duration-1000
                        p-8 grid justify-center items-center
                        dark:bg-[#F5ECD7] dark:text-black  '>
                            <ul className='grid gap-4'>
                                {/* <div className='bg-red-800 p-4 '> */}
                                <div className='grid gap-4'>
                                    <li className='hover:scale-105'><Link to={'contact'}>{t('Contact')}</Link></li>
                                    <li className='hover:scale-105'><Link to={'Projects'}>{t('Projects')}</Link></li>
                                    <li className='hover:scale-105'><Link to={'Formation'}>{t('formation')}</Link></li>
                                    <li className='hover:scale-105'><Link to={'Skills'}>{t('Skills')}</Link></li>
                                </div>
                                <div className='flex gap-4 justify-center '>
                                    <li><a href="https://github.com/cesar-velazquez" target="_blank">
                                        <i className='bx bxl-github w-[40px] text-3xl aspect-square border rounded-full 
                                            flex justify-center items-center  '></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank">
                                        <i className='bx bxl-linkedin w-[40px] text-3xl aspect-square border rounded-full 
                                            flex justify-center items-center  '></i></a></li>
                                </div>
                                <div className='flex justify-center items-center text-3xl '>
                                    <li onClick={handleChangeMode}>
                                        {
                                            isDark ?
                                                <i className='cursor-pointer bx bx-moon bx-tada duration'></i>
                                                :
                                                <i className='cursor-pointer bx bx-sun bx-spin duration'></i>
                                        }
                                    </li>
                                </div>
                                <div className='flex justify-center '>
                                    <button onClick={handleChangeLanguage} 
                                    className='hover:bg-black hover:text-white border border-black rounded-xl
                                    px-4 py-1 transition-colors duration-700 '>{t('buttonChange')}</button>
                                </div>
                            </ul>
                        </div>
                    )
                }
                <div>
                    <ul className='hidden md:block dark:text-black transition-colors duration-1000 '>
                        <div className='flex gap-2'>
                            <div className='flex gap-2 '>
                                <li><Link to={'contact'} className=''>{t('Contact')}</Link></li>
                                <li><Link to={'Projects'}>{t('Projects')}</Link></li>
                                <li><Link to={'Formation'} >{t('formation')}</Link></li>
                                <li><Link to={'Skills'} >{t('Skills')}</Link></li>
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