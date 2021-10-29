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
// recebe um id e retorna a bio correspodente.
export var getBioByID = function (id, list) {
    var person = list.find(function (person) { return person.id === id; });
    return person ? person.bio : undefined;
};
// recebe um id e retorna o nome.
export var getNameByID = function (id, list) {
    var person = list.find(function (person) { return person.id === id; });
    return person ? person.name : undefined;
};
// recebe um id e retorna a lista sem o elemento
export var deleteByID = function (id, list) {
    var updatedList = list.filter(function (person) { return person.id !== id; });
    return updatedList;
};
// recebe um id e uma mudança {name?: string, bio?: string} e retorna a lista com a mudança aplicada
export var updateByID = function (id, list, update) {
    var personToUpdate = list.find(function (person) { return person.id === id; });
    if (personToUpdate === undefined) {
        return list;
    }
    var updatedPerson = __assign(__assign({}, personToUpdate), update);
    var updatedList = list.map(function (person) {
        return person !== personToUpdate ? person : updatedPerson;
    });
    return updatedList;
};
