import React from 'react'
import './rreth.css'
import "./../../components/btnred.css"
import Image from './../../assets/webpage1.png'
import { Fade } from 'react-awesome-reveal'

export const Rreth = () => {
    return (
        <div className='workapp max-lg:flex max-lg:justify-center max-lg:flex-col max-xl:flex-col' id="rreth">

            <Fade direction='left' triggerOnce>

                <div className="workimg w-[100%] hidden flex-1 lg:flex justify-end items-end">
                    <img src={Image} />
                </div>
            </Fade>

            <div className='container'>
                <Fade direction='down' triggerOnce>
                    <br />
                    <br />
                    <h1 className='font-bold text-decoration-line: underline decoration-red-800 underline-offset-8'>Kush Jemi Ne?</h1>
                    <br />
                    <br />
                </Fade>
                <div className='aboutus text-[2.5rem] max-lg:text-[2rem] max-md:flex-col'>
                    <Fade direction='right' cascade triggerOnce>



                        <div className="apliko">

                            <h3 className='font-bold'>DR Group - Cilësia</h3>
                            <p className='max-w-[480px] text-[1.7rem] max-lg:max-w-[800px] max-lg:text-[1.2rem]'>"Partneri juaj i besueshëm për krijimin 
                            e faqeve të internetit të nivelit të lartë, duke kombinuar krijimtarinë dhe funksionalitetin për të sjellë vizionin tuaj në jetë në internet."</p>

                        </div>

                        <div className="apliko">
                            <h3 className='font-bold'>Të besueshëm</h3>
                            <p className=' max-w-[480px] text-[1.7rem] max-lg:max-w-[800px] max-lg:text-[1.2rem]'>"Ekipet tona përbehen nga ekspertët që zgjidhen posaçërisht
                             për secilin fushë dhe qasja jonë e orientuar drejt klientit është dëshmi i shërbimit të besueshëm"</p>
                        </div>

                        <div className="apliko">
                            <h3 className='font-bold'>Jemi kreativ</h3>
                            <p className='max-w-[480px] text-[1.7rem] max-lg:max-w-[800px] max-lg:text-[1.2rem]'>"Ne gjithmonë punojme për te zhvidhuar metodat inovative ne 
                            ndërtimë duke përdorur teknologjinë dhe materiale te reja dhe kualitative."</p>
                        </div>

                        <div className="apliko">
                            <h3 className='font-bold'>Përkushtimi</h3>
                            <p className='max-w-[480px] text-[1.7rem] max-lg:max-w-[800px] max-lg:text-[1.2rem]'>"Angazhimi ynë maksimal dhe puna jonë cilësore vetëm për 
                            kënaqësinë e klientit."</p>
                        </div>
                    </Fade>
                </div>
                <Fade delay={2000} triggerOnce>

                    {/* <a href="#" className="aplikobtn btn">Më Shumë</a> */}
                    <br />
                    <br />
                    <br />
                </Fade>


            </div>

        </div>
    )
}
