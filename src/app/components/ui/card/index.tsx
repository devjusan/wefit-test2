import Image from 'next/image';
import { SContainer, SInfo } from './styles';
import Button from '../button';

const Card = ({
  title,
  price,
  img
}: {
  title: string;
  price: string;
  img: string;
}) => {
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
        <span>{price}</span>
      </SInfo>
      <Button>Adicionar ao carrinho</Button>
    </SContainer>
  );
};

export default Card;
