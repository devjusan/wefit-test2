'use client';
import Image from 'next/image';
import { SContainer, SItensContainer, SCartContainer } from './styles';
import wallet from '@/src/assets/icons/wallet.svg';
import { useRouter } from 'next/navigation';
import { useShoppingStore } from '@/src/app/stores/shopping-cart';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { SESSION_KEY } from '@/src/constants/storage';
import { IShoppingCard } from '@/src/types/card';

const Header: React.FC = () => {
  const router = useRouter();
  const [shoppingCard, setShoppingCard] = useLocalStorage<Array<IShoppingCard>>(
    SESSION_KEY,
    []
  );
  const items = useShoppingStore((state) => state.items);
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

  useEffect(() => {
    if (shoppingCard.length > 0) {
      const itemsMapAux = new Map(shoppingCard.map((item) => [item.id, item]));

      useShoppingStore.setState({ items: shoppingCard, itemsMapAux });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShoppingCard(items);
  }, [items, setShoppingCard]);

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
