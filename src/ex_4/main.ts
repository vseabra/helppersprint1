import { createForm, createRow } from "./DomUtils.js";
import { Person, Update } from "./types.js";
import { scientists, updateScientist } from "./services.js";

export const renderTable = (list: Array<Person>): void => {
  const table: HTMLTableElement = document.querySelector(
    "#scientist-table"
  ) as HTMLTableElement;
  // remove todas as linhas antigas da tabela.
  table.innerHTML = "";
  const tableRows = list.map((scientist) => createRow(scientist, renderForm));

  tableRows.forEach((row: HTMLElement) => table.appendChild(row));
};

const renderForm = (id: number): void => {
  const container: HTMLDivElement = document.querySelector(
    "#update-form-container"
  ) as HTMLDivElement;
  container.innerHTML = ""; // destroi o formulario anterior.

  // TODO talvez mover para outro lugar? mas eu teria que passar o id de alguma forma...
  const handleSubmit = (event: Event) => {
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

  const form = createForm(id, handleSubmit);
  container.appendChild(form);
};

document.addEventListener("DOMContentLoaded", () => renderTable(scientists));
