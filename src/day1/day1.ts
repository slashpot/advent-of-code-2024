export function day1(input: string[]): number {
  let sum = 0;
  const arr1 = [], arr2 = [];

  input.forEach((x) => {
    const [first, second] = x.split('  ');
    console.log('first: ',first)
    console.log('second: ',second)
  })
  return 0;
}

function sort(arr: number[], num: number) {
  if(arr.length === 0) {
    arr.push(num)
  } else {
    let index = 0;
    const cur = arr[index];
    if(num <= cur) {
      arr.splice()
    }
  }
}
