function thirdMax(arr: number[]): number {

  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === first || arr[i] === second || arr[i] === third) {
      continue;
    }

    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    }
    else if (arr[i] > second) {
      third = second;
      second = arr[i];
    }
    else if (arr[i] > third) {
      third = arr[i];
    }
  }

  if (third === -Infinity) {
    return first;
  }

  return third;
}

console.log(thirdMax([3, 2, 1]));