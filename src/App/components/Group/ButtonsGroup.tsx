import { FC, PropsWithChildren } from 'react';

const ButtonsGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div style={{ display: 'flex' }}>{children}</div>;
};

export default ButtonsGroup;
