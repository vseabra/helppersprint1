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
exports.__esModule = true;
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
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].bio;
        }
    }
    return undefined;
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
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].name;
        }
    }
    return undefined;
};
exports.getNameByID = getNameByID;
/**
 * modifica a lista de pessoas para não incluir o elemento com o id passado
 *
 * @param id: number - id da pessoa a ser buscada
 * @param list: Person[]
 * @returns: void
 *
 */
var deleteByID = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1);
        }
    }
};
exports.deleteByID = deleteByID;
/**
 * modifica a lista de pessoas, subscrevendo o elemento com o id passado com o update
 *
 * @param id: number -id da pessoa a ser buscada
 * @param list: Person[]
 * @param update: Update
 * @returns: void
 *
 */
var updateByID = function (id, list, update) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list[i] = __assign(__assign({}, list[i]), update);
        }
    }
};
exports.updateByID = updateByID;
