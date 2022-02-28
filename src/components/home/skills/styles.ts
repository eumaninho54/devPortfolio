import styled from "styled-components";

const StyleSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c0918;
  width: 100%;
  margin: auto;
  padding-bottom: 80px;
  padding-top: 100px;

  .title {
    font-size: 35px;
    margin: 0;
  }

  .content {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 1050px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 760px) {
    .title {
      font-size: 25px;
    }
  }
`;

export default StyleSkills;
