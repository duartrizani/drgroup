import React from 'react'
import "./footer.css"
import { Fade } from 'react-awesome-reveal'

export const Footer = () => {
  return (
    <section className="footer">

        <div className="box-conteiner max-sm:flex-col max-sm:pl-10">


            <div className="box">
                <Fade direction='right' cascade triggerOnce>

                
                <h3 className='font-bold text-[3rem] max-xl:text-[20px]'>DR Group</h3>
                <p className='max-w-[420px] text-[1.5rem] max-xl:text-[12px] max-xl:max-w-[250px]'>"DR Group: Specialistë në krijimin e faqeve të internetit me cilësi 
                të shkëlqyeshme dhe inovacion."</p>
                <div className="share">
                    <a href="" className="fab fa-facebook-f"></a>
                    <a href="" className="fab fa-instagram"></a>
                    <a href="" className="fab fa-linkedin"></a>
                </div>

                </Fade>
            </div>

            <div className="box">
            <Fade direction='right' cascade triggerOnce>
                <h3 className='font-bold text-[3rem] max-xl:text-[20px]'>DR Group - info </h3>
                <a href="" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-phone"></i> (+383) 045 649 766</a>
                <a href="" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-mobile"></i> (+383) 045 649 766</a>
                <a href="" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-envelope"></i> info@drgroup-ks.com</a>
                <a href="" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-map-marker-alt"></i> www.drgroup-ks.com</a>
                </Fade>
            </div>

            <div className="box">
            <Fade triggerOnce direction='right' cascade>
                <h3 className='font-bold text-[3rem] max-xl:text-[20px]'>Linqet e shpejta</h3>
                <a href="#ballina" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-arrow-right"></i> Ballina</a>
                <a href="#rreth" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-arrow-right"></i> Rreth</a>
                <a href="#oferta" className="links text-[1.5rem] max-xl:text-[12px]"> <i className="fas fa-arrow-right"></i> Oferta</a>
                </Fade>
            </div>


        </div>
        <Fade triggerOnce delay={2200} >
        <div className="credit">Created by <span>Duart Rizani</span> | all rights reserved</div>
        </Fade>

    </section>
  )
}
