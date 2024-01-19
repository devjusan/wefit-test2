'use client';
import { ICard } from '@/src/types/card';
import del from '@/src/assets/icons/del.svg';
import {
  SContainerContent,
  SProductSlot,
  SQtdSlot,
  STotalSlot
} from './styles';
import Image from 'next/image';
import { convertToCurrency } from '@/src/utils/format';
import InputNumber from '@/src/app/components/ui/input-number';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useShoppingStore } from '@/src/app/stores/shopping-cart';
import { theme } from '@/src/styles/theme';

type FormValues = Record<string, number>;

type ICart = {
  card: ICard;
  quantity: number;
  handleRemoveItem: (card: ICard) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

const CartSlot = ({
  card,
  quantity,
  handleRemoveItem,
  register,
  errors
}: ICart) => {
  const updateQuantity = useShoppingStore((state) => state.updateQuantity);

  return (
    <SContainerContent data-testid={String(card.id)}>
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
              color: theme.color.tertiary.main
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
          props={{
            ...register(String(card.id), {
              onChange: (e) => {
                const valueAsNumber = e.target.value;
                updateQuantity(card, valueAsNumber);
              },
              value: quantity,
              valueAsNumber: true,
              required: true
            })
          }}
          error={Boolean(errors[String(card.id)])}
          errorMessage={errors[String(card.id)]?.message}
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
            width={18}
            height={18}
            data-testid='remove-item'
          />
        </div>
      </STotalSlot>
    </SContainerContent>
  );
};

export default CartSlot;
