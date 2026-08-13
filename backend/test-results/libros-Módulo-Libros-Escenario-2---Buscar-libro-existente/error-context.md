# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: libros.spec.js >> Módulo Libros >> Escenario 2 - Buscar libro existente
- Location: tests\e2e\libros.spec.js:45:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#shelf-libros')
Timeout: 8000ms
- Expected substring  -   1
+ Received string     + 169

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
+       
+         GEN-058
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
+         GEN-072
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
+         GEN-086
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
        
      
    
      
        GEN-058
        Playwright Testing Actualizado
        George Orwell
        
          Sin categoría
          1/1 disp.
        
        
          Editar
          Quitar
        
      
    
      
        GEN-072
        Playwright Testing Actualizado
        George Orwell
        
          Sin categoría
          1/1 disp.
        
        
          Editar
          Quitar
        
      
    
      
        GEN-086
        Playwright Testing Actualizado
        George Orwell
        
          Sin categoría
          1/1 disp.
        
        
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
- article:
  - text: GEN-058
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: George Orwell
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: GEN-072
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: George Orwell
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
- article:
  - text: GEN-086
  - heading "Playwright Testing Actualizado" [level=3]
  - paragraph: George Orwell
  - text: Sin categoría 1/1 disp.
  - button "Editar"
  - button "Quitar"
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