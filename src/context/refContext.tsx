import React, { createContext, useRef } from 'react'
import { refContextProps } from '../components/models/refContextModel'

interface AuthProviderProps {
  children: React.ReactNode
}


export const RefContext = createContext<refContextProps | any>({})
const { Provider } = RefContext

export const RefProvider = ({ children }: AuthProviderProps) => {
  const aboutMeScroll = useRef(null)
  const skillsScroll = useRef(null)
  const projectsScroll = useRef(null)
  const contactMeScroll = useRef(null)


  return (
    <Provider
      value={{
        aboutMeScroll,
        skillsScroll,
        projectsScroll,
        contactMeScroll
      }}>
      {children}
    </Provider>
  )
}