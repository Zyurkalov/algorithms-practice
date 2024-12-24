function expandedForm(num) {
    const arr = num.toString().split("")
    const lastIndex = arr.length - 1
    
    return  arr.reduce((result, n, i) => {
      if (n !== "0") {
        if(i) result += " + "
        return result += n + "0".repeat(lastIndex - i)
      } 
      else return result
    }, "")
  }

  console.log(expandedForm(1201)) // 1000 + 200 + 1