import styled from "styled-components";

export const HeaderBg = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #0c0918f1;
  border-bottom: 1px solid #18191f;
  backdrop-filter: blur(7px);

  .iconMobileMenu{
    width: 50px;
    height: 50px;
    cursor: pointer;
    animation: 0.4s;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    max-width: 1300px;
    margin: auto;
    flex-direction: row;
    align-items: center;
    height: 100%;

    .logo {
      height: 40px;
    }
  }

  .toggleNavMobile {
    display: none;
  }

  .navScroll {
    span {
      padding: 20px;
      text-decoration: none;
      color: #aca9aa;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  .menuItem {
    background-color: #18191f;
    color: white;
  }

  @media only screen and (max-width: 1050px) {
    span {
      display: none;
    }

    .toggleNavMobile {
      display: initial;
    }
  }
`;
