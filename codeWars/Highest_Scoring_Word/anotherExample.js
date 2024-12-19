
// это мое первое решение
function high(str) {
    let greatestNumber = 0
    let greatestString = ''
  
    str.split(' ').forEach((elem) => {
      let result = 0
  
      for(let i=0; i<elem.length; i++) {
        result = result + elem.charCodeAt(i) - 'a'.charCodeAt(0) + 1 
      }
      if(greatestNumber < result) {
        greatestNumber = result
        greatestString = elem
      }
    })
    return greatestString
  }

// лучшее решение, хотя мое вроде бы лучше в плане производительности
  function high(s){
    let as = s
      .split(" ")
      .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(" ")[as.indexOf(Math.max(...as))];
  }