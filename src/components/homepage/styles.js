import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: grey;
`;

export const TitleContainer = styled.div`
  align-self: center;
  margin: 0;
  width: 400px;
  padding: 10px 0 0 0;
`;

export const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 400px;
  margin: 0 0 30px 0;
`;

export const Input = styled.input`
  text-align: center;
  width: 200px;
`;

export const CustomInput = styled(Input)`
  color: red;
`;

export const Label = styled.label`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin: 0 30px 0 0;
`;

export const Button = styled.button`
  text-align: center;
  font-size: 20px;
  padding: 5px;
  border-width: 3px;
  border-radius: 5px;
  cursor: pointer;
  &:hover:enabled {
    background-color: yellow;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  width: 120px;
  cursor: pointer;
`;
