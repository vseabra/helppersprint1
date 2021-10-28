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
  const person: Person | undefined = list.find((person: Person) => person.id === id);
  return person ? person.bio : undefined;
};

// recebe um id e retorna o nome.
const getNameByID = (id: number, list: Array<Person>): string | undefined => {
  const person: Person | undefined   = list.find((person: Person) => person.id === id);
  return person ? person.name : undefined;
};

// recebe um id e retorna a lista sem o elemento
const deleteByID = (id: number, list: Array<Person>): Array<Person> => {
  const updatedList: Array<Person> = list.filter((person: Person) => person.id !== id);
  return updatedList;
};

// recebe um id e uma mudança {name?: string, bio?: string} e retorna a lista com a mudança aplicada
const updateByID = (id: number, list: Array<Person>, update: Update): Array<Person> => {
  const personToUpdate: Person | undefined = list.find((person: Person) => person.id === id);
  if (personToUpdate === undefined) {
    return list;
  }

  const updatedPerson: Person = { ...personToUpdate, ...update };
  const updatedList: Array<Person> = list.map((person: Person) =>
    person !== personToUpdate ? person : updatedPerson
  );

  return updatedList;
};

export { getBioByID, getNameByID, deleteByID, updateByID, Update, Person };
