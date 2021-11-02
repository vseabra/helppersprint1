"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex_2_imperativo_1 = require("./ex_2_imperativo");
var lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
// testes
// bio
console.log((0, ex_2_imperativo_1.getBioByIDImperative)(1, lista)); // bio certa
console.log((0, ex_2_imperativo_1.getBioByIDImperative)(5, lista)); // undefined
// nome
console.log((0, ex_2_imperativo_1.getNameByIDImperative)(1, lista)); // ada lovelace
console.log((0, ex_2_imperativo_1.getNameByIDImperative)(5, lista)); // undefined
// deletar
var lengthBefore = lista.length;
(0, ex_2_imperativo_1.deleteByIDImperative)(1, lista);
console.log(lista.length === lengthBefore); // false
console.log((0, ex_2_imperativo_1.getNameByIDImperative)(1, lista)); // undefined
// alterar
var update = {
    name: "lovelace ada",
    bio: "alterado",
};
(0, ex_2_imperativo_1.updateByIDImperative)(2, lista, update);
console.log((0, ex_2_imperativo_1.getNameByIDImperative)(2, lista)); // lovelace ada
console.log((0, ex_2_imperativo_1.getBioByIDImperative)(2, lista)); // "alterado"
console.log("a lista original foi alterada.");
console.log(lista);
