const GetBiggestLowestMean = (list: Array<any>): Array<number> => {
  // criar uma nova lista, só com valores númericos
  const numericList: Array<number> = [];
  for (let i = 0; i < list.length; i++){
    const possibleNumber = Number(list[i]);

    if (!isNaN(possibleNumber)){
      numericList.push(possibleNumber);
    }

  }

  let sum: number = 0;
  let biggestNumber: number = numericList[0];
  let lowestNumber: number = numericList[0];

  // percorrer pela lista uma vez, buscando o maior, menor e somando todos os valores
  for (let i = 0; i < numericList.length; i++){
    sum += numericList[i];
    biggestNumber = numericList[i] > biggestNumber ? numericList[i] : biggestNumber;
    lowestNumber = numericList[i] < lowestNumber ? numericList[i] : lowestNumber;
  }
  let mean = sum / numericList.length;

  return [biggestNumber, lowestNumber, mean];

}

