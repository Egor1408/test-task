import React from 'react';
import './Button.css';
type ButtonProps = {
  title: string
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button>{title}</button>
  )
}

export default Button