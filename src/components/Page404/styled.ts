import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: repeating-radial-gradient(
    circle at 50%,
    rgb(26, 133, 233),
    rgb(104, 183, 230) 1em,
    white 1em,
    white 2em
  );

  p {
    font-size: 3rem;
    color: #000;
    margin: auto;
  }
`;
