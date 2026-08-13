const { test, expect } = require('@playwright/test');

const AuthPage = require('./pages/AuthPage');

test.describe('Autenticación', () => {

    test('Login exitoso con credenciales seed', async ({ page }) => {
        const auth = new AuthPage(page);
        await auth.abrir();
        await auth.login('bibliotecario@biblioteca.com', 'biblioteca123');
        // verificar topbar con nombre del bibliotecario
        await expect(page.locator('#topbar-user-nombre')).not.toHaveText('—');
    });

    test('Login fallido con credenciales inválidas', async ({ page }) => {
        const auth = new AuthPage(page);
        await auth.abrir();
        await auth.login('no-existe@correo.com', 'clave-incorrecta').catch(() => {});
        // debería seguir visible el formulario de login
        await expect(page.locator('#form-login')).toBeVisible();
    });

});