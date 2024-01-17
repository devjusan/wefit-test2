'use client';
import Image from 'next/image';
import { SContainer, SItensContainer, SLogoContainer } from './styles';
import wallet from '@/src/assets/icons/wallet.svg';

const Header: React.FC = () => {
  return (
    <SContainer>
      <h3>WeMovies</h3>{' '}
      <SLogoContainer>
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
      </SLogoContainer>
    </SContainer>
  );
};

export default Header;
