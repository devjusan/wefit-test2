'use client';
import Image from 'next/image';
import { useShoppingStore } from '../stores/shopping-cart';
import emptyList from '@/src/assets/imgs/empty-list.svg';
import { SContainer } from './styles';
import Button from '../components/ui/button';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter();
  const items = useShoppingStore((state) => state.items);

  const handleBack = () => {
    router.push('/');
  };

  if (!items.length)
    return (
      <SContainer
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3.2rem',
          padding: '4rem 2rem'
        }}
      >
        <h3
          style={{
            color: '#111'
          }}
        >
          Parece que não há nada por aqui :(
        </h3>
        <Image src={emptyList} alt='Lista vazia' />
        <Button props={{ onClick: handleBack }}>Voltar</Button>
      </SContainer>
    );

  return <SContainer>Cart</SContainer>;
};

export default Cart;
