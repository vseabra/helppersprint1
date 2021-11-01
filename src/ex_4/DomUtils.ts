import { Person, Button, Form, Input, TableRow } from "./types.js";
import { getBioByID, getNameByID } from "./utils.js";
import { scientists, promptForDeletion } from "./services.js";

/**
 * retorna um HTMLInputElement
 *
 * @param input - objeto input, com placeholder e name
 * @returns: HTMLInputElement
 *
 */
export const createInput = (input: Input): HTMLInputElement => {
  const newInput: HTMLInputElement = document.createElement("input");

  newInput.placeholder = input.placeholder;
  newInput.name = input.name;
  return newInput;
};

/**
 * retorna um HTMLButtonElement com o texto, classe e handler para o onCLick especificados
 *
 * @param button: Button - objeto Button com texto, classe? e handler? e type?
 * @returns: HTMLButtonElement
 *
 */
export const createButton = (button: Button): HTMLButtonElement => {
  const newButton: HTMLButtonElement = document.createElement("button");

  newButton.innerText = button.label;

  if (button.className) { newButton.className = button.className; }
  if (button.onClick) { newButton.addEventListener("click", button.onClick);}
  if (button.type) { newButton.type = button.type;}
  return newButton;
};

/**
 * retorna um HTMLFormElement com os campos para atualizar uma pessoa
 *
 * @param form: Form - contém um id, o callback para o evento onSubmit e um array de Inputs
 * @returns: HTMLFormElement
 *
 */
export const createForm = (form: Form): HTMLFormElement => {
  const newForm: HTMLFormElement = document.createElement("form");
  // const nameInput: Input = {
  //   placeholder: getNameByID(form.id, scientists) as string,
  //   name: "name-input",
  // };
  // const bioInput: Input = {
  //   placeholder: getBioByID(form.id, scientists) as string,
  //   name: "bio-input",
  // };
  const submitButton: Button = {
    label: "Atualizar",
    type: "submit",
  }

  const inputs: HTMLInputElement[] = form.inputs.map(createInput)
  const submitButtonElement: HTMLButtonElement = createButton(submitButton);

  inputs.forEach((input) => newForm.appendChild(input));
  newForm.appendChild(submitButtonElement);
  newForm.addEventListener("submit", form.onSubmit);
  return newForm;
};

/**
 * retorna uma linha da tabela com os dados da pessoa e o botão de update
 *
 * @param person: Person - dados da Pessoa {number, string, string}
 * @param showForm: callback - função que cria e mostra um formulario
 *
 * @returns: HTMLElement <tr> com os dados da pessoa e o botão de update
 *
 */
export const createRow = (row: TableRow): HTMLElement => {
  const newRow: HTMLElement = document.createElement("tr");
  const tableValues: string[] = Object.values(row.tableData).map(value => String(value));

  const tableDataElements: HTMLTableCellElement[] = tableValues.map(tableValue => {
    const newTableData: HTMLTableCellElement = document.createElement("td");
    newTableData.innerText = tableValue;
    return newTableData;
  })
  newRow.append(...tableDataElements)

  if (row.Buttons) {
    const buttonElements: HTMLButtonElement[] = row.Buttons.map(createButton);
    newRow.append(...buttonElements);
  }

  // const updateButton: Button = {
  //   label: "Atualizar",
  //   className: "btn-edit",
  //   onClick: () => showForm(person.id),
  // };
  // const deleteButton: Button = {
  //   label: "Deletar",
  //   className: "btn-delete",
  //   onClick: () => promptForDeletion(person.id),
  // };

  // const ctaUpdate: HTMLButtonElement = createButton(updateButton);
  // const ctaDelete: HTMLButtonElement = createButton(deleteButton);


  return newRow;
};
