'use client';
import Image from 'next/image';
import { useShoppingStore } from '../stores/shopping-cart';
import emptyList from '@/src/assets/imgs/empty-list.svg';
import del from '@/src/assets/icons/del.svg';
import {
  SContainer,
  SContainerContent,
  SContainerHeader,
  SProductSlot,
  SQtdSlot,
  STotalSlot
} from './styles';
import Button from '../components/ui/button';
import { useRouter } from 'next/navigation';
import { theme } from '@/src/styles/theme';
import { convertToCurrency } from '@/src/utils/format';
import { ICard } from '@/src/types/card';
import InputNumber from '../components/ui/input-number';

const Cart = () => {
  const router = useRouter();
  const items = useShoppingStore((state) => state.items);
  const updateQuantity = useShoppingStore((state) => state.updateQuantity);
  const removeItem = useShoppingStore((state) => state.removeItem);

  const handleBack = () => {
    router.push('/');
  };

  const handleRemoveItem = (item: ICard) => {
    removeItem(item);
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

  return (
    <SContainer>
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

      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '2rem',
          padding: '2rem 0'
        }}
      >
        {items.map(({ card, quantity, id }) => (
          <SContainerContent key={id}>
            <SProductSlot
              style={{
                gridArea: 'product'
              }}
            >
              <Image
                src={card.image}
                alt={'Imagem do filme ' + card.title}
                width={90}
                height={114}
              />
              <div>
                <h3
                  style={{
                    color: theme.color.tertiary.main,
                    marginBottom: '8px'
                  }}
                >
                  {card.title}
                </h3>
                <span
                  style={{
                    color: theme.color.tertiary.main,
                    fontWeight: 700,
                    fontSize: theme.font.medium
                  }}
                >
                  {' '}
                  {convertToCurrency(card.price)}{' '}
                </span>
              </div>
            </SProductSlot>
            <SQtdSlot
              style={{
                gridArea: 'qtd'
              }}
            >
              <InputNumber
                value={quantity}
                onChange={(e) => {
                  const valueAsNumber = e.target.value;
                  console.log(valueAsNumber);

                  updateQuantity(card, valueAsNumber);
                }}
              />
            </SQtdSlot>
            <STotalSlot
              style={{
                gridArea: 'total',
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between'
              }}
            >
              <span
                style={{
                  color: theme.color.tertiary.main,
                  fontWeight: 700,
                  fontSize: theme.font.medium
                }}
              >
                {convertToCurrency(card.price * (quantity || 0))}
              </span>
              <div role='button' onClick={() => handleRemoveItem(card)}>
                <Image
                  src={del}
                  alt='Deletar ícone'
                  style={{
                    cursor: 'pointer'
                  }}
                />
              </div>
            </STotalSlot>
          </SContainerContent>
        ))}
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 0'
        }}
      >
        <Button>Finalizar Pedido</Button>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            gap: '3rem'
          }}
        >
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
      </div>
    </SContainer>
  );
};

export default Cart;
