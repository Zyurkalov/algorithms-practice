// не оптимален, потому что имеет сложность O(n²) из за того, что каждая интерация работает сразу с двумя массивами
function duplicateEncode(word){
    const wordsArr = word.split('')
    const duplicate = wordsArr.filter((w, index) => wordsArr.indexOf(w.toLowerCase()) !== index)

    return wordsArr.map(w => 
      duplicate.includes(w) ? w = ')' : w = '('
    ).join('')
}

// не оптимален, потому что имеет сложность O(n²) из за того, что каждая интерация работает сразу с двумя массивами
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }