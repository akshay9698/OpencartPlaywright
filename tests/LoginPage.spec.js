import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Verify user login functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.launchApp();
    const actualTitle = await loginPage.doLogin('akshay@gmail.com', 'Akshay12');
    expect(actualTitle).toBe('My Account');
});

test('Verify invalid user login functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.launchApp();
    const errorMsg = await loginPage.invalidUserLogin('akshay', '12345');
    expect(errorMsg).toBe(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');

})