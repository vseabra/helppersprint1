"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex_2_funcional_1 = require("./ex_2_funcional");
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
// os comentários na frente do console.log são o que deve ser printado
// bio
console.log((0, ex_2_funcional_1.getBioByID)(1, lista)); // ${bio certa}
console.log((0, ex_2_funcional_1.getBioByID)(5, lista)); // undefined
// nome
console.log((0, ex_2_funcional_1.getNameByID)(1, lista)); // ada lovelace
console.log((0, ex_2_funcional_1.getNameByID)(5, lista)); // undefined
// deletar
var new_list = (0, ex_2_funcional_1.deleteByID)(1, lista);
console.log((0, ex_2_funcional_1.getNameByID)(1, new_list)); // undefined
console.log(lista.length === new_list.length); // false
// alterar
var update = {
    name: "lovelace ada",
    bio: "N/A",
};
var updated_list = (0, ex_2_funcional_1.updateByID)(1, lista, update);
console.log((0, ex_2_funcional_1.getNameByID)(1, updated_list)); //lovelace ada
console.log((0, ex_2_funcional_1.getNameByID)(1, lista)); //Ada Lovelace
console.log((0, ex_2_funcional_1.getBioByID)(1, updated_list)); // N/A
