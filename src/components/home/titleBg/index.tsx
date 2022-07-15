import React from 'react'
import { FaLinkedin, FaGithub, FaVoicemail, FaDiscord } from 'react-icons/fa';
import { StyleTitleText, StyleTitleIcons } from './styles'
import CardIcon from '../cardIcon';
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";

export default function TitleBg() {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, [])

  return (
    <>
      <StyleTitleText data-aos='fade-down' data-aos-easing="ease-out-cubic">
        <p>Salve!, eu sou-</p>
        <h1>Angelo Menti.</h1>
        <h2>Front-end Developer</h2>
      </StyleTitleText>

      <StyleTitleIcons data-aos='fade-down' data-aos-easing="ease-out-cubic">
        <CardIcon href={"https://www.linkedin.com/in/angelo-menti-663040210/"}>
          <FaLinkedin size={35} />
        </CardIcon>

        <CardIcon href={"https://github.com/eumaninho54"}>
          <FaGithub size={35} />
        </CardIcon>

        <CardIcon href={"mailto:angelo.omarzinho@outlook.com"}>
          <FaVoicemail size={35} />
        </CardIcon>

        <CardIcon href={"https://discord.gg/dn6kAMpT"}>
          <FaDiscord size={35} />
        </CardIcon>
      </StyleTitleIcons>
    </>
  )

}
