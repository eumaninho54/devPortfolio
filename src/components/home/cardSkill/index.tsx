import React, { ReactChildren } from 'react'
import StyleCardSkill from './styles'

interface cardSkill{
    children: any
    title: string
    text: string
}

export default function CardSkill({children, title, text}: cardSkill) {
  return (
    <StyleCardSkill>
        <h1>{title}</h1>
        <div className='icons'>
            {children}
        </div>
        <p>{text}</p>
    </StyleCardSkill>
  )
}
