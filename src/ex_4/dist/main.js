import { getBioByID, getNameByID, deleteByID, updateByID } from "./utils.js";
var lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    },
];
// cria uma linha da tabela com os dados da pessoa e o botão de update
var createRow = function (person) {
    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    var nameCell = document.createElement("td");
    var bioCell = document.createElement("td");
    var ctaUpdate = document.createElement("button");
    ctaUpdate.innerText = "Editar";
    ctaUpdate.className = "btn-edit";
    ctaUpdate.addEventListener("click", function () { return makeUpdateForm(person.id); });
    var ctaDelete = document.createElement("button");
    ctaDelete.innerText = "Deletar";
    ctaDelete.className = "btn-delete";
    ctaDelete.addEventListener("click", function () { return promptForDeletion(person.id); });
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
var renderTable = function (list) {
    var table = document.querySelector("#scientist-table");
    // remove todas as linhas antigas da tabela.
    table.innerHTML = "";
    var tableRows = list.map(createRow);
    tableRows.forEach(function (row) { return table.appendChild(row); });
};
var makeUpdateForm = function (id) {
    var container = document.querySelector("#update-form-container");
    var updateForm = document.createElement("form");
    var nameInput = document.createElement("input");
    nameInput.placeholder = String(getNameByID(id, lista));
    var bioInput = document.createElement("input");
    bioInput.placeholder = String(getBioByID(id, lista));
    var submitButton = document.createElement("button");
    submitButton.innerText = "Atualizar";
    submitButton.type = "submit";
    updateForm.appendChild(nameInput);
    updateForm.appendChild(bioInput);
    updateForm.appendChild(submitButton);
    // gambiarra que eu fiz para passar o valor do id com o evento de submit
    // acho que não é o melhor jeito de fazer isso.
    updateForm.addEventListener("submit", function (event) {
        return handleUpdateSubmit(event, id, {
            name: nameInput.value,
            bio: bioInput.value
        });
    });
    container.appendChild(updateForm);
};
// essa funçao atualiza a lista, renderiza novamente a tabela e destroi o forulário de update
var handleUpdateSubmit = function (event, personId, update) {
    event.preventDefault();
    // validação dos updates, se uma campo for vazio não é atualizado.
    update.bio = update.bio ? update.bio : getBioByID(personId, lista);
    update.name = update.name ? update.name : getNameByID(personId, lista);
    // atualiza a lista
    lista = updateByID(personId, lista, update);
    // destroi o formulario
    var container = document.querySelector("#update-form-container");
    container.innerHTML = "";
    // re-renderiza a tabela
    renderTable(lista);
};
var promptForDeletion = function (id) {
    var confirmation = confirm("tem certeza?");
    if (confirmation) {
        lista = deleteByID(id, lista);
        renderTable(lista);
    }
};
document.addEventListener("DOMContentLoaded", function () { return renderTable(lista); });
