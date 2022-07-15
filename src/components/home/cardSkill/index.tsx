import React from 'react'
import StyleCardSkill from './styles'

interface cardSkill {
  children: React.ReactNode
  title: string
  text: string
  timeDelay: number
}

export default function CardSkill({ children, title, text, timeDelay }: cardSkill) {
  return (
    <StyleCardSkill data-aos="fade-up" data-aos-delay={timeDelay}>
      <h1>{title}</h1>

      <div className='icons'>
        {children}
      </div>
      
      <p>{text}</p>
    </StyleCardSkill>
  )
}
