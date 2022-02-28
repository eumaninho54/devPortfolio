import { createTheme, styled } from "@mui/material";
import ModalUnstyled from '@mui/base/ModalUnstyled';


export const themeUi = createTheme({
  palette: {
    text: { primary: "#ffffff", secondary: "#eeeeee" },
    primary: { main: "#782cf1" },
    secondary: { main: "#eeeeee" },
  },
});

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 400px;
  top: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  .buttonsModal{
    display: flex;
    flex-direction: column;
    text-align: center;
    outline: none;

    span{
      margin: 20px;
      font-size: 24px;
      cursor: pointer;

      &:hover{
        color: #782cf1;
      }
    }
  }
`;

export const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  margin-top: 81px;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: #0c0918;
  -webkit-tap-highlight-color: transparent;
`;