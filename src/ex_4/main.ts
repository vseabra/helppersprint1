import {getBioByID, getNameByID, deleteByID, updateByID} from "./utils";
import {Person, Update} from "./types"

let lista: Array<Person> = [
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

// cria uma linha da tabela com os dados da pessoa e o botão de update
const createRow = (person: Person): HTMLElement => {
  const row: HTMLElement = document.createElement("tr");
  const idCell: HTMLElement = document.createElement("td");
  const nameCell: HTMLElement = document.createElement("td");
  const bioCell: HTMLElement = document.createElement("td");

  const ctaUpdate: HTMLButtonElement = document.createElement("button");
  ctaUpdate.innerText = "Editar";
  ctaUpdate.className = "btn-edit";
  ctaUpdate.addEventListener("click", () => makeUpdateForm(person.id));

  const ctaDelete: HTMLButtonElement = document.createElement("button")
  ctaDelete.innerText = "Deletar";
  ctaDelete.className = "btn-delete";
  ctaDelete.addEventListener("click", () => promptForDeletion(person.id))

  idCell.innerText = person.id.toString();
  nameCell.innerText = person.name;
  bioCell.innerText = person.bio;

  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(bioCell);
  row.appendChild(ctaUpdate);
  row.appendChild(ctaDelete);

  return row;
};

const renderTable = (list: Array<Person>): void => {
  const table: HTMLTableElement = document.querySelector(
    "#scientist-table"
  ) as HTMLTableElement;
  // remove todas as linhas antigas da tabela.
  table.innerHTML = "";
  const tableRows = list.map(createRow);

  tableRows.forEach((row: HTMLElement) => table.appendChild(row));
};

const makeUpdateForm = (id: number): void => {
  const container: HTMLDivElement = document.querySelector(
    "#update-form-container"
  ) as HTMLDivElement;
  const updateForm = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.placeholder = String(getNameByID(id, lista));

  const bioInput = document.createElement("input");
  bioInput.placeholder = String(getBioByID(id, lista));

  const submitButton = document.createElement("button");
  submitButton.innerText = "Atualizar";
  submitButton.type = "submit";

  updateForm.appendChild(nameInput);
  updateForm.appendChild(bioInput);
  updateForm.appendChild(submitButton);

  // gambiarra que eu fiz para passar o valor do id com o evento de submit
  // acho que não é o melhor jeito de fazer isso.
  updateForm.addEventListener("submit", (event: Event) =>
    handleUpdateSubmit(event, id, {
      name: nameInput.value,
      bio: bioInput.value,
    })
  );

  container.appendChild(updateForm);
};

// essa funçao atualiza a lista, renderiza novamente a tabela e destroi o forulário de update
const handleUpdateSubmit = (
  event: Event,
  personId: number,
  update: Update
): void => {
  event.preventDefault();
  // validação dos updates, se uma campo for vazio não é atualizado.
  update.bio = update.bio ? update.bio : getBioByID(personId, lista);
  update.name = update.name ? update.name : getNameByID(personId, lista);

  // atualiza a lista
  lista = updateByID(personId, lista, update);

  // destroi o formulario
  const container: HTMLDivElement = document.querySelector(
    "#update-form-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  // re-renderiza a tabela
  renderTable(lista);
};

const promptForDeletion = (id: number):void => {
  const confirmation = confirm("tem certeza?");
  if (confirmation) {
    lista = deleteByID(id, lista);
    renderTable(lista);
  }
}

document.addEventListener("DOMContentLoaded", () => renderTable(lista));
