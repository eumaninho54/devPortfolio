import styled from 'styled-components';

export const SplashScreenBg = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 3;
  background-color: black;
  transition: 1.0s;
  
`;

export const SplashScreenContent = styled.div`
    position: relative;
    top: 40%;
    transform: translateY(-50%); 

`;
