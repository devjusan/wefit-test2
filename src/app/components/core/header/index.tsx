'use client';
import Image from 'next/image';
import { SContainer, SItensContainer, SCartContainer } from './styles';
import wallet from '@/src/assets/icons/wallet.svg';
import { useRouter } from 'next/navigation';
import { useShoppingStore } from '@/src/app/stores/shopping-cart';

const Header: React.FC = () => {
  const router = useRouter();
  const quantity = useShoppingStore((state) =>
    state.items.reduce((acc, item) => {
      return acc + Number(item.quantity) || 0;
    }, 0)
  );

  const onCartClick = () => {
    router.push('/cart');
  };

  const onLogoClick = () => {
    router.push('/');
  };

  return (
    <SContainer>
      <div
        onClick={onLogoClick}
        style={{
          cursor: 'pointer'
        }}
      >
        <h3>WeMovies</h3>
      </div>{' '}
      <SCartContainer onClick={onCartClick}>
        <div>
          <h5>Meu Carrinho</h5>
          <SItensContainer>
            {' '}
            {quantity} {quantity > 1 ? 'itens' : 'item'}{' '}
          </SItensContainer>
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
