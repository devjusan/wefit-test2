'use client';
import Image from 'next/image';
import notFound from '@/src/assets/imgs/not-found.svg';
import { useRouter } from 'next/navigation';

const NotFound = () => {
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
      <Image
        src={notFound}
        alt='Não encontrado'
        width={250}
        height={300}
        priority
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <h5 style={{ fontSize: '1.6rem', color: 'black' }}>Ooops!</h5>
        <p style={{ fontSize: '1.6rem' }}>
          A página que você está procurando não existe.
        </p>
        <button onClick={goToHome}>Voltar</button>
      </div>
    </div>
  );
};

export default NotFound;
