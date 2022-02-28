import styled from "styled-components";

export const StyleCard = styled.div`
  border: 2px solid gray;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: white;
  }

  @media only screen and (max-width: 760px) {
    width: 45px;
    height: 45px;
  }
`;

export const StyleLink = {
  color: "white",
};
