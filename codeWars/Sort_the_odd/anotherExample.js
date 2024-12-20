//первое решение было слишком громоздким :)
function sortArray(array){
  let oddObj = {};

  const test = array
    .filter((e, i) => {
      if (e % 2 !== 0) oddObj[i] = null;
      return e % 2 !== 0;
    })
    .sort((a, b) => a - b);

  const keys = Object.keys(oddObj);
  keys.forEach((key, i) => (oddObj[key] = test[i]));

  array.forEach((elem, i) => {
    if (oddObj[i] !== undefined) array[i] = oddObj[i];
  });
  return array;
}
  

  //другое решение из codeWars
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => (x % 2 ? odd.shift() : x));
}