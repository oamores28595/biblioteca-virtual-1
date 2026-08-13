const { test, expect } = require('@playwright/test');

const HomePage = require('./pages/HomePage');
const DashboardPage = require('./pages/DashboardPage');
const AuthPage = require('./pages/AuthPage');

test('Panel muestra estadísticas', async ({ page }) => {
    const { loginViaApi } = require('./utils/apiAuth');
    await loginViaApi(page, 'bibliotecario@biblioteca.com', 'biblioteca123');

    const home = new HomePage(page);
    const panel = new DashboardPage(page);
    await home.abrir();
    await home.irPanel();
    await panel.verificarEstadisticasVisibles();
});