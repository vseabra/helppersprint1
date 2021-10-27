var count_vowels = function (word) {
    var VOWELS = ["a", "e", "i", "o", "u"];
    var letters = word.toLowerCase().split("");
    var vowelsInWord = letters.filter(function (letter) { return VOWELS.includes(letter); });
    return vowelsInWord.length;
};
var handleSubmit = function (event) {
    event.preventDefault();
    var inputElement = document.getElementsByName("palavra")[0];
    if (resultElement) {
        resultElement.innerHTML = String(count_vowels(inputElement.value));
    }
};
var resultElement = document.querySelector("#resultado-display");
var formElement = document.querySelector("#form");
if (formElement) {
    formElement.addEventListener("submit", handleSubmit);
}
