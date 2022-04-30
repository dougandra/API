import { Router } from "express";
import {
    createTableFornecedor,
    insertFornecedor,
    updateFornecedor,
    selectFornecedor,
    selectFornecedor,
    deleteFornecedor
  } from "../controllers/fornecedores.js";
  import { selectFornecedores, selectFornecedor, insertFornecedor, updateFornecedor, deleteFornecedor } from "../controllers/Fornecedores.js";

  const router = Router();
  router.get('/', (req, res) => {
    res.json({
      "statusCode": 200,
      "message": "API rodando"
    })
  })
  
  // Fornecedor
  router.get('/fornecedor',selectFornecedor);
  router.get('/fornecedor/:id',selectFornecedor);
  router.post('/cliente',insertFornecedor);
  router.put('/cliente',updateFornecedor);
  router.delete('/cliente/:id',deleteFornecedor);


  export default router;