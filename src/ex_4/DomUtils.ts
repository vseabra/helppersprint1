import { Button, Form, Input, TableRow } from "./types.js";

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
 * @param row: TableRow, contém a data presente em um tablerow e opcionalmente uma lista de botões
 *
 * @returns: HTMLElement <tr> com os dados passados
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

  if (row.buttons) {
    const buttonElements: HTMLButtonElement[] = row.buttons.map(createButton);
    newRow.append(...buttonElements);
  }

  return newRow;
};

