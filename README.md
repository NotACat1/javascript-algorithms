# Небольшой сборник алгоритмических задач

## Обзор

В этом репозитории вы найдёте 14 директорий для каждой из задач. Каждая директория содержит файл `index.html` для запуска алгоритма и файл `script.js`, где вам предстоит написать решения.

---

## Задача 1: «Палиндром»

**Палиндром** — это слово, предложение или последовательность символов, которая читается слева направо так же, как и справа налево. Например, «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.

Напишите функцию `palindrome(str)`, принимающую как аргумент строку. Функция должна вернуть `true`, если строка — палиндром, и `false`, если нет.

Считайте, что на вход всегда передаётся слово: то есть знаков препинания и пробелов в аргументе быть не может.

```js
function palindrome(str) {
  const checkStr = str.toLowerCase().replace(/[^a-zа-я]+/g, ''); // перевод в нижний регистр + избавление в строке от пробелов и знаков припинания
  let leftBorder = 0; // индекс левого символа
  let rightBorder = checkStr.length - 1; // индекс правого символа
  while (leftBorder <= rightBorder) {
    if (checkStr[leftBorder] != checkStr[rightBorder]) return false;
    leftBorder++;
    rightBorder--;
  }
  return true;
}
```

---

## Задача 2: «FizzBuzz»

Напишите функцию `fizzBuzz(n)`, принимающую как аргумент натуральное число. Функция должна выводить в консоль числа от 1 до `n`, заменяя числа:

* кратные трём — на `fizz`;
* кратные пяти — на `buzz`;
* кратные и трём, и пяти одновременно — на `fizzbuzz`.

```js
function fizzBuzz(num) {
  for (let itemNumber = 1; itemNumber <= num; itemNumber++) {
    let strRez = '';
    if (itemNumber % 3 === 0) strRez += 'fizz';
    if (itemNumber % 5 === 0) strRez += 'buzz';
    console.log(strRez || itemNumber);
  }
}
```

---

## Задача 3: «Развернуть слова в предложении»

Напишите функцию `reverseWords(str)`, принимающую на вход строку. Функция должна вернуть новую строку, расставив слова в обратном порядке. Если в строке есть знаки препинания, их можно удалить или оставить — на ваше усмотрение.

```js
function reverseWords(str) {
  return str.trim().replace(/[^a-zA-Zа-яА-Я ]+/g, '').split(' ').reverse().join(' ');
}
```

---

## Задача 4: «С большой буквы»

Напишите функцию `capitalize(str)`. Функция должна возвращать новую строку каждое слово в которой начинается с прописной буквы.

```js
function capitalize(str) {
  return str.split(' ').map((wordStr) => wordStr.length !== 0 ? wordStr[0].toUpperCase() + wordStr.slice(1) : '').join(' ');
}
```

---

## Задача 5: «Найти гласные»

Напишите функцию `findVowels(str)`, принимающую на вход кириллическую строку `str`  и возвращающую количество гласных, содержащихся в этой строке.

Для вашего удобства вот массив кириллических гласных:

```js
['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
```

```js
function findVowels(str) {
  const arrVowelLetters = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
  return str.toLowerCase().split('').reduce((colVowels, letterStr) => arrVowelLetters.includes(letterStr) ? colVowels + 1 : colVowels, 0);
}
```

---

## Задача 6: «Уникальные числа»

Напишите функцию `uniq(arr)`, принимающую на вход массив целых чисел. Функция должна возвращать массив уникальных чисел, которые содержатся в переданном массиве. То есть, дубликаты должны быть удалены.

```js
function uniq(arr) {
  return arr.filter((numberArr, indexNumberArr, selfArr) => indexNumberArr === selfArr.indexOf(numberArr));
}
```

---

## Задача 7: «Анаграмма»

Два слова называют **анаграммами**, если они состоят из одних и тех же букв.

Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения). Для простоты примите, что в этих строках нет пробелов и знаков препинания.

```js
function anagram(str1, str2) {
  return sortLettersWord(str1) === sortLettersWord(str2);
}

function sortLettersWord(str) {
  return str.toLowerCase().split('').sort().join('');
}
```

---

## Задача 8: «Фибоначчи»

**Последовательность Фибоначчи** — это порядок чисел, где каждое последующее число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Напишите функцию, которая принимает на вход число `n` и возвращает n-й элемент последовательности Фибоначчи.

```js
function fibonacci(n) {
  let maxArrFibonacci = arrFibonacci.length;
  while (n > arrFibonacci.length) {
    arrFibonacci.push(arrFibonacci[maxArrFibonacci - 2] + arrFibonacci[maxArrFibonacci - 1]);
    maxArrFibonacci++;
  }
  return arrFibonacci[n - 1];
}

const arrFibonacci = [0, 1];
```

---

## Задача 9: «Простое число»

Напишите функцию `isPrime(n)` для проверки, простое число `n` или нет. Напомним, что число называют простым, если оно больше 1 и делится без остатка только на 1 и на само себя.

На вход функция должна принимать число `n` и возвращать `true`, если `n` простое, и `false` — если нет.

**Тест простоты Ферма** в теории чисел — это тест простоты натурального числа n, основанный на малой теореме Ферма.

Алгоритм теста Ферма расписан в [статье Хабр](https://habr.com/ru/articles/205318/).

```js
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
```

Возведение в степень по модулю — одна из операций над натуральными числами — возведение в степень, — выполняемая по модулю. Находит применение в информатике, особенно, в области криптографии с открытым ключом.

Возведение в степень по модулю — это вычисление остатка от деления натурального числа a (основание), возведенного в степень n (показатель степени), на натуральное число m (модуль).

Алгоритм быстрого возведения в степень расписана в [статье](https://ru.wikipedia.org/wiki/Возведение_в_степень_по_модулю).

```js
// Быстрое возведение в степень по модулю
// Информация: https://ru.wikipedia.org/wiki/Возведение_в_степень_по_модулю
function powModular(base, index, modulus) {
  let c = 1;
  for (let i = 1; i <= index; i++) {
    c = (c * base) % modulus;
  }
  return c;
}
```

Для нахождения наибольшего общего делителя (НОД) воспользуемся [алгоритмом Евклида](https://ru.wikipedia.org/wiki/Алгоритм_Евклида).

```js
// Нахождение НОД
// Информация: https://ru.wikipedia.org/wiki/Алгоритм_Евклида
function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}
```

Генерация случайного целого числа в диапозоне от `min` до `max` позаимствована:

```js
// Случайное целое число в интервале от min до max
function randomIntNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
```

---

## Задача 10: «Факториал»

Напишите функцию `factorial(n)`, возвращающую факториал неотрицательного целого числа. Факториал — это произведение всех натуральных чисел от 1 до `n` включительно. Факториал 0 равен 1.

```js
function factorial(n) {
  for (let i = factorialNumbers.length; i <= n; i++) {
    factorialNumbers.push(factorialNumbers[i - 1] * i);
  }
  return factorialNumbers[n];
}

const factorialNumbers = [1];
```

---

## Задача 11: «Пересечения массивов»

Напишите функцию `intersection(arr1, arr2)`. Она должна принимать на вход два массива целых чисел. Функция должна вернуть новый массив чисел, содержащихся в обоих исходных массивах.

```js
function intersection(arr1, arr2) {
  const rez = [];
  arr1.forEach(item => { if (arr2.includes(item) && !rez.includes(item)) rez.push(item); });
  return rez;
}
```

---

## Задача 12: «Посчитать количество нулей»

Напишите функцию `countZeros(n)`, принимающую на вход натуральное число `n`. Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до `n` включительно.

```js
function countZeros(n) {
  let colZeros = 0;
  for (let number = 10; number <= n; number++) {
    colZeros += (number + '').replace(/[1-9]+/g, '').length;
  }
  return colZeros;
}
```

---

## Задача 13: «Сумма двух»

Напишите функцию `sumOfTwo(arr, num)`. Её аргументы: массив целых чисел `arr` и целое число `num`. Функция должна вернуть `true`, если в переданном массиве есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет, функция должна вернуть `false`.

```js
function sumOfTwo(arr, sum) {
  let indexArr = 0;
  let flgFunct = false;
  while (Math.ceil(arr.length / 2) >= indexArr && !flgFunct) {
    flgFunct = arr.includes(sum - arr[indexArr], indexArr);
    indexArr++;
  }
  return flgFunct;
}
```

---

## Задача 14: «Простые числа»

Напишите функцию `primes(n)`. Её единственный аргумент — целое число `n`. Функция должна возвращать массив простых чисел от 2 до `n`.

```js
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
```

**Тест простоты Ферма** в теории чисел — это тест простоты натурального числа n, основанный на малой теореме Ферма.

Алгоритм теста Ферма расписан в [статье Хабр](https://habr.com/ru/articles/205318/).

```js
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
```

Возведение в степень по модулю — одна из операций над натуральными числами — возведение в степень, — выполняемая по модулю. Находит применение в информатике, особенно, в области криптографии с открытым ключом.

Возведение в степень по модулю — это вычисление остатка от деления натурального числа a (основание), возведенного в степень n (показатель степени), на натуральное число m (модуль).

Алгоритм быстрого возведения в степень расписана в [статье](https://ru.wikipedia.org/wiki/Возведение_в_степень_по_модулю).

```js
// Быстрое возведение в степень по модулю
// Информация: https://ru.wikipedia.org/wiki/Возведение_в_степень_по_модулю
function powModular(base, index, modulus) {
	let c = 1;
  for (let i = 1; i <= index; i++) {
    c = (c * base) % modulus;
  }
  return c;
}
```

Для нахождения наибольшего общего делителя (НОД) воспользуемся [алгоритмом Евклида](https://ru.wikipedia.org/wiki/Алгоритм_Евклида).

```js
// Нахождение НОД
// Информация: https://ru.wikipedia.org/wiki/Алгоритм_Евклида
function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}
```

Генерация случайного целого числа в диапозоне от `min` до `max` позаимствована:

```js
// Случайное целое число в интервале от min до max
function randomIntNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
```
