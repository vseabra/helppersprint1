import { createForm, createRow } from "./DomUtils.js";
import { Person, Update, Form, TableRow, Button, Input} from "./types.js";
import { scientists, updateScientist, promptForDeletion } from "./services.js";
import { getBioByID, getNameByID } from "./utils.js";

export const renderTable = (list: Array<Person>): void => {
  const table: HTMLTableElement = document.querySelector(
    "#scientist-table"
  ) as HTMLTableElement;
  // remove todas as linhas antigas da tabela.
  table.innerHTML = "";

  const tableRows: HTMLElement[] = list.map(( scientist ) => {

    const updateButton: Button = {
      label: "Atualizar",
      className: "btn-edit",
      onClick: () => renderForm(scientist.id),
    };
    const deleteButton: Button = {
      label: "Deletar",
      className: "btn-delete",
      onClick: () => promptForDeletion(scientist.id),
    };
    const row: TableRow = {
      tableData: {...scientist},
      buttons: [updateButton, deleteButton]
    };
    return (createRow(row));

  })

  tableRows.forEach((row: HTMLElement) => table.appendChild(row));
};


const renderForm = (id: number): void => {
  const container: HTMLDivElement = document.querySelector(
    "#update-form-container"
  ) as HTMLDivElement;
  container.innerHTML = ""; // destroi o formulario anterior.

  const nameInput: Input = {
    placeholder: getNameByID(id, scientists) as string,
    name: "name-input",
  };
  const bioInput: Input = {
    placeholder: getBioByID(id, scientists) as string,
    name: "bio-input",
  };

  const form: Form = {id, onSubmit: (event: Event) => handleSubmit(event, id, container), inputs: [nameInput,bioInput] }
  const formElement: HTMLFormElement = createForm(form);
  container.appendChild(formElement);
};

const handleSubmit = (event: Event, id: number, container: HTMLDivElement): void => {
  event.preventDefault();

  const form: HTMLFormElement = event.target as HTMLFormElement;
  const nameInput: HTMLInputElement = form.elements.namedItem(
    "name-input"
  ) as HTMLInputElement;

  const bioInput: HTMLInputElement = form.elements.namedItem(
    "bio-input"
  ) as HTMLInputElement;

  const update: Update = {};
  // validação dos updates, se um campo for vazio não é atualizado.
  if (nameInput.value) {
    update.name = nameInput.value;
  }
  if (bioInput.value) {
    update.bio = bioInput.value;
  }
  updateScientist(id, update);
  container.innerHTML = "";
  renderTable(scientists);
};


document.addEventListener("DOMContentLoaded", () => renderTable(scientists));
