import React, { useEffect, useState } from 'react'
import ProjectData from '../Data/Projects.json'
import 'animate.css';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProjects(ProjectData);
        }, 1000)
    }, [])
    return (
        <main
            id='projects'
            className='p-4 text-white'>
            <h1 className='text-2xl text-center sm:text-4xl font-bold my-4 pb-8 '>Proyectos</h1>
            <div className='grid sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 pb-6'>
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            // w-[250px] h-[200px]
                            className='relative w-[250px] h-[200px]  md:w-[300px] md:h-[250px] flex justify-center m-auto py-4'>
                            <div className=' flex flex-col justify-center items-center cursor-pointer 
                            hover:opacity-100  '>
                                <img className='rounded-3xl w-[250px] h-[200px] md:w-[300px] md:h-[250px]
                                '
                                    src={project.image} alt={project.alt} />
                            </div>

                            <div className='opacity-0 absolute  hover:opacity-100 hover:top-0 hover:right-0  
                hover:border hover:text-white hover:w-[250px] hover:h-[200px] rounded-3xl font-bold
                md:hover:top-4 md:hover:left-0 
                md:hover:w-[300px] md:hover:h-[220px]
                hover:transition-all hover:duration-500
                bg-gradient-to-br from-gray-700 via-gray-900 to-black'>

                                <div className='m-auto 
                                h-[200px] md:h-[220px]
                                rounded-3xl 
                                grid justify-center items-center ' >

                                    <h3
                                        className=' text-center font-urbanist p-2 text-white 
                                        bg-black/50 dark:rounded-3xl mx-2 '>
                                        {project.title}
                                    </h3>
                                    <div className='flex justify-center items-center gap-3' >
                                        {
                                            // console.log(project.technology)
                                            project.technology.includes("html5") && (
                                                <i className='bx bxl-html5 text-[20px] text-black dark:text-white '></i>
                                            )
                                        }
                                        {
                                            project.technology.includes("css3") && (
                                                <i className='bx bxl-css3 text-[20px] text-black dark:text-white'></i>
                                            )
                                        }
                                        {
                                            project.technology.includes("js") && (
                                                <i className='bx bxl-javascript text-[20px] text-black dark:text-white'></i>
                                            )
                                        }
                                        {
                                            project.technology.includes("react") && (
                                                <i className='bx bxl-react text-[20px] text-black dark:text-white'></i>
                                            )
                                        }
                                        {
                                            project.technology.includes("tailwind") && (
                                                <i className='bx bxl-tailwind-css text-[20px] text-black dark:text-white'></i>
                                            )
                                        }
                                    </div>
                                    <div className='flex gap-4 justify-center py-4'>
                                        <a href={project.siteLink} target='_blank'
                                            className='transition-colors duration-700 cursor-pointer 
                                        hover:border border-b-2 border-white font-light m-1  text-center 
                                        rounded-3xl px-3 py-2 hover:text-white'>Visitar Sitio</a>
                                        <a href={project.codeLink} target='_blank'
                                            className='transition-colors duration-700 cursor-pointer 
                                        hover:border border-b-2 border-white font-light m-1 text-center 
                                        rounded-3xl px-3 py-2 hover:text-white'>Ver Código</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Projects