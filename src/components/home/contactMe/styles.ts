import styled from "styled-components";

const StyleContactMe = styled.section`
  user-select: text !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 2px solid white;
  }

  h1 {
    font-size: 35px;
  }

  a {
    text-decoration: none;
  }

  .content {
    width: 100%;
    margin: auto;
    padding-bottom: 80px;
    padding-top: 60px;
    text-align: center;
  }

  .infoContact {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .fieldContact {
    margin-bottom: 10px;
    max-width: 400px;
    width: 95%;
  }


  @media only screen and (max-width: 760px) {
    h1 {
      font-size: 25px;
    }

    a {
      font-size: 15px;
    }

    .emoji{
      display: none;
    }
  }
`;

export default StyleContactMe;
