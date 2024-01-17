'use client';
import Image from 'next/image';
import errorImage from '@/src/assets/imgs/error.svg';
import { useRouter } from 'next/navigation';

const GlobalError = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column wrap',
        gap: '2rem',
        height: '100%',
        width: '100%'
      }}
    >
      <Image src={errorImage} alt='Error' width={250} height={300} priority />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <h5>Ooops!</h5>
        <p>
          Ocorreu um erro inesperado. Clique no botão abaixo para tentar
          novamente
        </p>
        <p>Sobre o erro: {error.message || 'Erro desconhecido'}</p>
        <button onClick={() => reset()}>Tentar novamente</button>
        <p>
          Caso o erro persista, tire um print da tela e envie para o suporte
        </p>
        <button onClick={goToHome}>Volte à tela inicial</button>
      </div>
    </div>
  );
};

export default GlobalError;
