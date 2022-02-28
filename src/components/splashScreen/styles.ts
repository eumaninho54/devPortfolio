import styled from "styled-components";

export const SplashScreenBg = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 3;
  background-color: black;
  transition: 1s;

  .content {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
