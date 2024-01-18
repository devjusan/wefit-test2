'use client';

import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Card from './components/ui/card';
import LoadingSpinner from './loading';
import { ICard } from '../types/card';
import { convertToCurrency } from '../utils/format';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    fetch('http://localhost:3333/products')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 60px)'
      }}
    >
      <LoadingSpinner />
    </div>
  ) : (
    <Container>
      {cards.map((card: ICard) => (
        <Card
          key={card.id}
          title={card.title}
          price={convertToCurrency(card.price)}
          img={card.image}
        />
      ))}
    </Container>
  );
};

export default Home;
