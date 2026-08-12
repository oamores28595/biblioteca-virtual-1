// ============================================================
// Biblioteca Virtual — Servidor principal (Express + SQLite)
// ============================================================
const express = require('express');
const cors = require('cors');
const path = require('path');

require('./database/db'); // inicializa la base de datos y el esquema

const authRouter = require('./routes/auth');
const librosRouter = require('./routes/libros');
const usuariosRouter = require('./routes/usuarios');
const prestamosRouter = require('./routes/prestamos');
const categoriasRouter = require('./routes/categorias');
const { verificarToken } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- API REST ---
// /api/auth es pública (login y registro). El resto requiere sesión iniciada.
app.use('/api/auth', authRouter);
app.use('/api/libros', verificarToken, librosRouter);
app.use('/api/usuarios', verificarToken, usuariosRouter);
app.use('/api/prestamos', verificarToken, prestamosRouter);
app.use('/api/categorias', verificarToken, categoriasRouter);

app.get('/api/salud', (req, res) => {
    res.json({ estado: 'ok', mensaje: 'API de Biblioteca Virtual funcionando correctamente' });
});

// --- Frontend estático ---
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Manejo de rutas de API no encontradas
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Ruta de API no encontrada' });
});

// Manejador global de errores: SIEMPRE responde en JSON (nunca HTML),
// para que el frontend pueda mostrar el mensaje real en vez de
// "Ocurrió un error inesperado". Además imprime el stack completo
// en la consola del servidor para poder depurar.
app.use((err, req, res, next) => {
    console.error('❌ Error no controlado en', req.method, req.originalUrl);
    console.error(err.stack || err);
    if (res.headersSent) return next(err);
    res.status(500).json({ error: err.message || 'Error interno del servidor' });
});

app.listen(PORT, () => {
    console.log('============================================');
    console.log('  📚  Biblioteca Virtual — Servidor activo');
    console.log(`  🌐  http://localhost:${PORT}`);
    console.log('============================================');
});
