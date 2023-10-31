import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Skills = () => {
    return (
        <main
            id='skills'
            className='
            text-white pt-12 mx-auto sm:w-full xl:max-w-[1200px] '>

            <h1
                className='text-2xl px-2 py-4
            text-center sm:text-2xl font-extrabold' >Mis <span className='underline' >Habilidades</span></h1>

            <article className='relative'>

                <div className='lg:bg-fuchsia-950 rounded-full absolute left-1/2 -translate-x-1/2 top-[45%] 
                -translate-y-1/2 w-[230px] sm:w-[300px] aspect-square flex justify-center m-auto '>
                    <img src="/imgs/circulo.svg" alt="" />
                </div>

                <div className='hidden lg:block '>
                    {/* <div className=' absolute left-1/2 -translate-x-1/2 top-[45%] 
                -translate-y-1/2 w-[300px] aspect-square flex justify-center m-auto '>
                        <img src="/imgs/circulo.svg" alt="" />
                    </div> */}
                    <div className='absolute left-1/2 -translate-x-1/2 top-[43%] 
                    w-[295px] h-[164px] shrink-0 '>
                        <img src="/imgs/border1.svg" alt="" />
                    </div>
                    <div className='absolute left-1/2 -translate-x-1/2 top-[10%]
                    w-[306px] h-[275px] shrink-0 '>
                        <img src="/imgs/border2.svg" alt="" />
                    </div>
                    {/* Circulos */}
                    <div className=' absolute left-1/2 -translate-x-1/2 top-[15%]
                    w-[695px] h-[269px] shrink-0 '>
                        <img src="/imgs/circun1.svg" alt="" />

                        <div className='absolute left-2 top-[47%] bx-tada'>
                            <img className='' src="/imgs/tech1.svg" alt="" />
                        </div>

                        <div className='absolute right-9 top-[30%] bx-tada'>
                            <img src="/imgs/tech21.svg" alt="" />
                        </div>
                    </div>


                    <div className='absolute left-1/2 -translate-x-1/2 top-[15%]
                    w-[764px] h-[269px] shrink-0 '>
                        <img src="/imgs/circun2.svg" alt="" />

                        <div className='absolute left-[-10px] top-[35%] bx-tada'>
                            <img src="/imgs/tech2.svg" alt="Linkedin" />
                        </div>

                        <div className='absolute right-5 top-[50%] bx-tada'>
                            <img src="/imgs/tech22.svg" alt="" />
                        </div>

                    </div>


                    <div className='absolute left-1/2 -translate-x-1/2 top-[15%]
                    w-[881px] h-[269px] shrink-0 '>
                        <img src="/imgs/circun3.svg" alt="" />

                        <div className='absolute left-3 top-[68%] bx-tada'>
                            <img src="/imgs/tech3.svg" alt="" />
                        </div>

                        <div className='absolute right-14 top-[65%] bx-tada'>
                            <img src="/imgs/tech23.svg" alt="" />
                        </div>

                        <div className='absolute right-[-15px] top-[30%] bx-tada'>
                            <img src="/imgs/tech24.svg" alt="" />
                        </div>

                    </div>
                </div>

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
                    className="mySwiper                
                "
                >
                    {/* <hr className='bg-gray-800 h-[2px] mx-8 ' /> */}
                    <div
                        className=' h-[90%] grid justify-center 
                items-center m-auto                
                '>
                        <div
                            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 m-auto'>
                        </div>



                        <SwiperSlide>
                            <div className=' p-4 py-12 grid justify-center items-center m-auto'>
                                <img className='m-auto w-[100px] sm:w-[200px] aspect-square rounded-full
                            hover:scale-110 ' src="/imgs/skills/css.jpg" alt="CSS" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >CSS</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' py-12 p-4 m-auto'>
                                <img className='m-auto w-[100px] sm:w-[200px] aspect-square rounded-full hover:scale-110 '
                                    src="/imgs/skills/html5.jpg" alt="HTML" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >HTML</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' py-12 p-4 m-auto'>
                                <img className='m-auto w-[100px] sm:w-[200px] aspect-square rounded-full hover:scale-110 '
                                    src="/imgs/skills/js.jpg" alt="HTML" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >JS</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' py-12 p-4 m-auto'>
                                <img
                                    className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110 object-cover '
                                    src="/imgs/skills/react.jpg" alt="HTML" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >React</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' py-12 p-4 m-auto'>
                                <img className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110  '
                                    src="/imgs/skills/tailwind.jpg" alt="Tailwind" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >Tailwind</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' py-12 p-4 m-auto'>
                                <img className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110  '
                                    src="/imgs/skills/github.jpg" alt="HTML" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >Github</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' py-12 p-4 m-auto'>
                                <img className='m-auto w-[100px] sm:w-[200px] aspect-square 
                        rounded-full hover:scale-110  '
                                    src="/imgs/skills/sql.jpg" alt="Sql" />
                                <h1 className='text-center underline font-bold
                        p-4  text-2xl ' >Sql</h1>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </article>
        </main>
    )
}

export default Skills