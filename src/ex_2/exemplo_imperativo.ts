import {
  getBioByID,
  getNameByID,
  deleteByID,
  updateByID,
  Update,
  Person,
} from "./ex_2_imperativo";

let lista: Array<Object> = [
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
console.log(getBioByID(1, lista as Person[])); // bio certa
console.log(getBioByID(5, lista as Person[])); // undefined

// nome
console.log(getNameByID(1, lista as Person[])); // ada lovelace
console.log(getNameByID(5, lista as Person[])); // undefined

// deletar
const lengthBefore: number = lista.length
deleteByID(1, lista as Person[]);
console.log(lista.length === lengthBefore) // false
console.log(getNameByID(1, lista as Person[])); // undefined

// alterar
const update: Update = {
  name: "lovelace ada",
  bio: "alterado",
};

updateByID(2, lista as Person[], update);
console.log(getNameByID(2, lista as Person[])); // lovelace ada
console.log(getBioByID(2, lista as Person[])); // "alterado"

console.log("a lista original foi alterada.")
console.log(lista) 
