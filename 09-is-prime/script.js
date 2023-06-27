/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

// Тест Ферма
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  const k = 4;
  for (let i = 0; i < k; i++) {
    let a = randomIntNumber(2, n - 2);
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

// Случайное целое число в интервале от min до max
function randomIntNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true