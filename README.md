# 📚 Bibliotheca — Biblioteca Virtual

Proyecto integrador full-stack: gestión de catálogo, lectores y préstamos de una biblioteca.

**Stack:** Node.js + Express (API REST) · SQLite (`better-sqlite3`) · HTML/CSS/JavaScript puro (sin frameworks) en el frontend.

---

## 1. Estructura del proyecto

```
biblioteca-virtual/
├── backend/
│   ├── database/
│   │   ├── schema.sql      # Definición de tablas
│   │   ├── db.js           # Conexión + inicialización automática del esquema
│   │   ├── seed.js         # Datos de ejemplo (10 libros, 7 categorías, 3 lectores)
│   │   └── biblioteca.db   # Se genera al ejecutar el proyecto (no se versiona)
│   ├── routes/
│   │   ├── libros.js       # CRUD de libros + búsqueda/filtros
│   │   ├── usuarios.js     # CRUD de lectores
│   │   ├── prestamos.js    # Registrar préstamo, devolución, estadísticas
│   │   └── categorias.js   # Listado/creación de categorías
│   ├── server.js           # Punto de entrada del servidor Express
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── css/style.css
│   └── js/app.js           # Consume la API mediante fetch()
└── README.md
```

## 2. Modelo de datos (SQLite)

| Tabla        | Descripción                                                        |
|--------------|---------------------------------------------------------------------|
| `categorias` | Géneros/categorías de los libros                                    |
| `libros`     | Título, autor, ISBN, año, categoría, sinopsis, ejemplares totales/disponibles |
| `usuarios`   | Lectores registrados (nombre, correo, teléfono)                     |
| `prestamos`  | Relación libro–usuario, fecha de préstamo, fecha límite, fecha de devolución y estado |

El esquema completo está en `backend/database/schema.sql`. Se ejecuta automáticamente la primera vez que arranca el servidor — no hace falta crear la base de datos a mano.

## 3. Instalación y ejecución

Requisitos: **Node.js 18 o superior**.

```bash
cd backend
npm install          # instala express, better-sqlite3, cors, bcryptjs y jsonwebtoken
npm run seed          # (opcional) carga datos de ejemplo + 1 cuenta de bibliotecario
npm start              # levanta el servidor en http://localhost:3000
```

Al abrir `http://localhost:3000` verás primero una pantalla de inicio de sesión. Puedes:
- Crear una cuenta nueva desde la pestaña "Crear cuenta", o
- Usar la cuenta de prueba (si corriste `npm run seed`): **bibliotecario@biblioteca.com** / **biblioteca123**

Toda la API (excepto `/api/auth/*`) requiere un token de sesión válido — el frontend lo maneja automáticamente guardándolo en `localStorage` tras iniciar sesión.

Abre **http://localhost:3000** en el navegador: el mismo servidor Express sirve el frontend estático y expone la API en `/api/...`, así que no hay que configurar CORS entre dos puertos distintos (aunque el paquete `cors` ya está incluido por si se separa el frontend en otro servidor durante el desarrollo).

Para desarrollo con recarga automática del backend:
```bash
npm run dev
```

## 4. Endpoints de la API

### Autenticación — `/api/auth` (públicos, no requieren token)
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/auth/registro` | Crea una cuenta de bibliotecario (`nombre_completo`, `correo`, `password`) |
| POST | `/api/auth/login` | Inicia sesión (`correo`, `password`), devuelve `{ token, bibliotecario }` |
| GET | `/api/auth/yo` | Devuelve los datos de la cuenta autenticada (requiere token) |

**Todas las demás rutas (`/api/libros`, `/api/usuarios`, `/api/prestamos`, `/api/categorias`) requieren el header:**
```
Authorization: Bearer <token>
```
El token se obtiene al hacer login o registro y expira a las 8 horas.

### Libros — `/api/libros`
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/libros` | Lista libros. Filtros opcionales: `?q=`, `?categoria=`, `?disponibles=true` |
| GET | `/api/libros/:id` | Detalle de un libro |
| POST | `/api/libros` | Crea un libro (`titulo`, `autor` obligatorios) |
| PUT | `/api/libros/:id` | Actualiza un libro |
| DELETE | `/api/libros/:id` | Elimina un libro |

### Usuarios — `/api/usuarios`
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/usuarios` | Lista lectores |
| GET | `/api/usuarios/:id` | Detalle + historial de préstamos |
| POST | `/api/usuarios` | Crea un lector (`nombre_completo`, `correo` obligatorios) |
| PUT | `/api/usuarios/:id` | Actualiza un lector |
| DELETE | `/api/usuarios/:id` | Elimina un lector |

### Préstamos — `/api/prestamos`
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/prestamos` | Lista préstamos. Filtro opcional `?estado=activo\|devuelto` |
| POST | `/api/prestamos` | Registra un préstamo (`id_libro`, `id_usuario`). Descuenta un ejemplar disponible y fija vencimiento a 14 días |
| PUT | `/api/prestamos/:id/devolver` | Marca como devuelto y repone el ejemplar |
| GET | `/api/prestamos/estadisticas/resumen` | Totales para el panel (ejemplares, disponibles, préstamos activos, lectores, atrasados) |

### Categorías — `/api/categorias`
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/categorias` | Lista categorías |
| POST | `/api/categorias` | Crea una categoría |

Todas las respuestas de error usan el formato `{ "error": "mensaje" }` con el código HTTP correspondiente (400, 404, 409).

## 5. Reglas de negocio implementadas

- No se puede prestar un libro si `ejemplares_disponibles = 0` (409 Conflicto).
- Al registrar un préstamo se descuenta un ejemplar disponible; al devolverlo, se repone (todo dentro de una transacción SQLite, para evitar inconsistencias).
- Un préstamo no puede devolverse dos veces.
- El vencimiento se calcula automáticamente a 14 días desde el préstamo.
- El frontend marca visualmente como **"Atrasado"** cualquier préstamo activo cuya fecha límite ya pasó.
- ISBN y correo de usuario son únicos (se valida a nivel de base de datos).

## 6. Frontend

- Sin frameworks: HTML + CSS + JavaScript nativo (`fetch`, manipulación directa del DOM).
- Cuatro vistas: **Catálogo** (búsqueda y filtros), **Préstamos** (ledger con estado y devoluciones), **Lectores** y **Panel** (estadísticas).
- Identidad visual propia inspirada en el fichero de catálogo de una biblioteca: verde institucional, papel envejecido, acentos en latón y tipografía Fraunces/Source Sans/JetBrains Mono (esta última para signaturas y fechas, como en una ficha de préstamo real).
- Diseño responsivo (funciona en escritorio y móvil).

## 7. Posibles extensiones (ideas para ampliar el proyecto)

- Autenticación de bibliotecario (login) para proteger las rutas de escritura.
- Notificaciones por correo cuando un préstamo está por vencer.
- Migrar de SQLite a MySQL/PostgreSQL cambiando únicamente `backend/database/db.js` (el resto del código usa SQL estándar).
- Paginación en `/api/libros` para catálogos grandes.
- Exportar reportes de préstamos a PDF/Excel.
