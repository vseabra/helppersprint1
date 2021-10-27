import {
  getBioByID,
  getNameByID,
  deleteByID,
  updateByID,
  Update,
  Person,
} from "./ex_2_funcional";

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
const new_list = deleteByID(1, lista as Person[]); // Array<Pèrson>
console.log(getNameByID(1, new_list as Person[])); // undefined
console.log(lista.length === new_list.length); // false

// alterar
const update: Update = {
  name: "lovelace ada",
  bio: "N/A",
};
const updated_list = updateByID(1, lista as Person[], update);

console.log(getNameByID(1, updated_list as Person[])); //lovelace ada
console.log(getNameByID(1, lista as Person[])); //Ada Lovelace

console.log(getBioByID(1, updated_list as Person[])); // N/A
