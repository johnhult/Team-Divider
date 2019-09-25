import styled from "styled-components"

export const InputStyled = styled.label`
  display: flex;
  flex: 1;
  align-items: center;
  input {
    flex: 1;
    margin: 0 10px 0 5px;
    width: 0;
    border-radius: 50px;
    border: 2px solid #23987a;
    padding: 3px 10px;
    transition: 0.2s;
    outline: none;
    height: 35px;
    &:focus {
      border: 2px solid #3ce4b9;
    }
  }
`
