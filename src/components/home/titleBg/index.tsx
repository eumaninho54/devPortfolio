import React from 'react'
import { FaLinkedin, FaGithub, FaVoicemail, FaDiscord } from 'react-icons/fa';
import { TitleText, TitleIcons } from './styles'
import CardIcon from '../cardIcon';


export default function TitleBg() {
  return (
    <>
      <TitleText>
        <p>Salve!, eu sou-</p>
        <h1>Angelo Menti.</h1>
        <span>Front-end Developer</span>
      </TitleText>
        
      <TitleIcons>
        <CardIcon>
          <FaLinkedin size={35}/>
        </CardIcon>

        <CardIcon>
          <FaGithub size={35}/>
        </CardIcon>

        <CardIcon>
          <FaVoicemail size={35}/>
        </CardIcon>

        <CardIcon>
          <FaDiscord size={35}/>
        </CardIcon>
      </TitleIcons>

      
    </>
  )

}
