const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Altere se seu usuário for diferente
  password: '',      // Coloque sua senha do MySQL (se houver)
  database: 'esportearlivre'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar no MySQL:', err.message);
  } else {
    console.log('✅ Conectado ao banco de dados MySQL!');
  }
});

// Rota GET: Buscar todos os produtos do MySQL
app.get('/api/produtos', (req, res) => {
  const sql = 'SELECT * FROM produtos';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Rota POST: Cadastrar usuário
app.post('/api/usuarios', (req, res) => {
  const sql = 'INSERT INTO usuarios SET ?';
  db.query(sql, req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});