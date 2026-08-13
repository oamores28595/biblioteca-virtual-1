# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: libros.spec.js >> Módulo Libros >> Escenario 2 - Buscar libro existente
- Location: tests\e2e\libros.spec.js:39:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#shelf-libros')
Timeout: 8000ms
- Expected substring  -   1
+ Received string     + 127

- Playwright Testing 2
+
+       
+         INF-002
+         Playwright Testing Actualizado
+         Antoine de Saint-Exupéry · 1943
+         
+           Infantil
+           6/6 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         CIE-003
+         Playwright Testing Actualizado
+         Ray Bradbury · 1953
+         
+           Ciencia Ficción
+           3/3 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         CIE-005
+         Playwright Testing Actualizado
+         Carl Sagan · 1980
+         
+           Ciencia
+           2/2 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         TEC-007
+         Playwright Testing Actualizado
+         Robert C. Martin · 2008
+         
+           Tecnología
+           4/4 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         GEN-031
+         Playwright Testing Actualizado
+         Orlando Amores · 2026
+         
+           Sin categoría
+           1/1 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         GEN-033
+         Playwright Testing Actualizado
+         Orlando Amores · 2026
+         
+           Sin categoría
+           1/1 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         GEN-040
+         Playwright Testing Actualizado
+         George Orwell
+         
+           Sin categoría
+           1/1 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         GEN-044
+         Playwright Testing Actualizado
+         George Orwell
+         
+           Sin categoría
+           1/1 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     
+       
+         CIE-054
+         Playwright Testing Actualizado
+         George Orwell · 1949
+         
+           Ciencia Ficción
+           5/5 disp.
+         
+         
+           Editar
+           Quitar
+         
+       
+     

Call log:
  - Expect "toContainText" with timeout 8000ms
  - waiting for locator('#shelf-libros')
    19 × locator resolved to <div class="shelf" id="shelf-libros">…</div>
       - unexpected value "
      
        INF-002
        Playwright Testing Actualizado
        Antoine de Saint-Exupéry · 1943
        
          Infantil
          6/6 disp.
        
        
          Editar
          Quitar
        
      
    
      
        CIE-003
        Playwright Testing Actualizado
        Ray Bradbury · 1953
        
          Ciencia Ficción
          3/3 disp.
        
        
          Editar
          Quitar
        
      
    
      
        CIE-005
        Playwright Testing Actualizado
        Carl Sagan · 1980
        
          Ciencia
          2/2 disp.
        
        
          Editar
          Quitar
        
      
    
      
        TEC-007
        Playwright Testing Actualizado
        Robert C. Martin · 2008
        
          Tecnología
          4/4 disp.
        
        
          Editar
          Quitar
        
      
    
      
        GEN-031
        Playwright Testing Actualizado
        Orlando Amores · 2026
        
          Sin categoría
          1/1 disp.
        
        
          Editar
          Quitar
        
      
    
      
        GEN-033
        Playwright Testing Actualizado
        Orlando Amores · 2026
        
          Sin categoría
          1/1 disp.
        
        
          Editar
          Quitar
        
      
    
      
        GEN-040
        Playwright Testing Actualizado
        George Orwell
        
          Sin categoría
          1/1 disp.
        
        
          Editar
          Quitar
        
      
    
      
        GEN-044
        Playwright Testing Actualizado
        George Orwell
        
          Sin categoría
          1/1 disp.
        
        
          Editar
          Quitar
        
      
    
      
        CIE-054
        Playwright Testing Actualizado
        George Orwell · 1949
        
          Ciencia Ficción
          5/5 disp.
        
        
          Editar
          Quitar
        
      
    "

```

```yaml
- article:
  - text: INF-002
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: Antoine de Saint-Exupéry · 1943
  - text: Infantil 6/6 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: CIE-003
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: Ray Bradbury · 1953
  - text: Ciencia Ficción 3/3 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: CIE-005
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: Carl Sagan · 1980
  - text: Ciencia 2/2 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: TEC-007
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: Robert C. Martin · 2008
  - text: Tecnología 4/4 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: GEN-031
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: Orlando Amores · 2026
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: GEN-033
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: Orlando Amores · 2026
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: GEN-040
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: George Orwell
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: GEN-044
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: George Orwell
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: CIE-054
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: George Orwell · 1949
  - text: Ciencia Ficción 5/5 disp.
  - button "Editar"
  - button "Quitar"
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
  13 |         this.btnGuardar = page.locator('#form-libro button[type="submit"]');
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
  27 |         // wait for the modal/form to appear
  28 |         await this.txtTitulo.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  29 |         await this.txtTitulo.fill(titulo);
  30 |         await this.txtAutor.fill(autor);
  31 |         if (isbn) await this.page.locator('#f-isbn').fill(isbn);
  32 |         if (anio) await this.page.locator('#f-anio').fill(String(anio));
  33 |         await this.btnGuardar.click();
  34 |         // esperar a que el modal se cierre y el catálogo se refresque (buscar la tarjeta creada)
  35 |         try {
  36 |             await this.page.locator('.libro-card', { hasText: titulo }).waitFor({ state: 'visible', timeout: 8000 });
  37 |         } catch (e) {
  38 |             // fallback: small wait
  39 |             await this.page.waitForTimeout(800);
  40 |         }
  41 |     }
  42 | 
  43 |     async resetFiltros(){
  44 |         await this.inputBuscar.fill('');
  45 |         await this.selectCategoria.selectOption({ value: '' }).catch(() => {});
  46 |         // uncheck disponibles if checked
  47 |         const checked = await this.checkDisponibles.isChecked().catch(() => false);
  48 |         if (checked) await this.checkDisponibles.click();
  49 |         // esperar debounce + render
  50 |         await this.page.waitForTimeout(400);
  51 |     }
  52 | 
  53 |     async buscarLibro(termino){
  54 |         await this.resetFiltros();
  55 |         await this.inputBuscar.fill(termino);
  56 |         // esperar debounce + render
  57 |         await this.page.waitForTimeout(600);
  58 |     }
  59 | 
  60 |     async verificarLibro(titulo){
> 61 |         await expect(this.shelf).toContainText(titulo, { timeout: 8000 });
     |                                  ^ Error: expect(locator).toContainText(expected) failed
  62 |     }
  63 | 
  64 |     async verificarMensajeSinResultados(){
  65 |         await expect(this.emptyState).toBeVisible({ timeout: 5000 });
  66 |     }
  67 | 
  68 |     async editarPrimerLibro(nuevoTitulo) {
  69 |         await this.page.locator('button[data-accion="editar-libro"]').first().click();
  70 |         await this.txtTitulo.fill(nuevoTitulo);
  71 |         await this.btnGuardar.click();
  72 |     }
  73 | 
  74 |     async eliminarPrimerLibro(titulo = null){
  75 |         // If a title is provided, find the book card that contains that title and click its delete button.
  76 |         this.page.on('dialog', async dialog => {
  77 |             await dialog.accept();
  78 |         });
  79 | 
  80 |         if (titulo) {
  81 |             const card = this.shelf.locator(`.libro-card:has-text("${titulo}")`);
  82 |             const btn = card.locator('button[data-accion="borrar-libro"]');
  83 |             await btn.first().click();
  84 |         } else {
  85 |             await this.page.locator('button[data-accion="borrar-libro"]').first().click();
  86 |         }
  87 | 
  88 |         // wait a bit for deletion to reflect
  89 |         await this.page.waitForTimeout(300);
  90 |     }
  91 | 
  92 |     async verificarLibroNoExiste(titulo){
  93 |         await expect(this.shelf).not.toContainText(titulo, { timeout: 8000 });
  94 |     }
  95 | 
  96 | }
  97 | 
  98 | module.exports = LibrosPage;
```