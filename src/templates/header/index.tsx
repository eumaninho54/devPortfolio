import React from 'react'
import { HeaderBg } from './styles'
import logoM from "../../assets/chavesM.png"
import { scrollEffect } from '../../utils/scrollEffect'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeConsumer, ThemeProvider } from 'styled-components';
import { themeUi } from '../../config/themes';



export default function Header(props: any) {

  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione'
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;



  return (
    <HeaderBg>
      <div className='content'>
        <img className='logo' src={logoM} alt="logoHTML" />

        <nav className='navScroll'>
          <div className='toggleNavMobile'>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              color={'inherit'}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem key={'aboutMe'} onClick={() => scrollEffect(props.refAboutMe)}>
                Quem é
              </MenuItem>

              <MenuItem key={'Skill'} onClick={() => scrollEffect(props.refSkills)}>
                Conhecimentos
              </MenuItem>

              <MenuItem key={'Projects'} onClick={() => scrollEffect(props.refProjects)}>
                Projetos
              </MenuItem>

              <MenuItem key={'ContacMe'} onClick={() => scrollEffect(props.refContactMe)}>
                Contate-me
              </MenuItem>
            </Menu>

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
