import { openDb } from "../config/ConfigDb.js";

// Criando a tabela Fornecedores
export async function createTableFornecedor() {
    openDb()
    .then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Fornecedor ( id INTEGER PRIMARY KEY, nome TEXT, cnpj INTEGER, telefone INTEGER )`)
    })
}

export async function selectFornecedor(req, res) {
    openDb()
        .then(db => db.all(`SELECT * FROM Fornecedor`))
        .then(fornecedores => res.json(fornecedores))
}

export async function selectFornecedor(req, res) {
    let id = req.params.id;

    openDb()
        .then(db => db.get(`SELECT * FROM Fornecedor WHERE ID = ?`, [id]))
        .then(fornecedor => res.json(fornecedor))
}

export async function insertFornecedor(req, res) {
    let fornecedor = req.body;

    openDb()
        .then(db => {
            db.run(`INSERT INTO Fornecedor (nome, cnpj, telefone) VALUES (?,?,?)`, [fornecedor.nome, fornecedor.cnpj, fornecedor.telefone]);
        });
    res.json({
        "statusCode": 200
    });
}

export async function updateFornecedor(req, res) {
    let fornecedor = req.body;
    openDb()
        .then(db => {
            db.run(`UPDATE Fornecedor SET nome = ?, cnpj = ?, telefone = ? WHERE id = ?`, [funcionario.nome, funcionario.cnpj, funcionario.telefone]);
        });
    res.json({
        "statusCode": 200
    });
}

export async function deleteFornecedor(req, res) {
    let id = req.params.id;
    
    openDb()
        .then(db => db.get(`DELETE FROM Fornecedor WHERE ID = ?`, [id]))
        // .then(res => res);
    res.json({
        "statusCode": 200
    });
}