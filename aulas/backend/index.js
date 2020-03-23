const express = require('express');

const app = express();

app.get('/', (req,res) =>{
  return res.json({
    evento: "semana",
    aluno: "leo"
  })
});

app.listen(3333);