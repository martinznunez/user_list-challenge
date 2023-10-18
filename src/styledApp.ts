import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const ContainerCurrentPage = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;

  p {
    font-size: 2rem;
    color: #f1f1f1;
  }
`;
