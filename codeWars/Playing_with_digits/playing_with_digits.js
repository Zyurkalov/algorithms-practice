
function digPow (n, p) {
    const numArr = n.toString().split('')
  
    const value = numArr.reduce((result, num, index) => {
      return result = result + Number(num) ** (p + index)
    }, 0) / n
    return value === Math.round(value) ? value : -1
  }
  
  console.log(digPow(46288, 3)) // 51