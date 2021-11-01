import { renderTable } from "./main.js";
import { deleteByID, updateByID } from "./utils.js";
// criei esse arquivo porque eu queria colocar o promptForDeletion em um arquivo separado, porém ele depende de scientists (não tem como sobrescrever valores importados)
export var scientists = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    },
];
// essas funções abaixo encapsulam o código de manipulação de dados, de forma que as outras funções não tenham que modificar a variavel scientists
export var promptForDeletion = function (id) {
    var confirmation = confirm("tem certeza?");
    if (confirmation) {
        scientists = deleteByID(id, scientists);
        renderTable(scientists);
    }
};
export var updateScientist = function (id, update) {
    scientists = updateByID(id, scientists, update);
};
