import React from 'react';
import { ButtonStyle } from './styles';

const Button = (props) => {
  console.log({ props })
  return (
  <ButtonStyle color={props.color} onClick={props.onClick}>
    {props.textButton}
  </ButtonStyle>
  )
};


export default Button;