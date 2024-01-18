'use client';
import { SContainer, SErrorContainer } from './styles';
import plus from '@/src/assets/icons/plus.svg';
import less from '@/src/assets/icons/less.svg';
import Image from 'next/image';
import { useCallback, useRef } from 'react';

const InputNumber = ({
  error,
  errorMessage,
  props
}: {
  error?: boolean;
  errorMessage?: string;
  props?: React.HTMLProps<HTMLInputElement>;
}) => {
  const inputRef = useRef<HTMLInputElement>();

  const handlePlus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.stepUp();
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }, []);

  const handleLess = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.stepDown();
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }, []);

  return (
    <SContainer>
      <div role='button' onClick={handlePlus}>
        <Image src={plus} alt='Adicionar número' width={18} height={18} />
      </div>
      <input
        type='number'
        min={0}
        {...props}
        ref={(e) => {
          inputRef.current = e as HTMLInputElement;
          const { ref } = props as any;

          ref?.(e);
        }}
      />
      <div role='button' onClick={handleLess}>
        <Image src={less} alt='Remover número' width={18} height={18} />{' '}
      </div>

      {error ? <SErrorContainer>{errorMessage}</SErrorContainer> : null}
    </SContainer>
  );
};

export default InputNumber;
