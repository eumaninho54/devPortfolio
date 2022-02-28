import styled from "styled-components";

const StyleCardSkill = styled.div`
  width: 300px;
  height: 380px;
  margin: 40px 20px 0px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  border: 1px solid #eeeeee;
  transition: 0.4s;

  &:hover {
    border: 1px solid #782cf1;
  }

  .icons {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
  }

  h1 {
    font-size: 35px;
    margin-top: 0;
  }

  p {
    width: 97%;
  }

  @media only screen and (max-width: 1050px) {
    width: 400px;
  }

  @media only screen and (max-width: 760px) {
    max-width: 400px;
    width: 95%;

    h1 {
      font-size: 25px;
      margin-top: 0;
    }

    p {
      width: 97%;
    }
  }
`;

export default StyleCardSkill;
