import styled from "styled-components";

const StyleFooter = styled.footer`
  width: 100%;
  background-color: #06060a;
  padding-bottom: 30px;

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
      padding-bottom: 60px;
    }
    
    p {
      margin: 0;
      font-size: 13px;
      text-align: center;
    }
  }
`;

export default StyleFooter;
