# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usuarios.spec.js >> Registrar usuario
- Location: tests\e2e\usuarios.spec.js:8:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button[type="submit"]') resolved to 3 elements:
    1) <button type="submit" class="btn btn-primary btn-block">Entrar</button> aka getByText('Entrar')
    2) <button type="submit" class="btn btn-primary btn-block">Crear cuenta</button> aka locator('#form-registro').getByText('Crear cuenta')
    3) <button type="submit" class="btn btn-primary btn-block">Registrar</button> aka getByRole('button', { name: 'Registrar', exact: true })

Call log:
  - waiting for locator('button[type="submit"]')

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
            - paragraph [ref=e23]: Comunidad de lectura
            - heading "Lectores" [level=1] [ref=e24]
          - button "+ Registrar lector" [ref=e25] [cursor=pointer]
        - generic [ref=e26]:
          - article [ref=e27]:
            - generic [ref=e28]: AT
            - heading "Ana Torres" [level=3] [ref=e29]
            - paragraph [ref=e30]: ana.torres@correo.com
            - text: Lector desde 11 ago 2026
          - article [ref=e31]:
            - generic [ref=e32]: LF
            - heading "Luis Fernández" [level=3] [ref=e33]
            - paragraph [ref=e34]: luis.fernandez@correo.com
            - text: Lector desde 11 ago 2026
          - article [ref=e35]:
            - generic [ref=e36]: MJ
            - heading "María Jiménez" [level=3] [ref=e37]
            - paragraph [ref=e38]: maria.jimenez@correo.com
            - text: Lector desde 11 ago 2026
          - article [ref=e39]:
            - generic [ref=e40]: P
            - heading "prueba2" [level=3] [ref=e41]
            - paragraph [ref=e42]: prueba2*
            - text: Lector desde 11 ago 2026
  - generic [ref=e44]:
    - button "Cerrar" [ref=e45] [cursor=pointer]: ×
    - generic [ref=e46]:
      - heading "Registrar lector" [level=2] [ref=e47]
      - paragraph [ref=e48]: Nueva ficha de socio
      - generic [ref=e49]:
        - generic [ref=e50]:
          - generic [ref=e51]: Nombre completo
          - textbox "Nombre completo" [ref=e52]: Juan Pérez
        - generic [ref=e53]:
          - generic [ref=e54]: Correo
          - textbox "Correo" [ref=e55]: juan@email.com
        - generic [ref=e56]:
          - generic [ref=e57]: Teléfono
          - textbox "Teléfono" [active] [ref=e58]: 6000-0000
        - generic [ref=e59]:
          - button "Cancelar" [ref=e60] [cursor=pointer]
          - button "Registrar" [ref=e61] [cursor=pointer]
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class UsuariosPage {
  4  | 
  5  |     constructor(page) {
  6  | 
  7  |         this.page = page;
  8  | 
  9  |         this.btnNuevoUsuario = page.locator('#btn-nuevo-usuario');
  10 | 
  11 |         this.txtNombre = page.locator('#u-nombre');
  12 | 
  13 |         this.txtCorreo = page.locator('#u-correo');
  14 | 
  15 |         this.txtTelefono = page.locator('#u-telefono');
  16 | 
  17 |         this.btnGuardar = page.locator('button[type="submit"]');
  18 | 
  19 |         this.tarjetasUsuarios = page.locator('.reader-card');
  20 | 
  21 |     }
  22 | 
  23 |     async abrirFormulario() {
  24 | 
  25 |         await this.btnNuevoUsuario.click();
  26 | 
  27 |     }
  28 | 
  29 |     async crearUsuario(nombre, correo, telefono) {
  30 | 
  31 |         await this.abrirFormulario();
  32 | 
  33 |         await this.txtNombre.fill(nombre);
  34 | 
  35 |         await this.txtCorreo.fill(correo);
  36 | 
  37 |         await this.txtTelefono.fill(telefono);
  38 | 
> 39 |         await this.btnGuardar.click();
     |                               ^ Error: locator.click: Error: strict mode violation: locator('button[type="submit"]') resolved to 3 elements:
  40 | 
  41 |     }
  42 | 
  43 |     async verificarUsuario(nombre) {
  44 | 
  45 |         await expect(this.tarjetasUsuarios).toContainText(nombre);
  46 | 
  47 |     }
  48 | 
  49 | }
  50 | 
  51 | module.exports = UsuariosPage;
```