interface Person {
  id: number;
  name: string;
  bio: string;
}

interface Update {
  name?: string;
  bio?: string;
}

/**
 * retorna a bio de uma pessoa ou undefined, se não existir
 *
 * @param id: number id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: string | undefined
 *
 */
const getBioByID = (id: number, list: Array<Person>): string | undefined => {
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i].bio;
    }
  }
  return undefined;
};

/**
 * retorna o nome de uma pessoa ou undefined, se não existir
 *
 * @param id: number id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: string | undefined
 *
 */
const getNameByID = (id: number, list: Array<Person>): string | undefined => {
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i].name;
    }
  }
  return undefined;
};

/**
 * modifica a lista de pessoas para não incluir o elemento com o id passado
 *
 * @param id: number - id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: void
 *
 */
const deleteByID = (id: number, list: Array<Person>): void => {
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
    }
  }
};

/**
 * modifica a lista de pessoas, subscrevendo o elemento com o id passado com o update
 *
 * @param id: number -id da pessoa a ser buscada
 * @param list: Person[]
 * @param update: Update
 * @returns: void
 *
 */
const updateByID = (id: number, list: Array<Person>, update: Update): void => {
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i] = { ...list[i], ...update };
    }
  }
};

export { getBioByID, getNameByID, deleteByID, updateByID, Update, Person };
