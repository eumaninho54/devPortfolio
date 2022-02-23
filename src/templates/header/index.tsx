import React from 'react'
import { HeaderBg, HeaderContent} from './styles'
import logoM from "../../assets/chavesM.png"

export default function Header() {
  
  return (
    <HeaderBg>
      <HeaderContent>
        <img className='logo' src={logoM} alt="logoHTML" />
      </HeaderContent>
    </HeaderBg>
  )
}
