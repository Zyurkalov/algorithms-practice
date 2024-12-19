function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}

// Метод Math.pow() возвращает основание, возведённое в степень показатель
// Math.pow(7, 2); // 49