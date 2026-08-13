# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: prestamos.spec.js >> Registrar préstamo
- Location: tests\e2e\prestamos.spec.js:9:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#p-libro')
    - locator resolved to <select required="" id="p-libro">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    60 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

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
            - paragraph [ref=e23]: Movimiento de sala
            - heading "Préstamos" [level=1] [ref=e24]
          - button "+ Registrar préstamo" [active] [ref=e25] [cursor=pointer]
        - generic [ref=e27]:
          - button "Todos" [ref=e28] [cursor=pointer]
          - button "Activos" [ref=e29] [cursor=pointer]
          - button "Devueltos" [ref=e30] [cursor=pointer]
        - table [ref=e32]:
          - rowgroup [ref=e33]:
            - row [ref=e34]:
              - columnheader "Libro" [ref=e35]
              - columnheader "Lector" [ref=e36]
              - columnheader "Prestado" [ref=e37]
              - columnheader "Vence" [ref=e38]
              - columnheader "Estado" [ref=e39]
              - columnheader [ref=e40]
          - rowgroup
        - paragraph [ref=e41]: Aún no hay préstamos registrados con este filtro.
  - generic [ref=e43]:
    - button "Cerrar" [ref=e44] [cursor=pointer]: ×
    - generic [ref=e45]:
      - heading "Registrar préstamo" [level=2] [ref=e46]
      - paragraph [ref=e47]: Vence a los 14 días
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Libro
          - combobox "Libro" [ref=e51]:
            - option "Selecciona un libro…" [selected]
            - option "1984 - test 1786588087116 — 1 disp."
            - option "1984 - test 1786588255995 — 1 disp."
            - option "Breve historia del tiempo — 3 disp."
            - option "Cien años de soledad — 4 disp."
            - option "Clean Code - test 1786587080920 — 1 disp."
            - option "Clean Code - test 1786587222672 — 1 disp."
            - option "Clean Code - test 1786587409041 — 1 disp."
            - option "Clean Code - test 1786587623605 — 1 disp."
            - option "Clean Code - test 1786587774433 — 1 disp."
            - option "Clean Code - test 1786587925259 — 1 disp."
            - option "Clean Code - test 1786588089716 — 1 disp."
            - option "Clean Code - test 1786588259142 — 1 disp."
            - option "Libro Prueba 1786587096569 — 1 disp."
            - option "Libro Prueba 1786587247149 — 1 disp."
            - option "Libro Prueba 1786587433833 — 1 disp."
            - option "Libro Prueba 1786587648195 — 1 disp."
            - option "Libro Prueba 1786587799038 — 1 disp."
            - option "Libro Prueba 1786587959562 — 1 disp."
            - option "Libro Prueba 1786588110197 — 1 disp."
            - option "Libro Prueba 1786588282861 — 1 disp."
            - option "Playwright Testing Actualizado — 6 disp."
            - option "Playwright Testing Actualizado — 3 disp."
            - option "Playwright Testing Actualizado — 2 disp."
            - option "Playwright Testing Actualizado — 4 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 5 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Playwright Testing Actualizado — 1 disp."
            - option "Rayuela — 2 disp."
            - 'option "Sapiens: De animales a dioses — 5 disp."'
            - option "Veinte poemas de amor — 3 disp."
            - option "ejemplo 1 — 1 disp."
        - generic [ref=e52]:
          - generic [ref=e53]: Lector
          - combobox "Lector" [ref=e54]:
            - option "Selecciona un lector…" [selected]
            - option "Ana Torres"
            - option "Juan Pérez"
            - option "Luis Fernández"
            - option "María Jiménez"
            - option "Usuario Test 1786587096561"
            - option "Usuario Test 1786587247142"
            - option "Usuario Test 1786587433826"
            - option "Usuario Test 1786587648186"
            - option "Usuario Test 1786587799031"
            - option "Usuario Test 1786587959554"
            - option "Usuario Test 1786588110190"
            - option "Usuario Test 1786588282846"
            - option "prueba2"
        - generic [ref=e55]:
          - button "Cancelar" [ref=e56] [cursor=pointer]
          - button "Confirmar préstamo" [ref=e57] [cursor=pointer]
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class PrestamosPage {
  4  | 
  5  |     constructor(page) {
  6  | 
  7  |         this.page = page;
  8  | 
  9  |         this.btnNuevoPrestamo = page.locator('#btn-nuevo-prestamo');
  10 | 
  11 |         this.cmbLibro = page.locator('#p-libro');
  12 | 
  13 |         this.cmbUsuario = page.locator('#p-usuario');
  14 | 
  15 |         this.btnGuardar = page.locator('#form-prestamo button[type="submit"]');
  16 | 
  17 |         this.tabla = page.locator('#tabla-prestamos');
  18 | 
  19 |     }
  20 | 
  21 |     async abrirFormulario() {
  22 | 
  23 |         await this.btnNuevoPrestamo.click();
  24 | 
  25 |     }
  26 | 
  27 |     async crearPrestamo(libro, usuario) {
  28 | 
  29 |         await this.abrirFormulario();
  30 | 
> 31 |         await this.cmbLibro.selectOption({ label: libro });
     |                             ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  32 | 
  33 |         await this.cmbUsuario.selectOption({ label: usuario });
  34 | 
  35 |         await this.btnGuardar.click();
  36 | 
  37 |     }
  38 | 
  39 |     async verificarPrestamo(libro) {
  40 | 
  41 |         await expect(this.tabla).toContainText(libro);
  42 | 
  43 |     }
  44 | 
  45 |     async devolverPrimerPrestamo() {
  46 | 
  47 |         await this.page.locator('button[data-accion="devolver"]').first().click();
  48 | 
  49 |     }
  50 | 
  51 | }
  52 | 
  53 | module.exports = PrestamosPage;
```