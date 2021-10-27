// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
const count_vowels = (word: string): number => {
  const VOWELS: string[] = ["a", "e", "i", "o", "u"];

  let letters: string[] = word.toLowerCase().split("");
  let vowelsInWord: string[] = letters.filter((letter: string) => VOWELS.includes(letter));

  return vowelsInWord.length;
};
