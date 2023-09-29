import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import DRLOGO from "./../assets/DR Logo transparent.png"
import { Facebook, Instagram, Linkedin, Road } from "./icons";


export const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div className="navbar1">
                <div className="max-sm:hidden">
                    <div className="topheader text-[15px] max-xl:text-[14px] max-lg:text-[11px]">

                        <div className="header1">
                            <h3><i class="fas fa-phone">  </i> (+383) 045 838 384   </h3>
                            <h3><i class="fa fa-clock"> </i> Hën - Pre: 8:00 - 16:00   </h3>
                            <h3><i class="fa fa-envelope"></i> info@dr-ks.com </h3>
                        </div>

                        <div className="header2 max-xl:hidden">
                            <h3><a href=""> {Facebook} </a> </h3>
                            <h3><a href=""> {Instagram} </a> </h3>
                            <h3><a href=""> {Linkedin} </a> </h3>
                        </div>

                    </div>
                </div>


            </div>
            <nav className="main-nav">
                {/* 1st logo part  */}

                <a href="" className="logo"><img className="DPlogo" src={DRLOGO} /></a>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    } >
                    <ul className="max-sm:text-[15px] text-[2rem]">

                        <a href="/#ballina">Ballina</a>
                        <a href="/#rreth">Rreth</a>
                        <a href="/#oferta">Oferta</a>
                        <Link to="/Kontaktoni">Kontaktoni</Link>

                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media" id="#social-media">

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
            {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}

        </>
    );
};
