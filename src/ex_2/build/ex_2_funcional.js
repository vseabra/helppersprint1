"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateByID = exports.deleteByID = exports.getNameByID = exports.getBioByID = void 0;
/**
 * retorna a bio de uma pessoa ou undefined, se não existir
 *
 * @param id: number id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: string | undefined
 *
 */
var getBioByID = function (id, list) {
    var person = list.find(function (person) { return person.id === id; });
    return person ? person.bio : undefined;
};
exports.getBioByID = getBioByID;
/**
 * retorna o nome de uma pessoa ou undefined, se não existir
 *
 * @param id: number id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: string | undefined
 *
 */
var getNameByID = function (id, list) {
    var person = list.find(function (person) { return person.id === id; });
    return person ? person.name : undefined;
};
exports.getNameByID = getNameByID;
/**
 * retorna uma nova lista sem o elemento com o id passado
 *
 * @param id: number - id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: Person[]
 *
 */
var deleteByID = function (id, list) {
    var updatedList = list.filter(function (person) { return person.id !== id; });
    return updatedList;
};
exports.deleteByID = deleteByID;
/**
 * retorna uma nova lista com o elemento com o id passado sobescrito pelo update
 *
 * @param id: number -id da pessoa a ser buscada
 * @param list: Person[]
 * @param update: Update
 * @returns: Person[]
 *
 */
var updateByID = function (id, list, update) {
    var personToUpdate = list.find(function (person) { return person.id === id; });
    if (!personToUpdate) {
        return list;
    }
    var updatedPerson = __assign(__assign({}, personToUpdate), update);
    var updatedList = list.map(function (person) {
        return person.id !== personToUpdate.id ? person : updatedPerson;
    });
    return updatedList;
};
exports.updateByID = updateByID;
