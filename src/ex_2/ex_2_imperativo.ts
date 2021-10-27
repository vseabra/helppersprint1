interface Person {
  id: number;
  name: string;
  bio: string;
}

interface Update {
  name?: string;
  bio?: string;
}

// recebe um id e retorna a bio correspodente.
const getBioByID = (id: number, list: Array<Person>): string | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i].bio;
    }
  }
  return undefined;
};

// recebe um id e retorna o nome correspodente.
const getNameByID = (id: number, list: Array<Person>): string | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i].name;
    }
  }
  return undefined;
};

// recebe um id e modifica a lista para remover o elemento
const deleteByID = (id: number, list: Array<Person>): void => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
    }
  }
};

// recebe um id e uma mudança {name?: string, bio?: string} e modifica a lista com o elemento atualizado
const updateByID = (id: number, list: Array<Person>, update: Update): void => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i] = { ...list[i], ...update };
    }
  }
};

export { getBioByID, getNameByID, deleteByID, updateByID, Update, Person };
