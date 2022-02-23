import React from 'react'
import { HeaderBg, HeaderContent, HeaderNav} from './styles'
import logoM from "../../assets/chavesM.png"

export default function Header() {
  
  return (
    <HeaderBg>
      <HeaderContent>
        <img className='logo' src={logoM} alt="logoHTML" />

        <HeaderNav>
          <a href="/">Quem é</a>
          <a href="/">Conhecimentos</a>
          <a href="/">Projetos</a>
          <a href="/">Experiência</a>
        </HeaderNav>
      </HeaderContent>
    </HeaderBg>
  )
}
