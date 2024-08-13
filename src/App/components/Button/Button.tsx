import { ButtonHTMLAttributes, FC } from 'react';
import styled from './button.module.scss';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, disabled, className, children, ...rest }) => {
  const setClass = () => {
    return `${styled.button} ${className || ''}`;
  };
  return (
    <button className={setClass()} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
