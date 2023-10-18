import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  height: 100%;

  .pointer {
    cursor: pointer;
  }
  th {
    font-size: 1.8rem;
    color: #f1f1f1;
  }
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
`;

export const TableRow = styled.tr<{file: string}>`
  background-color: ${(props) => (props.file === "true" ? "#705E9C" : "#332B47")};

  td {
    padding: 3px;
    color: #fff;
    font-size: 1.5rem;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0px solid transparent;
    background-color: rgba(100, 77, 237, 0.08);
    border-radius: 12px;
    transition: all 0.2s linear;
    cursor: pointer;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 4em;
    background-color: rgba(0, 0, 0, 0.253);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 110%;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent rgba(2, 23, 1, 3.253) transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0%;
  align-items: center;

  h5 {
    margin: auto;
    font-size: 2rem;
    color: #f1f1f1;
  }
`;
