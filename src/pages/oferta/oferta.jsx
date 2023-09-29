import React from 'react'
import { Link } from 'react-router-dom'
import "./oferta.css"

import Placeholder from "./../../assets/placeholder-image.png"
import { Fade } from 'react-awesome-reveal'

import portfolio from './../../assets/mockups/portfolio mockup.jpg'
import business from './../../assets/mockups/Business website.jpg'
import ecommerce from './../../assets/mockups/E-commerce website.jpg'
import custom from './../../assets/mockups/Custom Website.jpg'

export const Oferta = () => {
  return (
    <section className="blogs" id="oferta">
      
      <Fade direction='up' triggerOnce>


        <h1 className="heading font-bold">Ofertat e <span>Websites</span></h1>
      </Fade>

      <div className="box-conteiner">
        <Fade direction='up' triggerOnce>

          <div className="box object-scale-down">
            <img className='object-scale-down' src={portfolio} />
            <div className="content">
              <div className="icons">
                <a href="#"><i className="fas fa-user"></i> DR Group </a>
                <a href="#"><i className="undone fas fa-calendar"></i> 2-3 ditë </a>
              </div>
              <h3 className='font-bold'>Portfolio Website</h3>
              <p>"Elevate your portfolio online with our expertise! We specialize in creating stunning portfolio websites that showcase your work and talent to the world."
              </p>
              <Link to="https://red-toad-292167.builder-preview.com/" target="_blank" className="aplikobtn1">Preview</Link>
            </div>
          </div>
        </Fade>

        <Fade direction='up' triggerOnce>


          <div className="box">
            <img src={business} />
            <div className="content">
              <div className="icons">
                <a href="#"><i className="fas fa-user"></i> DR Group </a>
                <a clas href="#"><i className="undone fas fa-calendar"></i> 3-4 ditë </a>
              </div>
              <h3 className='font-bold'>Business Website</h3>
              <p>"Boost your business presence online with our tailored solutions! We excel in crafting professional business websites that help you stand out and engage your customers."</p>
              <Link to="https://darkblue-rhinoceros-803043.builder-preview.com/" target="_blank" className="aplikobtn1">Preview</Link>
            </div>
          </div>
        </Fade>

        <Fade direction='up' triggerOnce>


          <div className="box">
            <img src={ecommerce} />
            <div className="content">
              <div className="icons">
                <a href="#"><i className="fas fa-user"></i> DR Group </a>
                <a clas href="#"><i className="undone fas fa-calendar"></i> 3-4 ditë </a>
              </div>
              <h3 className='font-bold'>E-commerce Website</h3>
              <p>"Drive online sales with our e-commerce expertise! We design and develop effective e-commerce platforms that provide seamless shopping experiences for your customers."</p>
              <Link to="https://navajowhite-quail-851474.builder-preview.com/" target="_blank" className="aplikobtn1">Preview</Link>
            </div>
          </div>
        </Fade>

        <Fade direction='up' triggerOnce>


          <div className="box">
            <img src={custom} />
            <div className="content">
              <div className="icons">
                <a href="#"><i className="fas fa-user"></i> DR Group </a>
                <a clas href="#"><i className="undone fas fa-calendar"></i> Unknown </a>
              </div>
              <h3 className='font-bold'>Custom Website</h3>
              <p>"Unleash your unique vision online with our custom website services! We create personalized websites that match your exact specifications and requirements."
              </p>
              <Link to="https://peachpuff-mongoose-751078.builder-preview.com/" target="_blank" className="aplikobtn1">Preview</Link>
            </div>
          </div>
        </Fade>

      </div>

    </section>
  )
}
