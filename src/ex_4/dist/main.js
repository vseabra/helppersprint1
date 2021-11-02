var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createForm, createRow } from "./DomUtils.js";
import { scientists, updateScientist, promptForDeletion } from "./services.js";
import { getBioByID, getNameByID } from "./utils.js";
export var renderTable = function (list) {
    var table = document.querySelector("#scientist-table");
    // remove todas as linhas antigas da tabela.
    table.innerHTML = "";
    var tableRows = list.map(function (scientist) {
        var updateButton = {
            label: "Atualizar",
            className: "btn-edit",
            onClick: function () { return renderForm(scientist.id); }
        };
        var deleteButton = {
            label: "Deletar",
            className: "btn-delete",
            onClick: function () { return promptForDeletion(scientist.id); }
        };
        var row = {
            tableData: __assign({}, scientist),
            buttons: [updateButton, deleteButton]
        };
        return (createRow(row));
    });
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
    var nameInput = {
        placeholder: getNameByID(id, scientists),
        name: "name-input"
    };
    var bioInput = {
        placeholder: getBioByID(id, scientists),
        name: "bio-input"
    };
    var form = { id: id, onSubmit: handleSubmit, inputs: [nameInput, bioInput] };
    var formElement = createForm(form);
    container.appendChild(formElement);
};
document.addEventListener("DOMContentLoaded", function () { return renderTable(scientists); });
