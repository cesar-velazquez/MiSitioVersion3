import React from 'react'
import Skills from '../Components/Skills'
import { t } from 'i18next'
import Footer from '../Components/Footer'
import Softskill from '../Components/Softskill'

const MySkills = () => {
    return (
        <main className='min-h-[110vh] flex flex-col justify-between pt-5 lg:gap-20 items-center 
        relative '>
            <h1
                className='text-2xl px-2 text-white dark:text-black
                sm:absolute top-[5rem] sm:top-5
            text-center sm:text-2xl font-extrabold' >{t('My')} <span className='underline' >{t('Skills')}</span></h1>
            <Softskill/>
            <Skills />
            <div className=' pt-[5rem] mb-[1rem] rounded-b-2xl '>
                <Footer />
            </div>
        </main>
    )
}

export default MySkills