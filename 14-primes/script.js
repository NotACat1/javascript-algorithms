/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  for (let number = arrPrimes[arrPrimes.length - 1] + 1; num >= number; number++) {
    if (isPrime(number)) arrPrimes.push(number);
  }
  let indexArrPrimes = 0;
  while (num >= arrPrimes[indexArrPrimes]) {
    indexArrPrimes++;
  }
  return arrPrimes.slice(0, indexArrPrimes);
}

// Информация: https://ru.wikipedia.org/wiki/Тест_Соловея_—_Штрассена
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  const k = 4;
  for (let i = 0; i < k; i++) {
    let a = Math.floor(Math.random() * (n - 2)) + 2;
    if (GCD(a, n) !== 1 || powModular(a, n - 1, n) !== 1) return false;
  }  
  return true;
}

// Быстрое возведение в степень по модулю
// Информация: https://ru.wikipedia.org/wiki/Возведение_в_степень_по_модулю
function powModular(base, index, modulus) {
	let c = 1;
  for (let i = 1; i <= index; i++) {
    c = (c * base) % modulus;
  }
  return c;
}

// Нахождение НОД
// Информация: https://ru.wikipedia.org/wiki/Алгоритм_Евклида
function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

const arrPrimes = [2, 3, 5, 7];

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]