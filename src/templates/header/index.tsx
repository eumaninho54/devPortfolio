import React from 'react'
import { HeaderBg, HeaderContent, HeaderNav} from './styles'
import logoM from "../../assets/chavesM.png"
import { scrollEffect } from '../../utils/scrollEffect'

export default function Header(props: any) {

  
  return (
    <HeaderBg>
      <HeaderContent>
        <img className='logo' src={logoM} alt="logoHTML" />

        <HeaderNav>
          <span onClick={() => scrollEffect(props.refAboutMe)}>Quem é</span>
          <span onClick={() => scrollEffect(props.refSkills)}>Conhecimentos</span>
          <span onClick={() => scrollEffect(props.refProjects)}>Projetos</span>
          <span>Contate-me</span>
        </HeaderNav>
      </HeaderContent>
    </HeaderBg>
  )
}
