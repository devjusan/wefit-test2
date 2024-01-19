import { ICard } from '@/src/types/card';
import del from '@/src/assets/icons/del.svg';
import {
  SAttributesAction,
  SAttributesContainer,
  SAttributesInfo,
  SContainer
} from './styles';
import Image from 'next/image';
import { convertToCurrency } from '@/src/utils/format';
import InputNumber from '@/src/app/components/ui/input-number';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useShoppingStore } from '@/src/app/stores/shopping-cart';

type FormValues = Record<string, number>;

type ICartMobile = {
  card: ICard;
  quantity: number;
  handleRemoveItem: (card: ICard) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

const CartMobile = ({
  card,
  quantity,
  handleRemoveItem,
  register,
  errors
}: ICartMobile) => {
  const updateQuantity = useShoppingStore((state) => state.updateQuantity);

  return (
    <SContainer>
      <Image
        src={card.image}
        alt={'Imagem do filme ' + card.title}
        width={64}
        height={82}
      />
      <SAttributesContainer>
        <SAttributesInfo>
          <h3>{card.title}</h3>
          <div className='price'>
            <span>{convertToCurrency(card.price)}</span>
            <div
              role='button'
              onClick={() => handleRemoveItem(card)}
              style={{
                width: '18px',
                height: '18px'
              }}
            >
              <Image
                src={del}
                alt='Deletar ícone'
                style={{
                  cursor: 'pointer'
                }}
                width={18}
                height={18}
              />
            </div>
          </div>
        </SAttributesInfo>
        <SAttributesAction>
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
          <div className='total'>
            <span className='subtotal'>Subtotal</span>
            <span className='currency'>
              {convertToCurrency(card.price * (quantity || 0))}
            </span>
          </div>
        </SAttributesAction>
      </SAttributesContainer>
    </SContainer>
  );
};

export default CartMobile;
