import React from 'react'
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import {AiOutlineHome} from "react-icons/ai"


export const Facebook = [
  <BiLogoFacebook
  color='#979494'
  size={22}
    onMouseOver={({target})=>target.style.color="#83111a"}
    onMouseOut={({target})=>target.style.color="#979494"}
  />
]

export const Instagram = [
  <AiOutlineInstagram
  color='#979494'
  size={22}
  onMouseOver={({target})=>target.style.color="#83111a"}
    onMouseOut={({target})=>target.style.color="#979494"}
  />
]

export const Linkedin = [
  <BiLogoLinkedin
  color='#979494'
  size={22}
  onMouseOver={({target})=>target.style.color="#83111a"}
    onMouseOut={({target})=>target.style.color="#979494"}
  />
]
export const Road = [
  <AiOutlineHome
  color='#979494'
  size={22}
  onMouseOver={({target})=>target.style.color="#83111a"}
    onMouseOut={({target})=>target.style.color="#979494"}
  />
]