import { t } from 'i18next'
import React from 'react'

const Footer = () => {
    return (
        <footer className='text-white dark:text-black'>        
            <div className=''>
                <ul className='flex justify-center gap-5 p-4' >
                    <li><a href="https://github.com/cesar-velazquez" target="_blank">
                        <i className='bx bxl-github hover:text-white hover:scale-150 '></i></a></li>
                    <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank">
                        <i className='bx bxl-linkedin-square hover:text-white hover:scale-150'></i></a></li>
                </ul>
            </div>
            <p className="text-center  "> {t('made')} <a href="#"><b>César
                Velazquez</b></a> </p>
        </footer>
    )
}

export default Footer