import styled from "styled-components";

export const StyleProjects = styled.section`
  background-color: #06060a;
  width: 100%;
  margin: auto;
  padding-bottom: 80px;
  padding-top: 80px;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .groupCard{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .titleProjects {
    font-size: 35px;
  }

  a {
    text-decoration: none;
  }

  .moreProjects {
    width: 180px;
    color: #722fe6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 1050px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .groupCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
    }
  }

  @media only screen and (max-width: 760px) {
    .titleProjects {
      font-size: 25px;
    }

    a {
      font-size: 15px;
    }

    p{
      font-size: 12px;
    }
  }
`;

export const CarouselDiv = styled.div`

  .rec.rec-dot_active {
    background-color: #4f0db9;
    width: 30px;
    border-radius: 10px;
  }

  .rec.rec-dot:hover {
    background-color: #4f0db9;
  }

  .rec-dot{
    box-shadow: 0 0 1px 3px #8866c4;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px;

  .carousel{
    max-width: 1300px;
    width: 100%;
  }

  @media only screen and (max-width: 760px) {
    .rec.rec-arrow{
      width: 25px;
      height: 50px;
      font-size: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

