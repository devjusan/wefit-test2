import { theme } from '@/src/styles/theme';
import { SContainer } from './styles';

const Button = ({
  bgColor = 'primary',
  type = 'button',
  leftSlot,
  children,
  props
}: {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  bgColor?: 'primary' | 'secondary';
  leftSlot?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <SContainer
      type={type}
      style={{
        backgroundColor:
          bgColor === 'primary'
            ? theme.color.background.secondary
            : theme.color.background.tertiary,
        ...props?.style
      }}
      {...props}
    >
      {leftSlot ? leftSlot : null}
      {children}
    </SContainer>
  );
};

export default Button;
