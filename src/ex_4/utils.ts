import {Person, Update} from "./types.js"
/**
 * retorna a bio de uma pessoa ou undefined, se não existir
 *
 * @param id: number id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: string | undefined
 *
 */
export const getBioByID = (id: number, list: Array<Person>): string | undefined => {
  const person: Person | undefined = list.find(
    (person: Person) => person.id === id
  );
  return person ? person.bio : undefined;
};

/**
 * retorna o nome de uma pessoa ou undefined, se não existir
 *
 * @param id: number id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: string | undefined
 *
 */
export const getNameByID = (id: number, list: Array<Person>): string | undefined => {
  const person: Person | undefined = list.find(
    (person: Person) => person.id === id
  );
  return person ? person.name : undefined;
};

/**
 * retorna uma nova lista sem o elemento com o id passado
 *
 * @param id: number - id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: Person[]
 *
 */
export const deleteByID = (id: number, list: Array<Person>): Array<Person> => {
  const updatedList: Array<Person> = list.filter(
    (person: Person) => person.id !== id
  );
  return updatedList;
};

/**
 * retorna uma nova lista com o elemento com o id passado sobescrito pelo update
 *
 * @param id: number -id da pessoa a ser buscada
 * @param list: Person[]
 * @param update: Update
 * @returns: Person[]
 *
 */
export const updateByID = (
  id: number,
  list: Array<Person>,
  update: Update
): Array<Person> => {
  const personToUpdate: Person | undefined = list.find(
    (person: Person) => person.id === id
  );
  if (!personToUpdate) {
    return list;
  }

  const updatedPerson: Person = { ...personToUpdate, ...update };
  const updatedList: Array<Person> = list.map((person: Person) =>
    person.id !== personToUpdate.id ? person : updatedPerson
  );

  return updatedList;
};

