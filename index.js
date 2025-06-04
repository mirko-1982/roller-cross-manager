const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("roller.db");

db.serialize(() => {
  db.run(\`
    CREATE TABLE IF NOT EXISTS Atleti (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      societa TEXT,
      anno_nascita INTEGER,
      categoria TEXT
    )
  \`);
});

app.post("/atleti", (req, res) => {
  const { nome, societa, anno_nascita, categoria } = req.body;
  db.run(
    \`INSERT INTO Atleti (nome, societa, anno_nascita, categoria) VALUES (?, ?, ?, ?)\`,
    [nome, societa, anno_nascita, categoria],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.get("/atleti", (req, res) => {
  db.all(\`SELECT * FROM Atleti\`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(\`Server listening at http://localhost:\${PORT}\`);
});