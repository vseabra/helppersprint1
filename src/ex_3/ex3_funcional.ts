const GetBiggestLowestMean = (list: Array<any>): Array<Number> => {
  // declarei essas funções separadamente por legibilidae (linhas muito grandes princialmente com a tipagem)
  const numericFilter = (listItem: any): boolean => !isNaN(Number(listItem)); // filtra valores núemericos
  const sumReducer = (previous: number, current: number): number => previous + current; // usado na media.
  const biggestNumberReducer = (previous: number, current: number) => Math.max(previous, current);
  const lowestNumberReducer = (previous: number, current: number) => Math.min(previous, current);

  const filteredList: Array<number> = list.filter((numericFilter)).map((number: any) => Number(number));
  const mean: number = filteredList.reduce(sumReducer) / filteredList.length;
  const biggest: number = filteredList.reduce(biggestNumberReducer);
  const lowest: number = filteredList.reduce(lowestNumberReducer);

  return [biggest, lowest, mean];

}

let lista = ["1", "2", 3, 0, 0, "0"]
console.log(GetBiggestLowestMean(lista)) // [3, 0, 1]

let soStrings = ["1", "3", "dois", "cinco"]
console.log(GetBiggestLowestMean(soStrings)) // [3, 1, 2]
