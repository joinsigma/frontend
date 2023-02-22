function recSum(n) {
  if ((n = 0)) {
    return 0;
  }
  return n + recSum(n - 1);
}

let output = recSum(3);
console.log(output);
