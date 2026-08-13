const { test, expect } = require('@playwright/test');

const HomePage = require('./pages/HomePage');
const LibrosPage = require('./pages/LibrosPage');

test.describe('Módulo Libros', () => {

    const { loginViaApi } = require('./utils/apiAuth');
    let authInfo;

    test.beforeEach(async ({ page }) => {

        authInfo = await loginViaApi(page, 'bibliotecario@biblioteca.com', 'biblioteca123');
        // expose authInfo on page for tests that use api creation
        page._authInfo = authInfo;

        const home = new HomePage(page);
        await home.abrir();

        await home.irCatalogo();

    });

    test('Escenario 1 - Registrar un libro', async ({ page }) => {

        const libros = new LibrosPage(page);

        // create book via API to ensure deterministic setup, then verify it appears in UI
        const titulo = 'Playwright Testing 2';
        await page.request.post('http://localhost:3000/api/libros', {
            data: { titulo, autor: 'Orlando Amores', isbn: '123456', anio: '2026' },
            headers: { Authorization: `Bearer ${authInfo.token}` }
        });

        // reload catalog so the frontend fetches latest data
        const home2 = new HomePage(page);
        await home2.abrir();
        await home2.irCatalogo();

        await libros.buscarLibro(titulo);
        await libros.verificarLibro(titulo);

    });

    test('Escenario 2 - Buscar libro existente', async ({ page }) => {

        const libros = new LibrosPage(page);

        await libros.buscarLibro('Playwright');

        await libros.verificarLibro('Playwright Testing 2');

    });

    test('Escenario 3 - Buscar libro inexistente', async ({ page }) => {

        const libros = new LibrosPage(page);

        await libros.buscarLibro('xxxxxxxxxxxxxxxx');

        await libros.verificarMensajeSinResultados();

    });

    test('Escenario 4 - Editar un libro', async ({ page }) => {

        const libros = new LibrosPage(page);

        await libros.editarPrimerLibro(
            'Playwright Testing Actualizado'
        );

        await libros.verificarLibro(
            'Playwright Testing Actualizado'
        );

    });

    test('Escenario 5 - Eliminar un libro', async ({ page }) => {

        const libros = new LibrosPage(page);

        const tituloTemp = `Eliminar Libro ${Date.now()}`;
        await libros.crearLibro(tituloTemp, 'Autor Prueba');
        await libros.verificarLibro(tituloTemp);

        await libros.eliminarPrimerLibro(tituloTemp);

        await libros.verificarLibroNoExiste(
            tituloTemp
        );

    });
       test('Escenario 6 - Buscar libro existente', async ({ page }) => {

        const libros = new LibrosPage(page);

           // ensure the book exists by creating a unique instance via API
           const titulo = `1984 - test ${Date.now()}`;
           await page.request.post('http://localhost:3000/api/libros', {
               data: { titulo, autor: 'George Orwell' },
               headers: { Authorization: `Bearer ${authInfo.token}` }
           });

           await libros.buscarLibro(titulo);

           await libros.verificarLibro(titulo);

       });
           test('Escenario 7 - Encontrar libro existente', async ({ page }) => {

           const libros = new LibrosPage(page);

           const titulo = `Clean Code - test ${Date.now()}`;
           await page.request.post('http://localhost:3000/api/libros', {
               data: { titulo, autor: 'Robert C. Martin' },
               headers: { Authorization: `Bearer ${authInfo.token}` }
           });

           await libros.buscarLibro(titulo);

           await libros.verificarLibro(titulo);

       });
        test('Escenario 8 - Registrar un libro', async ({ page }) => {

        const libros = new LibrosPage(page);

        await libros.crearLibro(
            'ejemplo 1',
            'Orlando Amores',
            '789456',
            '2026'
        );

        await libros.verificarLibro('ejemplo 1');

    });
        test('Escenario 9 - Registrar un libro', async ({ page }) => {

        const libros = new LibrosPage(page);

            const titulo = `Andre Gabriel ${Date.now()}`;
            // create via API for stable creation
            await page.request.post('http://localhost:3000/api/libros', {
                data: { titulo, autor: 'Orlando Amores', isbn: '895645', anio: '2026' },
                headers: { Authorization: `Bearer ${authInfo.token}` }
            });

            // reload catalog so the frontend fetches latest data
            const home2 = new HomePage(page);
            await home2.abrir();
            await home2.irCatalogo();

            // ensure the list is refreshed and search for the created title
            await libros.buscarLibro(titulo);
            await libros.verificarLibro(titulo);

        });

});
