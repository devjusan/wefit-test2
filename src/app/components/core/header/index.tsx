'use client';
import Image from 'next/image';
import { SContainer, SItensContainer, SCartContainer } from './styles';
import wallet from '@/src/assets/icons/wallet.svg';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const onCartClick = () => {
    router.push('/cart');
  };

  return (
    <SContainer>
      <h3>WeMovies</h3>{' '}
      <SCartContainer onClick={onCartClick}>
        <div>
          <h5>Meu Carrinho</h5>
          <SItensContainer> 0 itens </SItensContainer>
        </div>
        <Image
          src={wallet}
          alt='Imagem de um carrinho para compras'
          width={32}
          height={32}
        />
      </SCartContainer>
    </SContainer>
  );
};

export default Header;
