# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: libros.spec.js >> Módulo Libros >> Escenario 1 - Registrar un libro
- Location: tests\e2e\libros.spec.js:24:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#shelf-libros')
Expected substring: "Playwright Testing 2"
Received string:    ""
Timeout: 8000ms

Call log:
  - Expect "toContainText" with timeout 8000ms
  - waiting for locator('#shelf-libros')
    19 × locator resolved to <div class="shelf" id="shelf-libros"></div>
       - unexpected value ""

```

```yaml
- banner:
  - img
  - text: Bibliotheca catálogo & préstamos
  - navigation:
    - button "Catálogo"
    - button "Préstamos"
    - button "Lectores"
    - button "Panel"
  - text: Bibliotecaria Demo
  - button "Salir"
- main:
  - paragraph: Fondo bibliográfico
  - heading "El catálogo" [level=1]
  - button "+ Añadir libro"
  - img
  - textbox "Buscar por título, autor o ISBN…": Playwright Testing 2
  - combobox:
    - option "Todas las categorías" [selected]
    - option "Ciencia"
    - option "Ciencia Ficción"
    - option "Historia"
    - option "Infantil"
    - option "Novela"
    - option "Poesía"
    - option "Tecnología"
  - checkbox "Solo disponibles"
  - text: Solo disponibles
  - paragraph: No se encontró ningún libro con esos criterios. Prueba otra búsqueda o añade uno nuevo.
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class LibrosPage{
  4   | 
  5   |     constructor(page){
  6   |         this.page = page;
  7   | 
  8   |         this.btnNuevoLibro = page.locator('#btn-nuevo-libro');
  9   |         this.inputBuscar = page.locator('#input-buscar');
  10  |         this.selectCategoria = page.locator('#select-categoria');
  11  |         this.checkDisponibles = page.locator('#check-disponibles');
  12  | 
  13  |         this.btnGuardar = page.locator('#form-libro button[type="submit"]');
  14  |         this.txtTitulo = page.locator('#f-titulo');
  15  |         this.txtAutor = page.locator('#f-autor');
  16  | 
  17  |         this.shelf = page.locator('#shelf-libros');
  18  |         this.emptyState = page.locator('#catalogo-vacio');
  19  |     }
  20  | 
  21  |     async abrir(){
  22  |         await this.page.goto('http://localhost:3000');
  23  |     }
  24  | 
  25  |     async crearLibro(titulo, autor, isbn = '', anio = ''){
  26  |         await this.btnNuevoLibro.click();
  27  |         // wait for the modal/form to appear
  28  |         await this.txtTitulo.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  29  |         await this.txtTitulo.fill(titulo);
  30  |         await this.txtAutor.fill(autor);
  31  |         if (isbn) await this.page.locator('#f-isbn').fill(isbn);
  32  |         if (anio) await this.page.locator('#f-anio').fill(String(anio));
  33  |         await this.btnGuardar.click();
  34  |         // wait for API create request to complete (frontend should call /api/libros)
  35  |         try {
  36  |             await this.page.waitForResponse(response => {
  37  |                 return response.url().includes('/api/libros') && (response.status() === 200 || response.status() === 201);
  38  |             }, { timeout: 5000 });
  39  |         } catch (e) {
  40  |             // ignore if not observed
  41  |         }
  42  |         // esperar a que el modal se cierre y el catálogo se refresque (buscar la tarjeta creada)
  43  |         try {
  44  |             await this.page.locator('.libro-card', { hasText: titulo }).waitFor({ state: 'visible', timeout: 8000 });
  45  |         } catch (e) {
  46  |             // fallback: small wait
  47  |             await this.page.waitForTimeout(800);
  48  |         }
  49  |     }
  50  | 
  51  |     async resetFiltros(){
  52  |         await this.inputBuscar.fill('');
  53  |         await this.selectCategoria.selectOption({ value: '' }).catch(() => {});
  54  |         // uncheck disponibles if checked
  55  |         const checked = await this.checkDisponibles.isChecked().catch(() => false);
  56  |         if (checked) await this.checkDisponibles.click();
  57  |         // esperar debounce + render
  58  |         await this.page.waitForTimeout(400);
  59  |     }
  60  | 
  61  |     async buscarLibro(termino){
  62  |         await this.resetFiltros();
  63  |         await this.inputBuscar.fill(termino);
  64  |         // esperar debounce + render
  65  |         await this.page.waitForTimeout(600);
  66  |     }
  67  | 
  68  |     async verificarLibro(titulo){
> 69  |         await expect(this.shelf).toContainText(titulo, { timeout: 8000 });
      |                                  ^ Error: expect(locator).toContainText(expected) failed
  70  |     }
  71  | 
  72  |     async verificarMensajeSinResultados(){
  73  |         await expect(this.emptyState).toBeVisible({ timeout: 5000 });
  74  |     }
  75  | 
  76  |     async editarPrimerLibro(nuevoTitulo) {
  77  |         await this.page.locator('button[data-accion="editar-libro"]').first().click();
  78  |         await this.txtTitulo.fill(nuevoTitulo);
  79  |         await this.btnGuardar.click();
  80  |     }
  81  | 
  82  |     async eliminarPrimerLibro(titulo = null){
  83  |         // If a title is provided, find the book card that contains that title and click its delete button.
  84  |         this.page.on('dialog', async dialog => {
  85  |             await dialog.accept();
  86  |         });
  87  | 
  88  |         if (titulo) {
  89  |             const card = this.shelf.locator(`.libro-card:has-text("${titulo}")`);
  90  |             const btn = card.locator('button[data-accion="borrar-libro"]');
  91  |             await btn.first().click();
  92  |         } else {
  93  |             await this.page.locator('button[data-accion="borrar-libro"]').first().click();
  94  |         }
  95  | 
  96  |         // wait a bit for deletion to reflect
  97  |         await this.page.waitForTimeout(300);
  98  |     }
  99  | 
  100 |     async verificarLibroNoExiste(titulo){
  101 |         await expect(this.shelf).not.toContainText(titulo, { timeout: 8000 });
  102 |     }
  103 | 
  104 | }
  105 | 
  106 | module.exports = LibrosPage;
```