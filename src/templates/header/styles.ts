import styled from 'styled-components';

export const HeaderBg = styled.header`
  
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #0f0b227a;
  border-bottom: 1px solid #18191f;
  backdrop-filter: blur(7px);

`;

export const HeaderContent = styled.div`

  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0px 40px;


  .logo{
    height: 40px;
  }
`;

