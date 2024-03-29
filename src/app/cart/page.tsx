'use client';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useShoppingStore } from '../stores/shopping-cart';
import emptyList from '@/src/assets/imgs/empty-list.svg';
import buyed from '@/src/assets/imgs/buyed.svg';
import { SContainer, SContainerFooter, SContainerHeader } from './styles';
import Button from '../components/ui/button';
import { useRouter } from 'next/navigation';
import { theme } from '@/src/styles/theme';
import { convertToCurrency } from '@/src/utils/format';
import { ICard, IShoppingCard } from '@/src/types/card';
import { cartSchema } from '../schemas';
import { useLocalStorage, useMediaQuery } from 'usehooks-ts';
import { SESSION_KEY } from '@/src/constants/storage';
import CartSlotMobile from './components/cart-slot-mobile';
import LoadingSpinner from '../loading';
import CartSlot from './components/cart-slot';

type FormValues = Record<string, number>;

const Cart = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    resolver: zodResolver(cartSchema),
    mode: 'all'
  });
  const media = useMediaQuery('(max-width: 668px)');
  const [shoppingCard, setShoppingCard] = useLocalStorage<Array<IShoppingCard>>(
    SESSION_KEY,
    []
  );
  const items = useShoppingStore((state) => state.items);
  const removeItem = useShoppingStore((state) => state.removeItem);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    router.push('/');
  };

  const handleRemoveItem = (item: ICard) => {
    removeItem(item);
  };

  const onSubmit = (data: FormValues) => {
    if (isValid) {
      // handle submit data to API...
      setIsFinished(true);
      setShoppingCard([]);
      useShoppingStore.setState({ items: [], itemsMapAux: new Map() });
    }
  };

  useEffect(() => {
    if (shoppingCard.length) {
      setLoading(false);
    }
  }, [shoppingCard]);

  if (loading) {
    return (
      <div
        style={{
          width: '100%',
          height: 'calc(100dvh - 120px)',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (!items.length && !isFinished)
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
            color: theme.color.tertiary.main
          }}
        >
          Parece que não há nada por aqui :(
        </h3>
        <Image src={emptyList} alt='Compra finalizada' priority />
        <Button props={{ onClick: handleBack }}>Voltar</Button>
      </SContainer>
    );

  if (isFinished)
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
            color: theme.color.tertiary.main
          }}
        >
          Compra realizada com sucesso!
        </h3>
        <Image src={buyed} alt='Lista vazia' priority />
        <Button props={{ onClick: handleBack }}>Voltar</Button>
      </SContainer>
    );

  return (
    <SContainer
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
      data-testid='cart'
    >
      {media ? null : (
        <SContainerHeader>
          <span
            style={{
              gridArea: 'product'
            }}
          >
            produtos
          </span>
          <span
            style={{
              gridArea: 'qtd'
            }}
          >
            qtd
          </span>
          <span
            style={{
              gridArea: 'total'
            }}
          >
            subtotal
          </span>
        </SContainerHeader>
      )}

      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '2rem',
          height: 'calc(100dvh - 250px)',
          overflowY: 'auto'
        }}
      >
        {media
          ? items.map(({ card, id, quantity }) => (
              <CartSlotMobile
                card={card}
                quantity={quantity || 0}
                key={id}
                handleRemoveItem={handleRemoveItem}
                register={register}
                errors={errors}
              />
            ))
          : items.map(({ card, quantity, id }) => (
              <CartSlot
                key={id}
                card={card}
                quantity={quantity || 0}
                errors={errors}
                register={register}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
      </div>
      <hr />
      <SContainerFooter>
        <Button type='submit'>Finalizar Pedido</Button>
        <div>
          <span
            style={{
              color: theme.color.secondary.main,
              fontWeight: 700,
              fontSize: theme.font.smallMedium
            }}
          >
            TOTAL
          </span>
          <span
            style={{
              color: theme.color.tertiary.main,
              fontWeight: 700,
              fontSize: theme.font.extraLarge
            }}
          >
            {convertToCurrency(
              items.reduce(
                (acc, curr) => acc + curr.card.price * (curr.quantity || 0),
                0
              )
            )}
          </span>
        </div>
      </SContainerFooter>
    </SContainer>
  );
};

export default Cart;
