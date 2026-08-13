const { test } = require('@playwright/test');

const HomePage = require('./pages/HomePage');
// AuthPage UI login removed — using API login helper


const PrestamosPage = require('./pages/PrestamosPage');

test('Registrar préstamo', async ({ page }) => {

    const { loginViaApi } = require('./utils/apiAuth');
    const authInfo = await loginViaApi(page, 'bibliotecario@biblioteca.com', 'biblioteca123');

    const home = new HomePage(page);

    const prestamos = new PrestamosPage(page);

    // Create a user and a book via API to guarantee availability for the loan
    const usuarioResp = await page.request.post('http://localhost:3000/api/usuarios', {
        data: { nombre_completo: `Usuario Test ${Date.now()}`, correo: `user${Date.now()}@test.com` },
        headers: { Authorization: `Bearer ${authInfo.token}` }
    });

    const libroResp = await page.request.post('http://localhost:3000/api/libros', {
        data: { titulo: `Libro Prueba ${Date.now()}`, autor: 'Autor Test', ejemplares_totales: 1 },
        headers: { Authorization: `Bearer ${authInfo.token}` }
    });

    const libro = (await libroResp.json());
    const usuario = (await usuarioResp.json());

    await home.abrir();
    await home.irPrestamos();

    await prestamos.crearPrestamo(

        libro.titulo,

        usuario.nombre_completo

    );

});