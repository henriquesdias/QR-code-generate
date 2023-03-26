import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid black;
  height: 40px;
  margin-bottom: 50px;
  div {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid grey;
    background-color: #e0d7d7;
    border-radius: 10px 0 0 10px;
  }
  input {
    width: 75%;
    outline: none;
    border-radius: 0 10px 10px 0;
    border: none;
  }
`;
