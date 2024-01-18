import { number, record } from 'zod';

export const cartSchema = record(
  number({
    invalid_type_error: 'Adicione um valor válido',
    required_error: 'Campo obrigatório'
  }).min(1, {
    message: 'Adicione um valor válido'
  })
);
