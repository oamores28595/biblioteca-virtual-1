# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: libros.spec.js >> Módulo Libros >> Escenario 6 - Buscar libro existente
- Location: tests\e2e\libros.spec.js:78:8

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class HomePage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  | 
  8  |         this.tabPanel = page.locator('[data-view="panel"]');
  9  |         this.tabCatalogo = page.locator('[data-view="catalogo"]');
  10 |         this.tabPrestamos = page.locator('[data-view="prestamos"]');
  11 |         this.tabUsuarios = page.locator('[data-view="usuarios"]');
  12 | 
  13 |         this.btnNuevoLibro = page.locator('#btn-nuevo-libro');
  14 |         this.btnNuevoPrestamo = page.locator('#btn-nuevo-prestamo');
  15 |         this.btnNuevoUsuario = page.locator('#btn-nuevo-usuario');
  16 |     }
  17 | 
  18 |     async abrir() {
> 19 |         await this.page.goto('http://localhost:3000');
     |                         ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  20 |     }
  21 | 
  22 |     async irCatalogo() {
  23 |         await this.tabCatalogo.click();
  24 |     }
  25 | 
  26 |     async irPrestamos() {
  27 |         await this.tabPrestamos.click();
  28 |     }
  29 | 
  30 |     async irUsuarios() {
  31 |         await this.tabUsuarios.click();
  32 |     }
  33 | 
  34 |     async irPanel() {
  35 |         await this.tabPanel.click();
  36 |     }
  37 | 
  38 |     async verificarCarga() {
  39 |         await expect(this.btnNuevoLibro).toBeVisible();
  40 |     }
  41 | 
  42 | }
  43 | 
  44 | module.exports = HomePage;
```