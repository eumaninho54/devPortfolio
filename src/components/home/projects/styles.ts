import styled from "styled-components";

const StyleProjects = styled.section`
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
  }
`;

export default StyleProjects;
