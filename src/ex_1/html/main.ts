const count_vowels = (word: string): number => {
  const VOWELS: string[] = ["a", "e", "i", "o", "u"];

  let letters: string[] = word.toLowerCase().split("");
  let vowelsInWord: string[] = letters.filter((letter: string) => VOWELS.includes(letter));

  return vowelsInWord.length;
};

const handleSubmit = (event: Event) => {
  event.preventDefault()
  let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementsByName("palavra")[0]

  if (resultElement) {
    resultElement.innerHTML = String(count_vowels(inputElement.value))
  }
}

const resultElement: Element | null = document.querySelector("#resultado-display")
const formElement : Element | null = document.querySelector("#form")

if (formElement) {
  formElement.addEventListener("submit", handleSubmit)
}
