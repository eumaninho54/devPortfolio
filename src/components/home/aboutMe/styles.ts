import styled from "styled-components";

const StyleAboutMe = styled.section`
  width: 100%;
  margin: auto;
  background-color: #06060a;

  .content {
    padding: 80px 40px;
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

    span {
      color: #722fe6;
    }
  }

  .contentImages {
    .myPhoto {
      border-radius: 50%;
      width: 350px;
      height: 350px;
    }

    .points {
      margin-left: -65px;
      vertical-align: top;
    }
  }

  @media only screen and (max-width: 1050px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .contentText {
      width: 90%;
    }
  }

  @media only screen and (max-width: 760px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .contentText {
      width: 90%;
      text-align: center;

      h1 {
        font-size: 25px;
      }

      p {
        font-size: 15px;
      }
    }

    .contentImages {
      .myPhoto {
        width: 250px;
        height: 250px;
      }

      .points {
        display: none;
      }
    }
  }
`;

export default StyleAboutMe;
