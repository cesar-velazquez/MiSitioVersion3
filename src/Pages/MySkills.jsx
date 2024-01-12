import React from 'react'
import Skills from '../Components/Skills'
import { t } from 'i18next'
import SoftSkills from '../Components/softSkills'
import Footer from '../Components/Footer'

const MySkills = () => {
    return (
        <main className='min-h-[110vh] flex flex-col justify-around pt-5 lg:gap-20 items-center 
        relative '>
            <h1
                className='text-2xl px-2 text-white dark:text-black
                sm:absolute top-[5rem] sm:top-5
            text-center sm:text-2xl font-extrabold' >{t('My')} <span className='underline' >{t('Skills')}</span></h1>
            <SoftSkills />
            <Skills />
            <div className=' pb-2 mt-5 rounded-b-2xl '>
                <Footer />
            </div>
        </main>
    )
}

export default MySkills