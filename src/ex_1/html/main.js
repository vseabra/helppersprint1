const handleSubmit = (event) => {
  event.preventDefault()
  let inputElem = document.getElementsByName("palavra")[0]
  console.dir(inputElem)
  resultElem.innerHTML = count_vowels(inputElem.value)
}

const resultElem = document.querySelector("#resultado-display")
const form = document.querySelector("#form")

form.addEventListener("submit", handleSubmit)

