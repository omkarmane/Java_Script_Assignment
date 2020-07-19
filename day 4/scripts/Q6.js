
console.log('hello');
function prime() {
  let n = Number(prompt("Enter a Number: "));
  console.log(`Prime Numbers till ${n}:\n`);
  nextPrime
  for(let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
      if (i % j == 0) continue  // not a prime, go next i
    }
    console.log(i); // a prime
  }
}