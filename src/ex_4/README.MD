# Exercício 4 do primeiro sprint.

O arquivo ```main.ts``` contém o código que manipula o DOM.
O arquivo ```utils.ts``` contém funções auxiliares
A pasta ```dist/``` contém os arquivos compilados para o browser. e uma pagina html com os CTA's

os arquivos foram compilados com o comando ```tsc --module es6``` e eu editei manualmente o arquivo main.js para importar o arquivo "./utils.js" (ele estava importando "./utils")


## exemplo de uso(imperativo): 
```
let lista = ["1", "2", 3, 0, 0, "0"]
console.log(GetBiggestLowestMean(lista)) // [3, 0, 1]

let soStrings = ["1", "3", "dois", "cinco"]
console.log(GetBiggestLowestMean(soStrings)) // [3, 1, 2]
```
