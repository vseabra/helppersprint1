// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
var count_vowels = function (word) {
    var VOWELS = ["a", "e", "i", "o", "u"];
    var letters = word.toLowerCase().split("");
    var vowels = letters.filter(function (letter) { return VOWELS.includes(letter); });
    return vowels.length;
};
