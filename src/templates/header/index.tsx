import React from 'react'
import { HeaderBg, HeaderContent, HeaderNav} from './styles'
import logoM from "../../assets/chavesM.png"
import { scrollEffect } from '../../utils/scrollEffect'

export default function Header({refAboutMe}: any) {

  
  return (
    <HeaderBg>
      <HeaderContent>
        <img className='logo' src={logoM} alt="logoHTML" />

        <HeaderNav>
          <span onClick={() => scrollEffect(refAboutMe)}>Quem é</span>
          <span>Conhecimentos</span>
          <span>Projetos</span>
          <span>Experiência</span>
        </HeaderNav>
      </HeaderContent>
    </HeaderBg>
  )
}
