import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('HOME PAGE', () => {
  test('should have items rendered from API', async ({ page }) => {
    expect(page.getByText(/Viúva Negra/)).toBeTruthy();
    expect(page.getByText(/Shang-chi/)).toBeTruthy();
    expect(page.getByText(/Homem Aranha/)).toBeTruthy();
    expect(page.getByText(/Morbius/)).toBeTruthy();
    expect(page.getByText(/Batman/)).toBeTruthy();
    expect(page.getByText(/Eternos/)).toBeTruthy();
  });

  test('should add item to cart', async ({ page }) => {
    const card1 = page.getByTestId('1');
    const card3 = page.getByTestId('3');
    const TEXT_AFTER_CLICK = 'ITEM ADICIONADO';

    expect(card1.getByText(/Víuva Negra/)).toBeTruthy();
    await card1.getByRole('button').click();
    expect(page.getByText(TEXT_AFTER_CLICK, { exact: true })).toBeTruthy();
    expect(page.getByText(/1 item/)).toBeTruthy();
    await card1.getByRole('button').click();
    expect(page.getByText(/2 itens/)).toBeTruthy();
    await card3.getByRole('button').click();
    expect(page.getByText(/3 itens/)).toBeTruthy();
  });
});
