import styled from "styled-components";

const StyleAboutMe = styled.section`
  width: 100%;
  margin: auto;
  background-color: #06060a;

  .content {
    padding: 50px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .contentText {
    width: 40%;
    max-width: 600px;

    h1 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
      color: #b6b6b6;
    }

    span{
      color: #722fe6;
    }
  }

  .contentImages {

    .myPhoto {
      border-radius: 50%;
      width: 350px;
      height: 350px;
    }
    
    .points{
        margin-left: -65px;
        vertical-align: top;
    }
  }
`;

export default StyleAboutMe;
