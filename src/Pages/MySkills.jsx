import React from 'react'
import Skills from '../Components/Skills'
import { t } from 'i18next'

const MySkills = () => {
    return (
        <main className='min-h-[90vh] flex flex-col justify-center pt-16 lg:gap-20 items-center 
        relative'>    
        <h1
                className='text-2xl px-2 pb-12 text-white dark:text-black
                sm:absolute top-[5rem]
            text-center sm:text-2xl font-extrabold' >{t('My')} <span className='underline' >{t('Skills')}</span></h1>        
                <Skills />            
        </main>
    )
}

export default MySkills