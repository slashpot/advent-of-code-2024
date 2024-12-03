export function day1(input: string[]): number {
  const arr1 : number[] = [], arr2: number[] = [];

  input.forEach((x) => {
    const [first, second] = x.split('  ');
    insert(arr1, Number(first))
    insert(arr2, Number(second))
  })

  console.log('arr1: ', arr1);
  console.log('arr2: ', arr2);

  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    const sum1 = Math.abs(arr1[i] - arr2[i]);
    console.log('sum1: ', sum1);

    sum += sum1
  }
  return sum;
}

function insert(arr: number[], num: number) {
  if(arr.length === 0) {
    arr.push(num)
  } else {
    let index = 0;
    while (true) {
      const cur = arr[index];
      if(num <= cur) {
        arr.splice(index, 0, num)
        break;
      } else {
        if(index === arr.length-1) {
          arr.push(num)
          break;
        }
        else index++;
      }
    }
  }
}
