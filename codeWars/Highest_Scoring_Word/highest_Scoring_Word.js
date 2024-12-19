function high(str){
    return str.split(' ').reduce((greatestString, w) => {
      
      const score = w.split('').reduce((sum, char) => {
          return sum + char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      }, 0)
      if(greatestString.score < score) {
        return {word: w, score}
      }
      return greatestString
  
    }, {word: '', score: 0}).word
  }
console.log(high('man i need a taxi up to ubud')) //taxi
console.log(high('what time are we climbing up the volcano')) //volcano
console.log(high('b aa')) //b