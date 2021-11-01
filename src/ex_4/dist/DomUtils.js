/**
 * retorna um HTMLInputElement
 *
 * @param input - objeto input, com placeholder e name
 * @returns: HTMLInputElement
 *
 */
export var createInput = function (input) {
    var newInput = document.createElement("input");
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
export var createButton = function (button) {
    var newButton = document.createElement("button");
    newButton.innerText = button.label;
    if (button.className) {
        newButton.className = button.className;
    }
    if (button.onClick) {
        newButton.addEventListener("click", button.onClick);
    }
    if (button.type) {
        newButton.type = button.type;
    }
    return newButton;
};
/**
 * retorna um HTMLFormElement com os campos para atualizar uma pessoa
 *
 * @param form: Form - contém um id, o callback para o evento onSubmit e um array de Inputs
 * @returns: HTMLFormElement
 *
 */
export var createForm = function (form) {
    var newForm = document.createElement("form");
    // const nameInput: Input = {
    //   placeholder: getNameByID(form.id, scientists) as string,
    //   name: "name-input",
    // };
    // const bioInput: Input = {
    //   placeholder: getBioByID(form.id, scientists) as string,
    //   name: "bio-input",
    // };
    var submitButton = {
        label: "Atualizar",
        type: "submit"
    };
    var inputs = form.inputs.map(createInput);
    var submitButtonElement = createButton(submitButton);
    inputs.forEach(function (input) { return newForm.appendChild(input); });
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
export var createRow = function (row) {
    var newRow = document.createElement("tr");
    var tableValues = Object.values(row.tableData).map(function (value) { return String(value); });
    var tableDataElements = tableValues.map(function (tableValue) {
        var newTableData = document.createElement("td");
        newTableData.innerText = tableValue;
        return newTableData;
    });
    newRow.append.apply(newRow, tableDataElements);
    if (row.buttons) {
        var buttonElements = row.buttons.map(createButton);
        newRow.append.apply(newRow, buttonElements);
    }
    return newRow;
};
