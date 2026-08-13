const { test } = require('@playwright/test');

const HomePage = require('./pages/HomePage');
const { loginViaApi } = require('./utils/apiAuth');

test('Abrir Biblioteca Virtual', async ({ page }) => {

    await loginViaApi(page, 'bibliotecario@biblioteca.com', 'biblioteca123');

    const home = new HomePage(page);

    await home.abrir();

    await home.verificarCarga();

});