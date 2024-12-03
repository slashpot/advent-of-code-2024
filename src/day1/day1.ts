export function day1(input: string[]): number {
  const arr1 : number[] = [], arr2: number[] = [];

  input.forEach((x) => {
    const [first, second] = x.split('  ');
    insert(arr1, Number(first))
    insert(arr2, Number(second))
  })

  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    const sum1 = Math.abs(arr1[i] - arr2[i]);
    sum += sum1
  }
  return sum;
}

export function insert(arr: number[], num: number) {
  if(arr.length === 0) {
    arr.push(num)
  } else {
    let index = 0;
    while(num > arr[index] && index < arr.length) {
      index++;
    }
    arr.splice(index, 0, num)
  }
}

