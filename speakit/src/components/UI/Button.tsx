import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>{text}</button>
  );
}

export default Button;
