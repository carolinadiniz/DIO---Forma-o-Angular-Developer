// generics 
function concatArray<T>(...itens: T[]):T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([2, 5], [3])
const strArray = concatArray<string[]>(["Carolina", "Ana"], ["Roberto"])

console.log(numArray)
console.log(strArray)