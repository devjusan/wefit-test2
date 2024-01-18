import { SContainer } from './styles';

const Button = ({
  leftSlot,
  children,
  props
}: {
  leftSlot?: React.ReactNode;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <SContainer {...props}>
      {leftSlot ? leftSlot : null}
      {children}
    </SContainer>
  );
};

export default Button;
