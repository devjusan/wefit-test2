import { SContainer } from './styles';

const Button = ({
  leftSlot,
  children
}: {
  leftSlot?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <SContainer>
      {leftSlot ? leftSlot : null}
      {children}
    </SContainer>
  );
};

export default Button;
