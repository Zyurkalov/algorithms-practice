function queueTime(customers, n) {
    if(customers.length === 0) return 0
  
    return Math.max( ...(customers.reduce((total, time) => {
       total[total.indexOf(Math.min(...total))] += time;
       return total
    }, Array(n).fill(0))
    ))
  }
  