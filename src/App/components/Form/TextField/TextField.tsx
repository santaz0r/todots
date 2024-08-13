import { FC, InputHTMLAttributes } from 'react';
import styled from './textfield.module.scss';

// type TProps = {
//   text: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({ value, onChange, placeholder, className, ...rest }) => {
  const setClass = () => {
    return className ? `${className} ${styled.my_input}` : styled.my_input;
  };
  return (
    <input
      className={setClass()}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={50}
      {...rest}
    />
  );
};

export default TextField;
