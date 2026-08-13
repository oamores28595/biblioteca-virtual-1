const { expect } = require('@playwright/test');

class LibrosPage{

    constructor(page){
        this.page = page;

        this.btnNuevoLibro = page.locator('#btn-nuevo-libro');
        this.inputBuscar = page.locator('#input-buscar');
        this.selectCategoria = page.locator('#select-categoria');
        this.checkDisponibles = page.locator('#check-disponibles');

        this.btnGuardar = page.locator('#form-libro button[type="submit"]');
        this.txtTitulo = page.locator('#f-titulo');
        this.txtAutor = page.locator('#f-autor');

        this.shelf = page.locator('#shelf-libros');
        this.emptyState = page.locator('#catalogo-vacio');
    }

    async abrir(){
        await this.page.goto('http://localhost:3000');
    }

    async crearLibro(titulo, autor, isbn = '', anio = ''){
        await this.btnNuevoLibro.click();
        // wait for the modal/form to appear
        await this.txtTitulo.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
        await this.txtTitulo.fill(titulo);
        await this.txtAutor.fill(autor);
        if (isbn) await this.page.locator('#f-isbn').fill(isbn);
        if (anio) await this.page.locator('#f-anio').fill(String(anio));
        await this.btnGuardar.click();
        // wait for API create request to complete (frontend should call /api/libros)
        try {
            await this.page.waitForResponse(response => {
                return response.url().includes('/api/libros') && (response.status() === 200 || response.status() === 201);
            }, { timeout: 5000 });
        } catch (e) {
            // ignore if not observed
        }
        // esperar a que el modal se cierre y el catálogo se refresque (buscar la tarjeta creada)
        try {
            await this.page.locator('.libro-card', { hasText: titulo }).waitFor({ state: 'visible', timeout: 8000 });
        } catch (e) {
            // fallback: small wait
            await this.page.waitForTimeout(800);
        }
    }

    async resetFiltros(){
        await this.inputBuscar.fill('');
        await this.selectCategoria.selectOption({ value: '' }).catch(() => {});
        // uncheck disponibles if checked
        const checked = await this.checkDisponibles.isChecked().catch(() => false);
        if (checked) await this.checkDisponibles.click();
        // esperar debounce + render
        await this.page.waitForTimeout(400);
    }

    async buscarLibro(termino){
        await this.resetFiltros();
        await this.inputBuscar.fill(termino);
        // esperar debounce + render
        await this.page.waitForTimeout(600);
    }

    async verificarLibro(titulo){
        await expect(this.shelf).toContainText(titulo, { timeout: 8000 });
    }

    async verificarMensajeSinResultados(){
        await expect(this.emptyState).toBeVisible({ timeout: 5000 });
    }

    async editarPrimerLibro(nuevoTitulo) {
        await this.page.locator('button[data-accion="editar-libro"]').first().click();
        await this.txtTitulo.fill(nuevoTitulo);
        await this.btnGuardar.click();
    }

    async eliminarPrimerLibro(titulo = null){
        // If a title is provided, find the book card that contains that title and click its delete button.
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        if (titulo) {
            const card = this.shelf.locator(`.libro-card:has-text("${titulo}")`);
            const btn = card.locator('button[data-accion="borrar-libro"]');
            await btn.first().click();
        } else {
            await this.page.locator('button[data-accion="borrar-libro"]').first().click();
        }

        // wait a bit for deletion to reflect
        await this.page.waitForTimeout(300);
    }

    async verificarLibroNoExiste(titulo){
        await expect(this.shelf).not.toContainText(titulo, { timeout: 8000 });
    }

}

module.exports = LibrosPage;