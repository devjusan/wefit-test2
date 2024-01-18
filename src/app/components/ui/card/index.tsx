import Image from 'next/image';
import { SContainer, SInfo } from './styles';
import Button from '../button';
import shoppingCart from '@/src/assets/icons/shopping-cart.svg';
import { useShoppingStore } from '@/src/app/stores/shopping-cart';
import { convertToCurrency } from '@/src/utils/format';
import { useMemo } from 'react';

const Card = ({
  id,
  title,
  price,
  img
}: {
  id: number;
  title: string;
  price: number;
  img: string;
}) => {
  const itemsMapAux = useShoppingStore((state) => state.itemsMapAux);
  const items = useShoppingStore((state) => state.items);
  const addItem = useShoppingStore((state) => state.addOrUpdateItem);

  const handleAddItem = () => {
    addItem({
      id,
      image: img,
      price,
      title
    });
  };

  const itemIfCan = useMemo(() => {
    return itemsMapAux.get(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <SContainer>
      <Image
        priority
        src={img}
        alt='Image de um filme'
        width={147}
        height={188}
      />
      <SInfo>
        <h3>{title}</h3>
        <span>{convertToCurrency(price)}</span>
      </SInfo>
      <Button
        bgColor={Number(itemIfCan?.quantity) > 0 ? 'secondary' : 'primary'}
        props={{
          onClick: handleAddItem
        }}
        leftSlot={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.8rem'
            }}
          >
            <Image
              src={shoppingCart}
              alt='Ícone de carrinho de compras'
              width={14}
              height={14}
            />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 400
              }}
            >
              {itemIfCan?.quantity ?? 0}
            </span>
          </div>
        }
      >
        {itemIfCan ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
      </Button>
    </SContainer>
  );
};

export default Card;
