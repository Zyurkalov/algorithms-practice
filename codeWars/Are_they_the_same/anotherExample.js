// Мое первое решение, через рекурсию. Сложность O(n)
function comp(array1, array2){

    if(array1 === null || array2 === null) return false
    if(array1.length !== array2.length) return false
    if(!array1.length) return true
    
    const target = array1[array1.length-1]
    const arrTarget = array1.slice(0, array1.length-1)
    let arrComparable = []
    let isAdded = false
  
    for(let i=0; i<array2.length; i++) { 
      if(target*target !== array2[i] || isAdded) arrComparable.push(array2[i])
      if (target*target === array2[i]) isAdded = true  
    }
  
    return comp(arrTarget, arrComparable)
  }

// Другое решение из codeWars. Сложность O(n log n)
function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
  }