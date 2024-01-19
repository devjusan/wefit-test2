import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const card1 = page.getByTestId('1');
  const card3 = page.getByTestId('3');

  await card1.getByRole('button').click();
  await card3.getByRole('button').click();

  await page.goto('http://localhost:3000/cart');
  await page.waitForSelector('data-testid=cart');
});

test.describe('CART PAGE', () => {
  test('should render a list of selected items', async ({ page }) => {
    expect(page.getByText(/Víuva Negra/)).toBeTruthy();
    expect(page.getByText(/Homem Aranha/)).toBeTruthy();
  });

  test('should add or remove quantity of a selected item', async ({ page }) => {
    const card = page.getByTestId('1');

    expect(card).toBeTruthy();

    const input = card.locator('input').first();
    const value = await input.inputValue();
    expect(value).toBe('1');

    await input.fill('5');
    const newValue = await input.inputValue();
    expect(newValue).toBe('5');

    expect(page.getByText(/6 itens/)).toBeTruthy();

    await input.fill('1');
    expect(page.getByText(/2 itens/)).toBeTruthy();
  });

  test('should add or remove quantity of a selected item on btn click', async ({
    page
  }) => {
    const card = page.getByTestId('3');

    expect(card).toBeTruthy();

    const plusBtn = card.getByTestId('add');
    const minusBtn = card.getByTestId('remove');

    await plusBtn.click();

    const input = card.locator('input').first();
    const value = await input.inputValue();

    expect(value).toBe('2');

    await minusBtn.click();

    const newValue = await input.inputValue();
    expect(newValue).toBe('1');
  });

  test('should show a error message if quantity is less than 1', async ({
    page
  }) => {
    const card = page.getByTestId('1');

    expect(card).toBeTruthy();

    const input = card.locator('input').first();
    const value = await input.inputValue();
    expect(value).toBe('1');

    await input.fill('0');
    const newValue = await input.inputValue();
    expect(newValue).toBe('0');

    const error = card.getByTestId('error-message');

    expect(error).toBeTruthy();
  });

  test('should remove item from cart', async ({ page }) => {
    const card = page.getByTestId('1');

    expect(card).toBeTruthy();

    const removeBtn = card.getByTestId('remove-item');

    await removeBtn.click();

    expect(page.getByText(/1 item/)).toBeTruthy();
  });

  test('should show a finish message when all requirements pass ', async ({
    page
  }) => {
    const submitButton = page.getByText(/Finalizar Pedido/);
    await submitButton.click();

    expect(page.getByText(/Compra realizada com sucesso/)).toBeTruthy();
    expect(page.getByText(/0 item/)).toBeTruthy();
    const backBtn = page.getByText(/Voltar/);

    await backBtn.click();
    await page.waitForURL('http://localhost:3000/');
    expect(page.url()).toBe('http://localhost:3000/');
  });
  test('should show a empty cart message if cart is empty', async ({
    page
  }) => {
    const card1 = page.getByTestId('1');
    const card2 = page.getByTestId('3');

    const removeBtn = card1.getByTestId('remove-item');
    await removeBtn.click();
    const removeBtn2 = card2.getByTestId('remove-item');
    await removeBtn2.click();

    expect(page.getByText(/Parece que não há nada por aqui/)).toBeTruthy();
  });
});
