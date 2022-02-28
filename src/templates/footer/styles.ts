import styled from "styled-components";

const StyleFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #06060a;

  .content {
    width: 100;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  p {
    margin: 0;
  }

  span {
    color: #722fe6;
  }

  @media only screen and (max-width: 760px) {
    
    .content{
      padding-bottom: 30px;
    }
    
    p {
      margin: 0;
      font-size: 15px;
      text-align: center;
    }
  }
`;

export default StyleFooter;
