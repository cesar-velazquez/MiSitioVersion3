import { t } from 'i18next';
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SoftSkillsSwipper = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <main className='mt-10 relative max-w-[600px] h-[300px] '>
            <section className=' '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="absolute 
                    max-w-[280px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[920px]
                    top-6 bottom-0 left-[30%] -translate-x-1/2 ">

                    <SwiperSlide className='dark:bg-yellow-800/20 bg-yellow-400/80 flex justify-center 
                    items-start rounded-xl '>
                        <div className='h-[80%] flex flex-col justify-start w-[60%] '>
                            <img className='h-[90%]  bg-white/50 mt-1 ' src="/imgs/skills/comunicacion.svg" alt="Comunicación" />
                            <p className='dark:dark:bg-yellow-500/30 bg-gray-500 text-center mt-2 p-2 rounded-lg '>{t('communication')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='dark:bg-yellow-800/20 bg-yellow-400/80 flex justify-center items-start 
                    rounded-xl '>
                        <div className='h-[80%] flex flex-col justify-start w-[60%]  '>
                            <img className='h-[90%] bg-white/50 mt-1 ' src="/imgs/skills/resoluciondeproblemas.svg" alt="Resolución de Problemas" />
                            <p className='dark:bg-yellow-500/30 bg-gray-500 text-center mt-2 p-2 rounded-lg '>{t('solving')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='dark:bg-yellow-800/20 bg-yellow-400/80 flex justify-center items-start 
                    rounded-xl '>
                        <div className='h-[80%] flex flex-col justify-start w-[60%] '>
                            <img className='h-[90%] bg-white/50 mt-1 ' src="/imgs/skills/empatia.svg" alt="Empatía" />
                            <p className='dark:bg-yellow-500/30 bg-gray-500 text-center mt-2 p-2 rounded-lg '>{t('empathy')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='dark:bg-yellow-800/20 bg-yellow-400/80 flex justify-center items-start 
                    rounded-xl '>
                        <div className='h-[80%] flex flex-col justify-start w-[60%] '>
                            <img className='h-[90%] bg-white/50 mt-1 ' src="/imgs/skills/perseverancia.svg" alt="Perseverancia" />
                            <p className='dark:bg-yellow-500/30 bg-gray-500 text-center mt-2 p-2 rounded-lg '>{t('perseverance')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='dark:bg-yellow-800/20 bg-yellow-400/80 flex justify-center items-start 
                    rounded-xl '>
                        <div className='h-[80%] flex flex-col justify-start w-[60%] '>
                            <img className='h-[90%] bg-white/50 mt-1 ' src="/imgs/skills/servicioalcliente.svg" alt="Servicio al Cliente" />
                            <p className='dark:bg-yellow-500/30 bg-gray-500 text-center mt-2 p-2 rounded-lg '>{t('service')}</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='dark:bg-yellow-800/20 bg-yellow-400/80 flex justify-center items-start 
                    rounded-xl '>
                        <div className='h-[80%] flex flex-col justify-start w-[60%] '>
                            <img className='h-[90%] bg-white/50 mt-1 ' src="/imgs/skills/trabajoenequip.svg" alt="Trabajo en Equipo" />
                            <p className='dark:bg-yellow-500/30 bg-gray-500 text-center mt-2 p-2 rounded-lg '>{t('teamwork')}</p>
                        </div>
                    </SwiperSlide>

                    <div className='autoplay-progress bg-yellow-400  ' slot="">
                        <svg viewBox="10 1 0 1" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </section>
        </main>
    )
}

export default SoftSkillsSwipper