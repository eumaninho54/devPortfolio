import React, { useEffect, useState } from 'react'
import { HeaderBg } from './styles'
import logoM from "../../assets/chavesM.png"
import { scrollEffect } from '../../utils/scrollEffect'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, StyledModal } from '../../config/themes';
import Aos from 'aos'
import "aos/dist/aos.css"


export default function Header(props: any) {

  const [displayButtonModalOpen, setDisplayButtonModalOpen] = useState('initial')
  const [displayButtonModalClose, setDisplayButtonModalClose] = useState('none')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setDisplayButtonModalOpen('none')
    setDisplayButtonModalClose('initial')
  };
  const handleClose = () => {
    setOpen(false);
    setDisplayButtonModalOpen('initial')
    setDisplayButtonModalClose('none')
  };

  useEffect(() => {
    Aos.init({ duration: 2000, once: true  })
  }, [])


  return (
    <HeaderBg>
      <div className='content'>
        <img className='logo' src={logoM} alt="logoHTML" />

        <nav className='navScroll'>
          <div className='toggleNavMobile'>
            <div onClick={() => open ? handleClose() : handleOpen()}>
              <ClearAllIcon className='iconMobileMenu' style={{display: displayButtonModalOpen}}/>
              <CloseIcon className='iconMobileMenu' style={{display: displayButtonModalClose}}/>
            </div>

            <StyledModal
              open={open}
              onClose={handleClose}
              BackdropComponent={Backdrop}>
              <div 
                data-aos='fade-right' 
                data-aos-easing="ease-in-out-cubic" 
                onClick={() => handleClose()} className='buttonsModal'>
                <span onClick={() => scrollEffect(props.refAboutMe)} >
                    Quem é
                </span>
                <span onClick={() => scrollEffect(props.refSkills)}>
                    Conhecimentos
                </span>
                <span  onClick={() => scrollEffect(props.refProjects)}>
                    Projetos
                </span>
                <span onClick={() => scrollEffect(props.refContactMe)}>
                    Contate-me
                </span>
              </div>
            </StyledModal>

          </div>
          <span onClick={() => scrollEffect(props.refAboutMe)}>Quem é</span>
          <span onClick={() => scrollEffect(props.refSkills)}>Conhecimentos</span>
          <span onClick={() => scrollEffect(props.refProjects)}>Projetos</span>
          <span onClick={() => scrollEffect(props.refContactMe)}>Contate-me</span>
        </nav>
      </div>
    </HeaderBg>
  )
}
