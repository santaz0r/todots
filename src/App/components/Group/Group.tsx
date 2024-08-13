import { FC, ReactNode } from 'react';

type TProps = {
  className?: string;
  children: ReactNode;
};

const Group: FC<TProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Group;
