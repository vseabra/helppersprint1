import { createForm, createRow } from "./DomUtils.js";
import { scientists, updateScientist } from "./services.js";
export var renderTable = function (list) {
    var table = document.querySelector("#scientist-table");
    // remove todas as linhas antigas da tabela.
    table.innerHTML = "";
    var tableRows = list.map(function (scientist) { return createRow(scientist, renderForm); });
    tableRows.forEach(function (row) { return table.appendChild(row); });
};
var renderForm = function (id) {
    var container = document.querySelector("#update-form-container");
    container.innerHTML = ""; // destroi o formulario anterior.
    // TODO talvez mover para outro lugar? mas eu teria que passar o id de alguma forma...
    var handleSubmit = function (event) {
        event.preventDefault();
        var form = event.target;
        var nameInput = form.elements.namedItem("name-input");
        var bioInput = form.elements.namedItem("bio-input");
        var update = {};
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
    var form = { id: id, onSubmit: handleSubmit };
    var formElement = createForm(form);
    container.appendChild(formElement);
};
document.addEventListener("DOMContentLoaded", function () { return renderTable(scientists); });
