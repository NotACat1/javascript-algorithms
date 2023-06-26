/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  console.log(str.split(' '));
  return str.split(' ').map((word) => word.length !== 0 ? word[0].toUpperCase() + word.slice(1) : '').join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость  всё  простит')); // "Молодость Всё Простит"