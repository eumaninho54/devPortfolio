import styled from "styled-components";

const StyleCardProject = styled.div`
  width: 480px;
  border-radius: 7px;
  border: 1px solid #eeeeee;
  margin: 50px 0;
  transition: 0.4s;
  padding-bottom: 30px;
  height: max-content;

  &:hover {
    border: 1px solid #782cf1;
  }

  img {
    width: 100%;
    height: 50%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    opacity: 90%;
  }

  a {
    text-decoration: none;
    color: #eeeeee;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      color: #782cf1;
    }
  }

  h1 {
    margin-bottom: 15px;
    margin-top: 10px;
  }

  p {
    width: 95%;
    margin: 15px 10px 4px 10px;
    word-wrap: break-word;
    color: #b6b6b6;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 15px;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  .groupTools {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .tool {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      margin-left: 3px;
    }
  }

  @media only screen and (max-width: 1050px) {
    max-width: 480px;
    width: 90%;

    .groupTools {
      width: 100%;
    }

    .content{
      height: 500px;
    }

    

    .tool {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 3px;
      font-size: 12px;
    }
  }
  }
`;

export default StyleCardProject;
