import React from 'react';
import { ButtonStyle } from './styles';

const Button = (props) => {
  const elementoDoButton = 'elemento do button'
  return (
  <ButtonStyle color={props.color} onClick={() => props.onClick(elementoDoButton)}>
    {props.textButton}
  </ButtonStyle>
  )
};


export default Button;