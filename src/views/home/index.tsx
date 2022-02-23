import React from 'react'
import ParticlesBg from '../../components/home/particlesBg'
import TitleBg from '../../components/home/titleBg'
import HomeDiv from './styles'

export default function Home() {
  return (
    <HomeDiv>
      <ParticlesBg>
        <TitleBg />
      </ParticlesBg>
    </HomeDiv>
  )
}
