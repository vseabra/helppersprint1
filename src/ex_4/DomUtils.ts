import { Person} from "./types.js";
import { getBioByID, getNameByID } from "./utils.js";
import { scientists, promptForDeletion } from "./services.js"

//TODO criar uma interface para definir os botões e inputs 
//TODO procurar como tipar um callback? () => void parece errado.

/**
 * retorna um HTMLInputElement
 * 
 * @param placeholder: string - placeholder do input
 * @param name: string - nome do input, usado para encotnar o elemento no submit do form
 * @returns: HTMLInputElement
 *
 */
export const createInput = (placeholder :string, name: string): HTMLInputElement => {
  const input: HTMLInputElement = document.createElement("input");

  input.placeholder = placeholder;
  input.name = name;
  return input
}

/**
 * retorna um HTMLButtonElement com o texto, classe e handler para o onCLick especificados
 * 
 * @param label: string - texto que fica dentro do botão
 * @param className: string - classe do botão
 * @param onClick: callback - handler para o evento onClick
 * @returns: HTMLButtonElement
 *
 */
export const createButton = (label: string, className: string, onClick: (event: Event) => void): HTMLButtonElement => {
  const button: HTMLButtonElement = document.createElement("button");

  button.innerText = label;
  button.className = className;
  button.addEventListener("click", onClick)
  return button
}

/**
 * retorna um HTMLFormElement com os campos para atualizar uma pessoa
 * 
 * @param id: number - id da pessoa a ser atualizada
 * @param onSubmit: callback - handler para o evento onSubmit
 * @returns: HTMLFormElement
 *
 */
export const createForm = (id: number, onSubmit: (event: Event) => void): HTMLFormElement => {
  const form: HTMLFormElement = document.createElement("form");
  const nameInput: HTMLInputElement = createInput(getNameByID(id, scientists) as string, "name-input");
  const bioInput: HTMLInputElement = createInput(getBioByID(id, scientists) as string, "bio-input");
  // TODO usar a função createButton para criar os botões quando eu implementar a interface
  const submitButton: HTMLButtonElement = document.createElement("button");
  submitButton.innerText = "Atualizar";
  submitButton.type = "submit";

  form.appendChild(nameInput);
  form.appendChild(bioInput);
  form.appendChild(submitButton)
  form.addEventListener("submit", onSubmit);
  return form
}

/**
 * retorna uma linha da tabela com os dados da pessoa e o botão de update
 * 
 * @param person: Person - dados da Pessoa {number, string, string}
 * @param showForm: callback - função que cria e mostra um formulario
 * 
 * @remarks: não é muito elegante usar os callbacks aqui, mas é o que eu consegui fazer =(
 * @returns: HTMLElement <tr> com os dados da pessoa e o botão de update
 *
 */
export const createRow = (person: Person, showForm: (id: number) => void): HTMLElement => {
  const row: HTMLElement = document.createElement("tr");
  const idCell: HTMLElement = document.createElement("td");
  const nameCell: HTMLElement = document.createElement("td");
  const bioCell: HTMLElement = document.createElement("td");

  const ctaUpdate: HTMLButtonElement = createButton("Editar", "btn-edit", () => showForm(person.id))
  const ctaDelete: HTMLButtonElement = createButton("Deletar", "btn-delete", () => promptForDeletion(person.id))

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

