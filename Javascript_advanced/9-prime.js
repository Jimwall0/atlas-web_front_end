const countPrimeNumbers = () => {
  let prime = 0;

  const check = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = 2; i <= 100; i++) {
    if (check(i)) {
      prime++;
    }
  }
  return prime;
}

const start = performance.now();
const count = countPrimeNumbers();
const end = performance.now();
console.log(`Prime numbers between 2 and 100: ${count}`);
console.log(`Execution time of printing countPrimeNumbers was ${(end - start)} milliseconds.`);
