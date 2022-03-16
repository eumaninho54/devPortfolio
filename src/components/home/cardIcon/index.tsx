import React from 'react'
import { StyleCard, StyleLink } from './styles'


interface cardIcon {
  href: string
  children: React.ReactNode
}

export default function CardIcon({ href, children }: cardIcon) {

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      style={StyleLink}>
      <StyleCard>
        {children}
      </StyleCard>
    </a>
  )
}
