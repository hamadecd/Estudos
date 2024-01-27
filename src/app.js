const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath} );

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../src/routes/authRoutes.js');
const userRoutes = require('../src/routes/userRoutes.js');

const app = express();
const port = 3000;

// Conectar ao MongoDB
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

// Middleware para parse de JSON
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
