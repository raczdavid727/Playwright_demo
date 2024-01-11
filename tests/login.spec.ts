import { test } from '@playwright/test';
 
import { LoginPage } from '../pages/Login.Page';

let loginPage: LoginPage
test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
})

test.describe('Login page tests', () => {
    test('Login should be unsuccessful', async () => {
        await loginPage.invalidLogin('das d', 'sdas');
    })
    test('Login should be successful', async () => {
        await loginPage.login('standard_user', 'secret_sauce')
    })
})