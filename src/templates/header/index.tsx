import React from 'react'
import { HeaderBg, HeaderContent, HeaderNav} from './styles'
import logoM from "../../assets/chavesM.png"

export default function Header() {
  
  return (
    <HeaderBg>
      <HeaderContent>
        <img className='logo' src={logoM} alt="logoHTML" />

        <HeaderNav>
          <a href="/" target="_blank">Quem é</a>
          <a href="/" target="_blank">Conhecimentos</a>
          <a href="/" target="_blank">Projetos</a>
          <a href="/" target="_blank">Experiência</a>
        </HeaderNav>
      </HeaderContent>
    </HeaderBg>
  )
}
