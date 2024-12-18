// сложность для требуемой памяти O(1)
// используется оператор XOR (^) - (Оператор побитового ИСКЛЮЧАЮЩЕГО ИЛИ)
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1, 2, 3, 2, 3, 1, 1])); // 1

// Все элементы, которые повторяются четное количество раз, обнуляются (так как они XOR-ятся сами с собой).
// Остаточный результат — это элемент, который встречается нечетное количество раз

// Другой пример:

// let a = 5, b = 3;

// // Обмен значениями с использованием XOR
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log(a); // 3
// console.log(b); // 5