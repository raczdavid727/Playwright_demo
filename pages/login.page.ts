import {expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.locator('//input[@id="login-button"]');
        this.errorMessage = page.getByText('Epic sadface:')
    }

    public async openLoginPage(): Promise <void> {
        await this.page.goto('/');
    }

    public async login(userName: string, password: string): Promise <void> {
        await this.userNameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await expect(this.page).toHaveURL(/.*inventory/)
    }

    public async invalidLogin(userName: string, password: string): Promise <void> {
        await this.passwordField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await expect(this.errorMessage).toBeVisible();
    }

}