import React, { useEffect, useRef, useState } from 'react'
import Particles from 'react-tsparticles'
import { StyleParticles, ArrowSlide } from './styles'
import { BsArrowDownShort } from 'react-icons/bs';
import { scrollEffect } from '../../../utils/scrollEffect';

export default function ParticlesBg(props: any) {
  const [posArrow, setPosArrow] = useState('0px')
  //const arrowDownScroll = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      posArrow === "0px" ? setPosArrow(() => '30px') : setPosArrow(() => '0px')
    }, 1000);
    return () => clearInterval(interval);
  }, );

  
  return (
    <StyleParticles className='oi'>
      <Particles
        className='wrapper'
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0c0918",
            },
          },
          fullScreen: false,
          fpsLimit: 144,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />

      <div className='contentTitle'>
        {props.children}
      </div>


      <ArrowSlide className="oi">
            <BsArrowDownShort 
            onClick={() => scrollEffect(props.refAboutMe)}   
            size={55}
            style={{paddingTop: posArrow, transition: "0.4s", cursor: "pointer"}}/>

      </ArrowSlide>

    </StyleParticles>
  )
}
