//это было первое решение, оно лучше читается,
//но сложность O(m * n log n) против O(m * n)
//задачу можно решить за O(m * log n) мрименяя кучи

function queueTime(customers, n) {
    if(customers.length === 0) return 0
    if(customers.length < n) return Math.max(...customers)
    
    
    const queueList = Array(n).fill(0)
    customers.forEach((people) => {
      queueList[0] += people
      queueList.sort((a,b) => a-b)
    })
    return queueList[queueList.length - 1]
  }