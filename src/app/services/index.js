const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com seu MySQL local
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Seu usuário do MySQL
  password: '',      // Sua senha do MySQL
  database: 'esportearlivre'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('✅ Conectado ao MySQL!');
  }
});

// GET: Buscar Produtos
app.get('/api/produtos', (req, res) => {
  connection.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// POST: Cadastrar Usuário
app.post('/api/usuarios', (req, res) => {
  const dados = req.body;
  const sql = 'INSERT INTO usuarios SET ?';
  
  connection.query(sql, dados, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...dados });
  });
});

// POST: Registrar Pedido Finalizado
app.post('/api/pedidos', (req, res) => {
  const { usuario_id, valor_total, metodo_pagamento } = req.body;
  const sql = 'INSERT INTO pedidos (usuario_id, valor_total, metodo_pagamento) VALUES (?, ?, ?)';

  connection.query(sql, [usuario_id, valor_total, metodo_pagamento], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ mensagem: 'Pedido gravado no MySQL!', id: result.insertId });
  });
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});