import { theme } from '@/src/styles/theme';
import { SContainer } from './styles';

const Button = ({
  bgColor = 'primary',
  leftSlot,
  children,
  props
}: {
  bgColor?: 'primary' | 'secondary';
  leftSlot?: React.ReactNode;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <SContainer
      {...props}
      style={{
        backgroundColor:
          bgColor === 'primary'
            ? theme.color.background.secondary
            : theme.color.background.tertiary,
        ...props?.style
      }}
    >
      {leftSlot ? leftSlot : null}
      {children}
    </SContainer>
  );
};

export default Button;
