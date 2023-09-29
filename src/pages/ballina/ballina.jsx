import React, { useRef, useState } from 'react';
import Image from "./../../assets/DR Cover transparent.png"
import "./ballina.css"
import { Fade } from 'react-awesome-reveal';



export const Ballina = () => {

    return (
        <div className='ballina' id="ballina">
            <section className='ballin h-[800px] max-h-[800px] max-xl:max-h-[560px] flex justify-center'>
                <div className='flex flex-col lg:flex-row max-lg:flex-col-reverse'>
                    <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <Fade direction='down' cascade triggerOnce>
                        <h1 className='text-4x1 lg:text-[28px] font-semibold leading-none mb-6 text-black max-lg:text-[30px] max-md:text-[24px]'>
                            <span className='text-red-800 font-bold'>DR Group</span> është një kompani e 
                            <span className='text-red-800 font-bold'> Web Design</span> dhe <span className='text-red-800 font-bold'>Development</span> që është 
                            e specializuar në krijimin e llojeve të ndryshme të faqeve të internetit
                        </h1>
                        <br/>
                        <br/>
                        <br/>
                        <p className='lg:text-[20px] max-w-[480px] mb-8 text-black max-lg:text-[2rem]' >
                        Duke përfshirë <span className='text-red-800 font-bold'>e-commerce websites, business websites,</span> dhe <span className='text-red-800 font-bold'>personal websites.</span>
                        </p>
                        </Fade >
                    </div>
                    {/* img*/}
                    <div className=' flex-1 lg:flex justify-end max-md:flex'>
                        <img className='max-h-[640px] object-scale-down' src={Image}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

