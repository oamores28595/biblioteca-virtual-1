const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async abrir() {
        await this.page.goto('http://localhost:3000');
    }

    async esperarCarga() {
        // espera básica: botón nuevo libro visible en el DOM
        await this.page.locator('#btn-nuevo-libro').waitFor({ state: 'visible', timeout: 5000 });
    }

    async toastTexto() {
        const toast = this.page.locator('#toast');
        return await toast.textContent();
    }
}

module.exports = BasePage;