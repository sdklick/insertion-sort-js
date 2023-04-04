//INSERTION SORT implementation

let arr = [8, 2, 3, 7, 1,4];

console.log(arr);

let n = arr.length;

for (let i = 1; i < n; i++) {
  let key = arr[i];
  let j = i - 1;
  for (j; j >= 0 && key < arr[j]; j = j - 1) {
    arr[j+1]=arr[j]
  }
  arr[j+1]=key
}

console.log(arr)
