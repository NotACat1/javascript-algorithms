/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
  let maxArrFibonacci = arrFibonacci.length;
  while (n > arrFibonacci.length) {
    arrFibonacci.push(arrFibonacci[maxArrFibonacci - 2] + arrFibonacci[maxArrFibonacci - 1]);
    maxArrFibonacci++;
  }
  return arrFibonacci[n - 1];
}

const arrFibonacci = [0, 1];

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)