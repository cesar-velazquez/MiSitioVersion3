import SoftSkillsSwipper from './SoftSkillsSwipper'
import './css/SoftSkills.css';
import { t } from 'i18next';


const SoftSkills = () => {
    return (
        <main>
            <section className='lg:hidden'>
                    <SoftSkillsSwipper />            
            </section>
            {/* Vista 1024px */}
            <section className='hidden lg:block '  >
                <div className='absolute w-[150px] h-[100px] right-[5rem] bottom-[5rem] animate-wiggleIn
                bg-yellow-50 rounded-md '>
                    <p className=" h-[30px] w-[100%] text-center ">{t('communication')}</p>
                    <div className="absolute w-[100px] h-[50%] left-1/2 -translate-x-1/2 top-[30%]">
                        <img className='' src="/imgs/skills/comunicacion.svg" alt="Comunicación" />
                    </div>
                </div>

                <div className='absolute w-[150px] h-[100px] left-[5rem] bottom-[5rem] animate-wiggleIn
                bg-yellow-50 rounded-md  '>
                    <p className="text-center ">empathy</p>
                    <div className="absolute w-[100px] h-[75%] left-1/2 -translate-x-1/2 ">
                        <img className='' src="/imgs/skills/empatia.svg" alt="" />
                    </div>
                </div>

                <div className='absolute w-[180px] h-[150px] left-[5rem] top-[4rem] animate-wiggleIn
                bg-yellow-50 rounded-md '>
                    <p className="text-center ">{t('teamwork')}</p>
                    <div className="absolute w-[100px] h-[90px] mt-2 left-1/2 -translate-x-1/2 ">
                        <img src="/imgs/skills/trabajoenequip.svg" alt="" />
                    </div>
                </div>

                <div className='absolute w-[150px] h-[130px] right-[5rem] top-[4rem] animate-wiggleIn
                bg-yellow-50 rounded-md '>
                    <p className="text-center ">{t('perseverance')}</p>
                    <div className="absolute w-[100px] h-[100px] left-1/2 -translate-x-1/2 top-[30%] ">
                        <img src="/imgs/skills/perseverancia.svg" alt="Perseverancia" />
                    </div>
                </div>

                <div className='absolute w-[170px] h-[140px] left-[48%] -translate-x-1/4 top-[3.8rem] hover:scale-105 hover:cursor-text
                bg-yellow-50 rounded-md '>
                    <p className="w-[170px] text-center ">{t('service')}</p>
                    <div className="absolute w-[100px] h-[100px] left-1/2 -translate-x-1/2  ">
                        <img src="/imgs/skills/servicioalcliente.svg" alt="Servicio al Cliente" />
                    </div>
                </div>

                <div className='absolute w-[220px] h-[100px] left-[44%] -translate-x-1/4 bottom-[6rem] hover:scale-105 hover:cursor-text
                bg-yellow-50'>
                    <p className="text-center ">{t('solving')}</p>
                    <div className="absolute w-[130px] h-[70px] left-1/2 -translate-x-1/2 ">
                        <img src="/imgs/skills/resoluciondeproblemas.svg" alt="ResoluciónProblemas" />
                    </div>
                </div>

            </section>
        </main>
    )
}

export default SoftSkills