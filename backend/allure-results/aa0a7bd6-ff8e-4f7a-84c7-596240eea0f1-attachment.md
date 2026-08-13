# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: libros.spec.js >> Módulo Libros >> Escenario 1 - Registrar un libro
- Location: tests\e2e\libros.spec.js:22:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button[type=submit]') resolved to 3 elements:
    1) <button type="submit" class="btn btn-primary btn-block">Entrar</button> aka getByText('Entrar')
    2) <button type="submit" class="btn btn-primary btn-block">Crear cuenta</button> aka locator('#form-registro').getByText('Crear cuenta')
    3) <button type="submit" class="btn btn-primary btn-block">Añadir al catálogo</button> aka getByRole('button', { name: 'Añadir al catálogo' })

Call log:
  - waiting for locator('button[type=submit]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e8]:
        - generic [ref=e9]: Bibliotheca
        - generic [ref=e10]: catálogo & préstamos
      - navigation [ref=e11]:
        - button "Catálogo" [ref=e12] [cursor=pointer]
        - button "Préstamos" [ref=e13] [cursor=pointer]
        - button "Lectores" [ref=e14] [cursor=pointer]
        - button "Panel" [ref=e15] [cursor=pointer]
      - generic [ref=e16]:
        - generic [ref=e17]: Bibliotecaria Demo
        - button "Salir" [ref=e18] [cursor=pointer]
    - main [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - paragraph [ref=e23]: Fondo bibliográfico
            - heading "El catálogo" [level=1] [ref=e24]
          - button "+ Añadir libro" [ref=e25] [cursor=pointer]
        - generic [ref=e26]:
          - textbox "Buscar por título, autor o ISBN…" [ref=e31]
          - combobox [ref=e32] [cursor=pointer]:
            - option "Todas las categorías" [selected]
            - option "Ciencia"
            - option "Ciencia Ficción"
            - option "Historia"
            - option "Infantil"
            - option "Novela"
            - option "Poesía"
            - option "Tecnología"
          - generic [ref=e33] [cursor=pointer]:
            - checkbox "Solo disponibles" [ref=e34]
            - generic [ref=e35]: Solo disponibles
        - generic [ref=e36]:
          - article [ref=e37]:
            - generic [ref=e38]: CIE-008
            - heading "1984" [level=3] [ref=e39]
            - paragraph [ref=e40]: George Orwell · 1949
            - generic [ref=e41]:
              - generic [ref=e42]: Ciencia Ficción
              - generic [ref=e43]: 5/5 disp.
            - generic [ref=e44]:
              - button "Editar" [ref=e45] [cursor=pointer]
              - button "Quitar" [ref=e46] [cursor=pointer]
          - article [ref=e47]:
            - generic [ref=e48]: CIE-010
            - heading "Breve historia del tiempo" [level=3] [ref=e49]
            - paragraph [ref=e50]: Stephen Hawking · 1988
            - generic [ref=e51]:
              - generic [ref=e52]: Ciencia
              - generic [ref=e53]: 3/3 disp.
            - generic [ref=e54]:
              - button "Editar" [ref=e55] [cursor=pointer]
              - button "Quitar" [ref=e56] [cursor=pointer]
          - article [ref=e57]:
            - generic [ref=e58]: NOV-001
            - heading "Cien años de soledad" [level=3] [ref=e59]
            - paragraph [ref=e60]: Gabriel García Márquez · 1967
            - generic [ref=e61]:
              - generic [ref=e62]: Novela
              - generic [ref=e63]: 4/4 disp.
            - generic [ref=e64]:
              - button "Editar" [ref=e65] [cursor=pointer]
              - button "Quitar" [ref=e66] [cursor=pointer]
          - article [ref=e67]:
            - generic [ref=e68]: TEC-007
            - heading "Clean Code" [level=3] [ref=e69]
            - paragraph [ref=e70]: Robert C. Martin · 2008
            - generic [ref=e71]:
              - generic [ref=e72]: Tecnología
              - generic [ref=e73]: 4/4 disp.
            - generic [ref=e74]:
              - button "Editar" [ref=e75] [cursor=pointer]
              - button "Quitar" [ref=e76] [cursor=pointer]
          - article [ref=e77]:
            - generic [ref=e78]: CIE-005
            - heading "Cosmos" [level=3] [ref=e79]
            - paragraph [ref=e80]: Carl Sagan · 1980
            - generic [ref=e81]:
              - generic [ref=e82]: Ciencia
              - generic [ref=e83]: 2/2 disp.
            - generic [ref=e84]:
              - button "Editar" [ref=e85] [cursor=pointer]
              - button "Quitar" [ref=e86] [cursor=pointer]
          - article [ref=e87]:
            - generic [ref=e88]: INF-002
            - heading "El principito" [level=3] [ref=e89]
            - paragraph [ref=e90]: Antoine de Saint-Exupéry · 1943
            - generic [ref=e91]:
              - generic [ref=e92]: Infantil
              - generic [ref=e93]: 6/6 disp.
            - generic [ref=e94]:
              - button "Editar" [ref=e95] [cursor=pointer]
              - button "Quitar" [ref=e96] [cursor=pointer]
          - article [ref=e97]:
            - generic [ref=e98]: CIE-003
            - heading "Fahrenheit 451" [level=3] [ref=e99]
            - paragraph [ref=e100]: Ray Bradbury · 1953
            - generic [ref=e101]:
              - generic [ref=e102]: Ciencia Ficción
              - generic [ref=e103]: 3/3 disp.
            - generic [ref=e104]:
              - button "Editar" [ref=e105] [cursor=pointer]
              - button "Quitar" [ref=e106] [cursor=pointer]
          - article [ref=e107]:
            - generic [ref=e108]: NOV-009
            - heading "Rayuela" [level=3] [ref=e109]
            - paragraph [ref=e110]: Julio Cortázar · 1963
            - generic [ref=e111]:
              - generic [ref=e112]: Novela
              - generic [ref=e113]: 2/2 disp.
            - generic [ref=e114]:
              - button "Editar" [ref=e115] [cursor=pointer]
              - button "Quitar" [ref=e116] [cursor=pointer]
          - article [ref=e117]:
            - generic [ref=e118]: HIS-004
            - 'heading "Sapiens: De animales a dioses" [level=3] [ref=e119]'
            - paragraph [ref=e120]: Yuval Noah Harari · 2011
            - generic [ref=e121]:
              - generic [ref=e122]: Historia
              - generic [ref=e123]: 5/5 disp.
            - generic [ref=e124]:
              - button "Editar" [ref=e125] [cursor=pointer]
              - button "Quitar" [ref=e126] [cursor=pointer]
          - article [ref=e127]:
            - generic [ref=e128]: POE-006
            - heading "Veinte poemas de amor" [level=3] [ref=e129]
            - paragraph [ref=e130]: Pablo Neruda · 1924
            - generic [ref=e131]:
              - generic [ref=e132]: Poesía
              - generic [ref=e133]: 3/3 disp.
            - generic [ref=e134]:
              - button "Editar" [ref=e135] [cursor=pointer]
              - button "Quitar" [ref=e136] [cursor=pointer]
  - generic [ref=e138]:
    - button "Cerrar" [ref=e139] [cursor=pointer]: ×
    - generic [ref=e140]:
      - heading "Añadir libro" [level=2] [ref=e141]
      - paragraph [ref=e142]: Nueva ficha del catálogo
      - generic [ref=e143]:
        - generic [ref=e144]:
          - generic [ref=e145]: Título
          - textbox "Título" [ref=e146]: Playwright Testing 2
        - generic [ref=e147]:
          - generic [ref=e148]: Autor
          - textbox "Autor" [ref=e149]: Orlando Amores
        - generic [ref=e150]:
          - generic [ref=e151]:
            - generic [ref=e152]: ISBN
            - textbox "ISBN" [ref=e153]: "123456"
          - generic [ref=e154]:
            - generic [ref=e155]: Año
            - spinbutton "Año" [active] [ref=e156]: "2026"
        - generic [ref=e157]:
          - generic [ref=e158]:
            - generic [ref=e159]: Categoría
            - combobox "Categoría" [ref=e160]:
              - option "Sin categoría" [selected]
              - option "Ciencia"
              - option "Ciencia Ficción"
              - option "Historia"
              - option "Infantil"
              - option "Novela"
              - option "Poesía"
              - option "Tecnología"
          - generic [ref=e161]:
            - generic [ref=e162]: Ejemplares
            - spinbutton "Ejemplares" [ref=e163]: "1"
        - generic [ref=e164]:
          - generic [ref=e165]: Sinopsis
          - textbox "Sinopsis" [ref=e166]
        - generic [ref=e167]:
          - button "Cancelar" [ref=e168] [cursor=pointer]
          - button "Añadir al catálogo" [ref=e169] [cursor=pointer]
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class LibrosPage{
  4  | 
  5  |     constructor(page){
  6  |         this.page = page;
  7  | 
  8  |         this.btnNuevoLibro = page.locator('#btn-nuevo-libro');
  9  |         this.inputBuscar = page.locator('#input-buscar');
  10 |         this.selectCategoria = page.locator('#select-categoria');
  11 |         this.checkDisponibles = page.locator('#check-disponibles');
  12 | 
  13 |         this.btnGuardar = page.locator('button[type=submit]');
  14 |         this.txtTitulo = page.locator('#f-titulo');
  15 |         this.txtAutor = page.locator('#f-autor');
  16 | 
  17 |         this.shelf = page.locator('#shelf-libros');
  18 |         this.emptyState = page.locator('#catalogo-vacio');
  19 |     }
  20 | 
  21 |     async abrir(){
  22 |         await this.page.goto('http://localhost:3000');
  23 |     }
  24 | 
  25 |     async crearLibro(titulo, autor, isbn = '', anio = ''){
  26 |         await this.btnNuevoLibro.click();
  27 |         await this.txtTitulo.fill(titulo);
  28 |         await this.txtAutor.fill(autor);
  29 |         if (isbn) await this.page.locator('#f-isbn').fill(isbn);
  30 |         if (anio) await this.page.locator('#f-anio').fill(String(anio));
> 31 |         await this.btnGuardar.click();
     |                               ^ Error: locator.click: Error: strict mode violation: locator('button[type=submit]') resolved to 3 elements:
  32 |         // esperar a que el modal se cierre y el catálogo se refresque
  33 |         await expect(this.emptyState).toBeHidden().catch(() => {});
  34 |     }
  35 | 
  36 |     async buscarLibro(termino){
  37 |         await this.inputBuscar.fill(termino);
  38 |         // esperar debounce + render
  39 |         await this.page.waitForTimeout(400);
  40 |     }
  41 | 
  42 |     async verificarLibro(titulo){
  43 |         await expect(this.shelf).toContainText(titulo);
  44 |     }
  45 | 
  46 |     async verificarMensajeSinResultados(){
  47 |         await expect(this.emptyState).toBeVisible();
  48 |     }
  49 | 
  50 |     async editarPrimerLibro(nuevoTitulo) {
  51 |         await this.page.locator('button[data-accion="editar-libro"]').first().click();
  52 |         await this.txtTitulo.fill(nuevoTitulo);
  53 |         await this.btnGuardar.click();
  54 |     }
  55 | 
  56 |     async eliminarPrimerLibro(){
  57 |         // Click delete on first book and confirm the confirm() dialog
  58 |         this.page.on('dialog', async dialog => {
  59 |             await dialog.accept();
  60 |         });
  61 |         await this.page.locator('button[data-accion="borrar-libro"]').first().click();
  62 |         // wait a bit for deletion to reflect
  63 |         await this.page.waitForTimeout(300);
  64 |     }
  65 | 
  66 |     async verificarLibroNoExiste(titulo){
  67 |         await expect(this.shelf).not.toContainText(titulo);
  68 |     }
  69 | 
  70 | }
  71 | 
  72 | module.exports = LibrosPage;
```