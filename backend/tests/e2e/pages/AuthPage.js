const { expect } = require('@playwright/test');

class AuthPage {
    constructor(page) {
        this.page = page;
        this.formLogin = page.locator('#form-login');
        this.loginCorreo = page.locator('#login-correo');
        this.loginPassword = page.locator('#login-password');
        this.formRegistro = page.locator('#form-registro');
        this.regNombre = page.locator('#reg-nombre');
        this.regCorreo = page.locator('#reg-correo');
        this.regPassword = page.locator('#reg-password');
        this.tabLogin = page.locator('.auth-tab[data-form="login"]');
        this.tabRegistro = page.locator('.auth-tab[data-form="registro"]');
    }

    async abrir() {
        await this.page.goto('http://localhost:3000');
        await this.page.waitForSelector('#form-login');
    }

    async login(correo, password) {
        await this.loginCorreo.fill(correo);
        await this.loginPassword.fill(password);
        await this.formLogin.locator('button[type="submit"]').click();
        // esperar a que la app muestre topbar
        await this.page.locator('#topbar-user-nombre').waitFor({ state: 'visible', timeout: 5000 });
    }

    async registrar(nombre, correo, password) {
        await this.tabRegistro.click();
        await this.regNombre.fill(nombre);
        await this.regCorreo.fill(correo);
        await this.regPassword.fill(password);
        await this.formRegistro.locator('button[type="submit"]').click();
        // espera que se inicie sesión automáticamente
        await this.page.locator('#topbar-user-nombre').waitFor({ state: 'visible', timeout: 5000 });
    }

    async logout() {
        await this.page.locator('#btn-logout').click();
        await this.page.locator('#form-login').waitFor({ state: 'visible', timeout: 5000 });
    }
}

module.exports = AuthPage;