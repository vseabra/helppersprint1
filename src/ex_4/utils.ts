import {Person, Update} from "./types"

// recebe um id e retorna a bio correspodente.
export const getBioByID = (id: number, list: Array<Person>): string | undefined => {
  const person: Person | undefined = list.find(
    (person: Person) => person.id === id
  );
  return person ? person.bio : undefined;
};

// recebe um id e retorna o nome.
export const getNameByID = (id: number, list: Array<Person>): string | undefined => {
  const person: Person | undefined = list.find(
    (person: Person) => person.id === id
  );
  return person ? person.name : undefined;
};

// recebe um id e retorna a lista sem o elemento
export const deleteByID = (id: number, list: Array<Person>): Array<Person> => {
  const updatedList: Array<Person> = list.filter(
    (person: Person) => person.id !== id
  );
  return updatedList;
};

// recebe um id e uma mudança {name?: string, bio?: string} e retorna a lista com a mudança aplicada
export const updateByID = (
  id: number,
  list: Array<Person>,
  update: Update
): Array<Person> => {
  const personToUpdate: Person | undefined = list.find(
    (person: Person) => person.id === id
  );
  if (personToUpdate === undefined) {
    return list;
  }

  const updatedPerson: Person = { ...personToUpdate, ...update };
  const updatedList: Array<Person> = list.map((person: Person) =>
    person !== personToUpdate ? person : updatedPerson
  );

  return updatedList;
};
