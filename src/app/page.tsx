'use client';

import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Card from './components/ui/card';
import LoadingSpinner from './loading';
import { ICard } from '../types/card';
import { convertToCurrency } from '../utils/format';
import useFetch from './hooks/useFetch';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

const Home = () => {
  const { error, isLoading, response } = useFetch<Array<ICard>>(
    'http://localhost:3333/products'
  );

  if (error) {
    return (
      <Container>
        <h3>Erro ao carregar os dados</h3>
      </Container>
    );
  }

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
      {response.map((card: ICard) => (
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
