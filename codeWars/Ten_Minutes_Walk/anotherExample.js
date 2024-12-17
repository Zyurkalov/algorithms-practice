// этот вариант чище, но и более дорогой в плане производительности и расширяемости
const isValidWalk = a => a.length === 10 &&
  a.filter(e => e === 'n').length === a.filter(e => e === 's').length && 
  a.filter(e => e === 'w').length === a.filter(e => e === 'e').length;