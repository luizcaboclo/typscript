"use strict";
exports.__esModule = true;
var pessoa_1 = require("./src/pessoa");
var pessoa1 = new pessoa_1.Pessoa();
pessoa1.nome = "Debora / pekky";
pessoa1.cpf = "234.543.654-34";
pessoa1.idade = 30;
pessoa1.telefone = "(21)993987027";
console.log("o nome da pessoa \u00E9: ".concat(pessoa1.nome));
