import styled from "styled-components";

export const StyleTitleText = styled.div`
  width: 645px;
  margin: auto;

  p {
    font-size: 40px;
    color: #782cf1;
    margin: 0;
    text-align: left;
  }

  h1 {
    font-size: 80px;
    margin: 0;
  }

  h2 {
    font-size: 40px;
  }

  @media only screen and (max-width: 1050px) {
    width: 100%;

    p {
      font-size: 35px;
      text-align: center;
    }

    h1 {
      font-size: 70px;
    }

    h2 {
      font-size: 35px;
    }
  }

  @media only screen and (max-width: 760px) {
    width: 100%;

    p {
      font-size: 20px;
      text-align: center;
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

export const StyleTitleIcons = styled.div`
  max-width: 335px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 25px;
`;
