import styled from 'styled-components';

export const HeaderBg = styled.header`
  
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #0c09187a;
  border-bottom: 1px solid #18191f;
  backdrop-filter: blur(7px);

`;

export const HeaderContent = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  max-width: 1300px;
  margin: auto;
  flex-direction: row;
  align-items: center;
  height: 100%;


  .logo{
    height: 40px;
  }
`;

export const HeaderNav = styled.nav`
  
  a{
    padding: 20px;
    text-decoration: none;
    color: #ACA9AA;

    &:hover{
      color: white;
    }
  }


`;

