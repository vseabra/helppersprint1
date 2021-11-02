const getBiggestLowestMean = (list: Array<any>): Array<number> => {
  // declarei essas funções separadamente por legibilidae (linhas muito grandes princialmente com a tipagem)
  const numericFilter = (listItem: any): boolean => !isNaN(Number(listItem)); // filtra valores núemericos
  const sumReducer = (previous: number, current: number): number => previous + current; 
  const biggestNumberReducer = (previous: number, current: number) => Math.max(previous, current);
  const lowestNumberReducer = (previous: number, current: number) => Math.min(previous, current);

  const filteredList: Array<number> = list.filter((numericFilter)).map((number: any) => Number(number));
  const mean: number = filteredList.reduce(sumReducer) / filteredList.length;
  const biggest: number = filteredList.reduce(biggestNumberReducer);
  const lowest: number = filteredList.reduce(lowestNumberReducer);

  return [biggest, lowest, mean];

}

