const { test } = require('@playwright/test');

const HomePage = require('./pages/HomePage');
const AuthPage = require('./pages/AuthPage');

const UsuariosPage = require('./pages/UsuariosPage');

test('Registrar usuario', async ({ page }) => {

    const { loginViaApi } = require('./utils/apiAuth');
    await loginViaApi(page, 'bibliotecario@biblioteca.com', 'biblioteca123');

    const home = new HomePage(page);

    const usuarios = new UsuariosPage(page);

    await home.abrir();
    await home.irUsuarios();

    await usuarios.crearUsuario(

        "Juan Pérez",

        "juan@email.com",

        "6000-0000"

    );

    await usuarios.verificarUsuario(

        "Juan Pérez"

    );

});