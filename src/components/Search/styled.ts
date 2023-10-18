import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  position: relative;

  .reset-icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 10px;
    height: 100%;
    cursor: pointer;

    font-weight: 900;
    color: red;
    font-size: 1.5rem;
  }
`;

export const StyledInput = styled.input`
  background-color: #212121;
  width: 190px;
  height: 20px;
  padding: 10px;

  border: 2px solid white;
  border-radius: 5px;

  color: rgb(0, 255, 255);
  font-size: 1.5rem;
  &::placeholder {
    font-size: 1.3rem;
  }
  &:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);

    transition: 2.1s;
  }
`;
