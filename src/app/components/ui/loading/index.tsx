'use client';
import Image from 'next/image';
import spinner from '@/src/assets/icons/spinner.svg';
import { SContainer } from './styles';

const LoadingSpinner: React.FC = () => {
  return (
    <SContainer>
      <Image src={spinner} alt='Tela de carregando' width={55} height={55} />
    </SContainer>
  );
};

export default LoadingSpinner;
