import React from 'react';
import styled from '@emotion/styled';


type ButtonProps = {
    value: string;
};


interface User {
	id: number,
	name: string,
}


const ButtonStyle = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const Button: React.FC<ButtonProps> = ({ value }) => (
    <ButtonStyle>Hello, {value}</ButtonStyle>
  );
  

  

export default Button;