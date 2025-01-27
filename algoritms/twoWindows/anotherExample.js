//функция работате некорректно, просто оставил как пример

function collectFruits(s) {
  const BASKET_COUNT = 2; // Максимальное количество типов фруктов в корзинах
  const fruitCount = new Map(); // Хранит количество каждого типа фруктов
  let maxFruits = 0;
  let left = 0; // Левая граница скользящего окна

  for (let right = 0; right < s.length; right++) {
    // Добавляем текущий фрукт в корзину
    fruitCount.set(s[right], (fruitCount.get(s[right]) || 0) + 1);

    // Проверяем количество типов фруктов
    while (fruitCount.size > BASKET_COUNT) {
      // Убираем фрукты с левой стороны до тех пор, пока не останется только 2 типа
      fruitCount.set(s[left], fruitCount.get(s[left]) - 1);
      if (fruitCount.get(s[left]) === 0) {
        fruitCount.delete(s[left]);
      }
      left++;
    }

    // Обновляем максимальное количество фруктов в корзинах
    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}

const test = [0,1,2,3,2,2,2] 
console.log(collectFruits(test)) //5