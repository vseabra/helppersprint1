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

interface Person {
  id: number,
  name: string,
  bio: string
}

interface Update {
  name?: string,
  bio?: string,
}


// recebe um id e retorna a bio correspodente.
const getBioByID = (id: number, list: Array<Person>): string | undefined => {
  console.log("start")
  const person = list.find(person => person.id === id)
  return person ? person.bio : undefined
}

// recebe um id e retorna o nome.
const getNameByID = (id: number, list: Array<Person>): string | undefined => {
  const person = list.find(person => person.id === id)
  return person ? person.name : undefined
}

// recebe um id e retorna a lista sem o elemento 
const deleteByID = (id: number, list: Array<Person>): Array<Person> => {
  const updatedList = list.filter(person => person.id !== id)
  return updatedList
}

// recebe um id e uma mudança {name?: string, bio?: string} e retorna a lista com a mudança aplicada
const updateByID = (id: number, list: Array<Person>, update: Update): Array<Person> => {
  const personToUpdate = list.find(object => object.id === id)
  if (personToUpdate === undefined){
    return list
  }

  const updatedPerson = {...personToUpdate, ... update}
  const updatedList: Array<Person> = list.map(person => person !== personToUpdate ? person : updatedPerson )

  return updatedList
}


// testes

// getBioByID
console.log("\nbios \n")
console.log(getBioByID(1, lista as Person[]))
console.log(getBioByID(2, lista as Person[]))
console.log(getBioByID(3, lista as Person[]))
console.log(getBioByID(4, lista as Person[]))
console.log(getBioByID(5, lista as Person[]))

console.log("\nnames \n")
console.log(getNameByID(1, lista as Person[]))
console.log(getNameByID(2, lista as Person[]))
console.log(getNameByID(3, lista as Person[]))
console.log(getNameByID(4, lista as Person[]))
console.log(getNameByID(5, lista as Person[]))

console.log("\ndelete \n")
const new_list = deleteByID(1, lista as Person[])
console.log(getNameByID(1, new_list as Person[])) // undefined
console.log(lista.length === new_list.length) // false

