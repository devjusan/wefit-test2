'use client';
import { SContainer } from './styles';
import plus from '@/src/assets/icons/plus.svg';
import less from '@/src/assets/icons/less.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';

const InputNumber = ({
  value,
  onChange
}: {
  value?: number;
  onChange?: (e: any) => void;
}) => {
  const [localValue, setLocalValue] = useState(value || 0);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatchNativeEvent = (value: number) => {
    if (inputRef.current) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;
      nativeInputValueSetter?.call(inputRef.current, value);

      const inputEvent = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(inputEvent);
    }
  };

  const handlePlus = () => {
    dispatchNativeEvent(localValue + 1);
  };

  const handleLess = () => {
    if (localValue === 0) return;

    dispatchNativeEvent(localValue - 1);
  };

  const handleOnChange = (e: any) => {
    const { valueAsNumber } = e.target;

    setLocalValue(valueAsNumber);

    if (onChange) {
      onChange({
        target: {
          value: valueAsNumber
        }
      });
    }
  };

  return (
    <SContainer>
      <div role='button' onClick={handlePlus}>
        <Image src={plus} alt='Adicionar número' width={18} height={18} />
      </div>
      <input
        type='number'
        name='input-number'
        id='input-number'
        ref={inputRef}
        min={0}
        onChange={handleOnChange}
        value={localValue}
      />
      <div role='button' onClick={handleLess}>
        <Image src={less} alt='Remover número' width={18} height={18} />{' '}
      </div>
    </SContainer>
  );
};

export default InputNumber;
