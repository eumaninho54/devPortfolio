import React from 'react'
import { FaLinkedin, FaGithub, FaVoicemail, FaDiscord } from 'react-icons/fa';
import { StyleTitleText, StyleTitleIcons } from './styles'
import CardIcon from '../cardIcon';


export default function TitleBg() {
  return (
    <>
      <StyleTitleText>
        <p>Salve!, eu sou-</p>
        <h1>Angelo Menti.</h1>
        <span>Front-end Developer</span>
      </StyleTitleText>
        
      <StyleTitleIcons>
        <CardIcon href={"https://www.linkedin.com/in/angelo-menti-663040210/"}>
          <FaLinkedin size={35}/>
        </CardIcon>

        <CardIcon href={"https://github.com/ymaninho54"}>
          <FaGithub size={35}/>
        </CardIcon>

        <CardIcon href={"mailto:angelo.omarzinho@outlook.com"}>
          <FaVoicemail size={35}/>
        </CardIcon>

        <CardIcon href={"https://discord.gg/dn6kAMpT"}>
          <FaDiscord size={35}/>
        </CardIcon>
      </StyleTitleIcons>
    </>
  )

}
