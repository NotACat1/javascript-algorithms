/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
  for (let itemNumber = 1; itemNumber <= num; itemNumber++) {
    let strRez = '';
    if (itemNumber % 3 === 0) strRez += 'fizz';
    if (itemNumber % 5 === 0) strRez += 'buzz';
    console.log(strRez || itemNumber);
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));